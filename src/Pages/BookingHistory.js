import React, { useState, useEffect } from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import './BookingHistory.css';

import config from './config';
const BaseURL = config.BASE_URL;


const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
   
  
   // Function to format the date and get the day of the week
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options); // Adjust locale as needed
  };

    useEffect(() => {
      const fetchBookings = async () => {
        const token = localStorage.getItem('token');
        
        console.log("token" ,token);

        const response = await fetch( `${BaseURL}/booking` , { // 'http://localhost:4000/booking'
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();

        if (response.status === 404) {
          setBookings([]);
        } else {
          console.log(data);
          setBookings(data);
        }

        console.log(data);
      };
      fetchBookings();
    }, []);

    const handleReturnClick = (bookingId) => {
      console.log("button clicked for the returnBicycle page");
      navigate(`/return-bicycle/${bookingId}`);

    };

  return (
    <>
    <div className='booking-history'>
      <h2>Your Booking History</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id} className='booking-list'>
           
            <p>Total Cost: ₹{booking.totalCost}</p>
            <p>Booking Date: {formatDate(booking.bookingDate)}</p>
            <p>Return Date: {formatDate(booking.returnDate)}</p>
            <p>Booking status : {booking.status}</p>

            
            {booking.status !== 'ongoing' ? (
              <p className="completed-text">Completed</p>
            ) : (
              <button onClick={() => handleReturnClick(booking._id)}>Return Bicycle</button>
            )}
          </li>
        ))}
      </ul>
    </div>
     {/* Back to Home link */}
     <div className="back-link">
     <Link to="/">Back to Home</Link>
   </div>
    </>
  );
};

export default BookingHistory;
