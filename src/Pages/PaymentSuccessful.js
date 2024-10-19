import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './PaymentSuccessful.css';


import config from './config';
const BaseURL = config.BASE_URL;

const PaymentSuccessful = () => {
  const { bicycleId } = useParams();  // Extract bicycleId from the URL
  const [bookingId, setBookingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log("Enter in the book bicycle fubction with bicycyleId :", bicycleId);
  
  useEffect(() => {
    const confirmBooking = async () => {

      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("Please login first");
          navigate('/Login');
          return;
        }
 
         // Retrieve booking details from localStorage

        const bookingDate = localStorage.getItem('bookingDate');
        const returnDate = localStorage.getItem('returnDate');
        const totalCost = localStorage.getItem('totalCost');

       console.log(" payment has been done now it's time to do book that bicycle");
       console.log("bicycleId :" , bicycleId);
       console.log("bookingDate :" , bookingDate);
       console.log("returnDate :" , returnDate);

        // Make a POST request to create the booking after payment
        const response = await fetch(`${BaseURL}/booking/book`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Include user token for authentication
          },
          body: JSON.stringify({
            bicycleId, // Pass the bicycleId to book the correct bicycle
            bookingDate,
            returnDate,
            totalCost// You can also pass additional details like bookingDate, returnDate, etc.
          }),
        });

        if (response.ok) {
          const bookingId = await response.json();
          console.log("BookingId is : ", bookingId);
          setBookingId(bookingId);  // Store the generated bookingId

          setLoading(false);  // Booking successful, stop loading
        } else {
          console.error('Failed to book the bicycle');
          navigate('/payment-failed');  // Redirect to failure page if booking fails
        }
      } catch (error) {
        console.error('Error during booking:', error);
        navigate('/payment-failed');  // Redirect to failure page if an error occurs
      }
    };


   

    confirmBooking();  // Confirm the booking after successful payment
  }, [bicycleId, navigate]);
  
  // if we done payment and booked bicycle successfylly then it render to home
  useEffect(() => {
    if (!loading && bookingId) {
      // After 3 seconds, navigate to the home page
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [loading, bookingId, navigate]);


  if (loading) {
    return <div>Loading...</div>;  // Show loading state while booking is being confirmed
  }

  return (
    <div className='massage'>
      {bicycleId ? (
        <div> 
           Payment Successful and Booking Confirmed! You will be redirected to the home page shortly.
        </div>
      ) : (
        <div>Failed to confirm the booking.</div>
      )}
    </div>
  );
};

export default PaymentSuccessful;
