import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import  {loadStripe} from '@stripe/stripe-js';
import './Payment.css';


import config from './config';
const BaseURL = config.BASE_URL;

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();


  // Extracting state from previous page (bicycleId, booking details, amount)
  const { bicycleId, bookingDate, returnDate, totalCost } = location.state;

  
  
  
  const handlePayment = async () => {
    
    console.log("bicycleId :", bicycleId);
    console.log("bookingDate:", bookingDate);
    console.log("returnDate:", returnDate);
    console.log("amount:", totalCost);

     
    // Store booking details in localStorage or sessionStorage
    localStorage.setItem('bicycleId', bicycleId);
    localStorage.setItem('bookingDate', bookingDate);
    localStorage.setItem('returnDate', returnDate);
    localStorage.setItem('totalCost', totalCost);


    // Simulate payment process (replace this with actual payment gateway logic)
    console.log("Processing payment for amount: ₹", totalCost);
    
    const stripe = await loadStripe("pk_test_51QAmyCJXnl81skceao6bEddQDpXsgb7YA3yhUXbr3Qx0EvBEj1HtssuuDWNIY7YNVYNKXN3EgAG1yG6gOOO4xBhl00dAik6tR0"); // Publishable key

    // Call the backend to create a payment session
    const response = await fetch(`${BaseURL}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({bicycleId , totalCost }),
      });
  
      const session = await response.json();

       // Redirect to the payment page provided by the gateway
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }

  };

  return (  
    <div className="payment-container">
      <h1>Proceed with Payment</h1>
      <p>Total Amount : ₹{totalCost}</p>
      <button className= "pay-btn" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
