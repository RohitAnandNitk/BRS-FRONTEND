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
  const [dates, setDates] = useState(false); // Handle bicycle dates
  const [avai, setAvai] = useState(false); // handle availability of bicycle

  // Fetch the bicycle details
  useEffect(() => { 
    const fetchBicycle = async () => {
      console.log("Enter in fetch bicycle function : - ")
      try {
        const response = await fetch(`${BaseURL}/bicycle/${id}`);
        const data = await response.json();
        setBicycle(data); // Set the fetched bicycle details
       
        console.log("bicycle data :", data);

       if(data.status !== "available"){
          setAvai(true);
          return;
       }
      } catch (error) {
        console.error('Error fetching bicycle details:', error);
      }
    };
    
    fetchBicycle();
  }, [id]); // Add id to the dependency array

  // calculating the cost 
  const calculatelCost = () => {
    const bookingDateTime = new Date(bookingDetails.bookingDate);
    const returnDateTime = new Date(bookingDetails.returnDate);

    // Calculate the time difference in milliseconds
    const timeDiffInMs = returnDateTime - bookingDateTime;
    // Convert the time difference to days
    const daysBooked = timeDiffInMs / (1000 * 60 * 60 * 24);

    console.log(`Booked for ${daysBooked} days`);
    // Calculate the total cost based on the number of days
    let totalCost = bicycle.rent;
    if (daysBooked > 0) {
      totalCost = bicycle.rent * daysBooked;
    }
    return totalCost;
  };

  // Handle form submission for booking
  const handleBooking = () => {
    if(avai) return;
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
    
    // Check if both bookingDate and returnDate are selected
    if (!bookingDetails.bookingDate || !bookingDetails.returnDate) {
      setDates(true); // Set error state if dates are not selected
      return;
    }

    const bookingDateTime = new Date(bookingDetails.bookingDate);
    const returnDateTime = new Date(bookingDetails.returnDate);

    // Handle booking dates validity
    if (bookingDateTime > returnDateTime) {
      setDates(true);
      return;
    }
  

    
    
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
   // console.log(formattedDate);  // Output: "2024-11-07"
    
    const bookingDatest = `${bookingDateTime.getFullYear()}-${(bookingDateTime.getMonth() + 1).toString().padStart(2, '0')}-${bookingDateTime.getDate().toString().padStart(2, '0')}`;
    const bookingDateend = `${returnDateTime.getFullYear()}-${(returnDateTime.getMonth() + 1).toString().padStart(2, '0')}-${returnDateTime.getDate().toString().padStart(2, '0')}`;
    
    console.log("booking start :" + bookingDatest);
    console.log("booking end : "  + bookingDateend);
    console.log(" Current data : " + formattedDate);

  

    if(bookingDatest < formattedDate ){
      setDates(true);
      return;
    }
    

    // Redirect to payment page with booking details (without creating booking yet)
    navigate(`/payment`, {
      state: {
        bicycleId: id,
        bookingDate: bookingDetails.bookingDate,
        returnDate: bookingDetails.returnDate,
        totalCost: calculatelCost(), // Pass the amount (rent)
      }
    });
  };

  // Handle input changes for the form
  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
    setDates(false); // Reset date error state on input change
  };

  return (
    <div className="booknow-container">
      {bicycle ? (
        <div className="bicycle-details">
          <h2 className="bicycle-title">Book Bicycle: {bicycle.type}</h2>
          <h2 style={{ color: 'green', fontSize: '20px' }}>{success ? <p><img src="https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{ height: '20px', marginRight: '8px' }} /> Please Login First. </p> : ""}</h2>
          <h2 style={{ color: 'red', fontSize: '20px' }}>{avai ? <p style={{ color: 'red' }}>Selected Bicycle is Unavailable. Please select another!</p> : ""}</h2>
          <h2 style={{ color: 'red', fontSize: '20px' }}>{dates ? <p style={{ color: 'red' }}>Please Select Valid Date.</p> : ""}</h2>
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
