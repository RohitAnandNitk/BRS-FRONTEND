import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReturnBicycle.css';

const BaseURL = "https://brs-backend-2rfc.onrender.com";


const ReturnBicycle = () => {
  const { bookingId } = useParams(); // Extract bookingId from URL params
  const [bicycleId, setBicycleId] = useState(null);
  const [returnLocation, setReturnLocation] = useState('');
  // const [locations, setLocations] = useState([]); // You can populate locations from your location manager
  const [validLocations, setValidLocations] = useState([]);

  // sucessful submit
  const [sucess, showMess] = useState(false);

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
        console.log("booking details fetched :- ");
        console.log(booking);
        setBicycleId(booking.bicycleId._id); // Extract and set bicycleId
      } else {
        console.error('Failed to fetch booking details');
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handleReturn = async () => {
    console.log("Enter in return handle function");

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
      //console.log('Bicycle returned successfully:', data);
      showMess(true);

        setTimeout(() =>{
          navigate('/booking-history'); // Redirect to booking history page after successful return
        }, 2000 );
    } else {
      console.error('Error returning bicycle:', data);
    }
  };


  return (
    <>
    <div className='container'>
      <h2 className='h2'>Return Bicycle</h2>
      <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> Bicycle Returned Successfully.</p> : ""}</h2>
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
   
  </>
  );
};

export default ReturnBicycle;
