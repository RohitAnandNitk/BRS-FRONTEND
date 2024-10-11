import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReturnBicycle.css';

const BaseURL = "http://localhost:4000";


const ReturnBicycle = () => {
  const { bookingId } = useParams(); // Extract bookingId from URL params
  const [bicycleId, setBicycleId] = useState(null);
  const [returnLocation, setReturnLocation] = useState('');
  const [locations, setLocations] = useState([]); // You can populate locations from your location manager
  const [validLocations, setValidLocations] = useState([]);
  const navigate = useNavigate();
 
   // Fetch valid locations from the backend when the component mounts
   useEffect(() => {
    const fetchLocations = async () => {
      console.log("enter the fetch location function");
      const response = await fetch(`${BaseURL}/locations`);
      const data = await response.json();
      console.log(" location Data : " , data);
      setValidLocations(data); // Set the locations in the state
    };
    fetchLocations();
  }, []);

  // Fetch the booking details using bookingId
  useEffect(() => {
    const fetchBooking = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage

      const response = await fetch(`${BaseURL}/booking/${bookingId}`, {
        headers: {
          'Authorization': `Bearer ${token}` // Pass token in headers
        }
      });

      if (response.ok) {
        const booking = await response.json();
        setBicycleId(booking.bicycleId._id); // Extract and set bicycleId
      } else {
        console.error('Failed to fetch booking details');
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handleReturn = async () => {
    const token = localStorage.getItem('token'); // Get token from localStorage

    const response = await fetch(`${BaseURL}/booking/return` , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        bicycleId,         // The bicycleId extracted from the booking
        returnLocation     // The return location selected by the user
      })
      
    });
    
    const data = await response.json();
    if (response.ok) {
      console.log('Bicycle returned successfully:', data);
      navigate('/booking-history'); // Redirect to booking history page after successful return
    } else {
      console.error('Error returning bicycle:', data);
    }
  };


  return (
    <div className='container'>
      <h2 className='h2'>Return Bicycle</h2>
      <div>
        <label className='label'>Choose Return Location:</label>
        <select className='select' value={returnLocation} onChange={(e) => setReturnLocation(e.target.value)}>
          {validLocations.map((location, index) => (
            <option key={location._id} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <button className='btn' onClick={handleReturn}>Confirm Return</button>
    </div>
  );
};

export default ReturnBicycle;
