import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookNow.css';


const BaseURL = "https://brs-backend-2rfc.onrender.com";


const BookNow = () => {
  const { id } = useParams(); // Extract the bicycle ID from the URL
  console.log("bicycle id :", id);

  const navigate = useNavigate(); // To redirect the user after booking
 
  const [bookingDetails, setBookingDetails] = useState({
    bookingDate: '',
    returnDate: '',
    totalCost: ''
  });

  const [bicycle, setBicycle] = useState(null); // Store bicycle details
  
   // sucessful submit
   const [sucess, showMess] = useState(false);

  // Fetch the bicycle details
  useEffect(() => {
    const fetchBicycle = async () => {
      try {
        const response = await fetch(`${BaseURL}/bicycle/${id}`); // 
        const data = await response.json();
        setBicycle(data); // Set the fetched bicycle details

        console.log("bicycle data :" ,data);
      } catch (error) {
        console.error('Error fetching bicycle details:', error);
      }
    };
    
    fetchBicycle();
  }, [id]);

  // Handle form submission for booking
  const handleBooking = async () => {
    console.log("Enter in handleBooking :-");
  
    const token = localStorage.getItem('token'); // Assume user is authenticated and token is stored
    console.log("token:", token);
    
    try {
      const response = await fetch(`${BaseURL}/booking/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token for authentication
        },
        body: JSON.stringify({
          bicycleId: id,
          bookingDate: bookingDetails.bookingDate,
          returnDate: bookingDetails.returnDate,
          // Remove totalCost here as the backend handles it
        })
      });
  
      if (response.ok) {
       // alert('Booking successful!');
        showMess(true);
        setTimeout(() =>{
          navigate('/history'); // Redirect to the booking history page after booking
        }, 2000 ); 

      } else {
        console.error('Failed to book the bicycle');
      }
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };
  

  // Handle input changes for the form
  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booknow-container">
    {bicycle ? (
      <div className="bicycle-details">
        <h2 className="bicycle-title">Book Bicycle: {bicycle.type}</h2>
        <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> You have Booked  Sucessffuly.</p> : ""}</h2>
        <p className="bicycle-location">Location: {bicycle.location}</p>
        <p className="bicycle-rent">Rent per day: ₹{bicycle.rent}</p>
  
        <div className="form-group">
          <label className="form-label">Booking Date:</label>
          <input
            type="date"
            name="bookingDate"
            value={bookingDetails.bookingDate}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
  
        <div className="form-group">
          <label className="form-label">Return Date:</label>
          <input
            type="date"
            name="returnDate"
            value={bookingDetails.returnDate}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
  
        <button className="booknow-btn" onClick={handleBooking}>Confirm Booking</button>
      </div>
    ) : (
      <p className="loading-message">Loading bicycle details...</p>
    )}
  </div>
  
  );
};

export default BookNow;
