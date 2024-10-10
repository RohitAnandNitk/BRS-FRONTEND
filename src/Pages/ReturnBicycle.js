// ReturnBicycle.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ReturnBicycle = () => {
  const { bookingId } = useParams(); // Extract booking ID from URL
  const [returnLocation, setReturnLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available return locations
    const fetchLocations = async () => {
      const response = await fetch('http://localhost:4000/locations/valid-locations');
      const data = await response.json();
      setLocations(data);
      console.log(data);
    };
    fetchLocations();
  }, []);

  const handleReturn = async () => {
    const token = localStorage.getItem('token');
    console.log("token for returning bucycle : ", token);

    const response = await fetch('http://localhost:4000/booking/return', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        bookingId,
        returnLocation
      })
    });

    if (response.ok) {
      alert('Bicycle returned successfully!');
      navigate('/history'); // Redirect to BookingHistory page
    } else {
      alert('Failed to return the bicycle');
    }
  };

  return (
    <div>
      <h2>Return Bicycle</h2>
      <div>
        <label>Return Location:</label>
        <select value={returnLocation} onChange={(e) => setReturnLocation(e.target.value)}>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleReturn}>Confirm Return</button>
    </div>
  );
};

export default ReturnBicycle;
