import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookNow.css';


import config from './config';
const BaseURL = config.BASE_URL;



const BookNow = () => {
  const { id } = useParams(); // Extract the bicycle ID from the URL
  console.log("bicycle id :", id);

  const navigate = useNavigate(); // To redirect the user after booking
 
  const [bookingDetails, setBookingDetails] = useState({
    bookingDate: '',
    returnDate: '',
    totalCost: ''
  });
  const [success, setSuccess] = useState(false);
  const [bicycle, setBicycle] = useState(null); // Store bicycle details
  
   // sucessful submit
   const [sucess, showMess] = useState(false);

  // Fetch the bicycle details
  useEffect(() => {
    const fetchBicycle = async () => {
      console.log("Enter in fetch bicycle function : - ")
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
  }, []);

  // calculating the cost 
  const calculatelCost = () => {
    // Convert the bookingDate and returnDate to Date objects
    const bookingDateTime = new Date(bookingDetails.bookingDate);
    const returnDateTime = new Date(bookingDetails.returnDate);
    // Calculate the time difference in milliseconds
    const timeDiffInMs = returnDateTime - bookingDateTime;
    // Convert the time difference to hours
    const hoursBooked =( timeDiffInMs / (1000 * 60 * 60)) / 24 ; 
    console.log( `booked for ${ hoursBooked} days`);
    // Calculate the total cost based on the number of hours
    let totalCost = bicycle.rent;
    if(hoursBooked){
      totalCost =  bicycle.rent * hoursBooked;
    }
    return totalCost;
  } 


  // Handle form submission for booking
  const handleBooking = () => {
    console.log("Initiating payment...");
  
    const token = localStorage.getItem('token'); // Assume user is authenticated and token is stored
  
    if (token === null) {
      console.log("Please login first");
      setSuccess(true);
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
      return;
    }
  
    // Redirect to payment page with booking details (without creating booking yet)
    navigate(`/payment`, {
      state: {
        bicycleId: id,
        bookingDate: bookingDetails.bookingDate,
        returnDate: bookingDetails.returnDate,
        totalCost : calculatelCost(), // Pass the amount (rent)
      }
    });
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
        <h2 style={{color:'green', fontSize:'20px'}}>{ success ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> Please Login First. </p> : ""}</h2>
        <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> Booked Successfully. </p> : ""}</h2>
       
        {/* <p className="bicycle-location">Location: {bicycle.location}</p> */}
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
