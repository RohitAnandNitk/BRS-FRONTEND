import React, { useEffect, useState } from 'react';
import './AllBookingHistory.css';


import config from './config';
const BaseURL = config.BASE_URL;

function AllBookingHistory() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [error, setError] = useState(null);
  
   // Function to format the date and get the day of the week
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options); // Adjust locale as needed
  };

  useEffect(() => {
    const fetchBookingsHistory = async () => {
      console.log("Fetching booking history...");
      const token = localStorage.getItem('token');
      
      try {
        const response = await fetch(`${BaseURL}/booking/history`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // JWT token in the header
          },
        });

        if (response.status === 401 || response.status === 403) {
          throw new Error('Unauthorized or Forbidden');
        }

        const data = await response.json();

        if (response.ok) {
          setBookingHistory(data);
        } else {
          throw new Error('Failed to fetch booking history');
        }

      } catch (err) {
        console.error(err);
        setError('Error fetching booking history');
      }
    };

    fetchBookingsHistory();
  }, []);

  return (
    <div className='booking-history'>
      <h1>All Booking History</h1>
      {error && <p>{error}</p>}
      {bookingHistory.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookingHistory.map((bicycleHis, index) => (
          <div key={index} className='one-history'>
          
            <p>Renter Name: {bicycleHis.userId?.name}</p>
            <p>Renter Email: {bicycleHis.userId?.email}</p>
            <p>Rent: {bicycleHis.totalCost}</p>
            <p>Status: {bicycleHis.status}</p>
            <p>Booking Date: {formatDate(bicycleHis.bookingDate)}</p>
            <p>Return Date: {formatDate(bicycleHis.returnDate)}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AllBookingHistory;
