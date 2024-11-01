// navigate to the home

import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentFailed = () => {
  const { bicycleId } = useParams();  // Extract bicycleId from the URL
  console.log("Payment failed please try again");
  return (
    <div>
      <h2>Payment Canceled</h2>
      <p>Your payment for Booking #{bicycleId} was canceled. You can try again.</p>
    </div>
  );
};

export default PaymentFailed;
