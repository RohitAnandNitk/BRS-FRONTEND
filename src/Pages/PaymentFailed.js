// navigate to the home

import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentFailed = ({ match }) => {
  const { bicycleId } = useParams();  // Extract bicycleId from the URL

  return (
    <div>
      <h2>Payment Canceled</h2>
      <p>Your payment for Booking #{bicycleId} was canceled. You can try again.</p>
    </div>
  );
};

export default PaymentFailed;
