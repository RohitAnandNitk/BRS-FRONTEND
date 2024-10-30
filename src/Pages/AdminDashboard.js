import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Assuming you have a separate CSS file for styling
import { Link  , useNavigate} from 'react-router-dom';

import config from './config';
const BaseURL = config.BASE_URL;



const AdminDashboard = () => {

   const navigate = useNavigate();
   
  const [admin, setadmin] = useState(null); // State to store admin info

    useEffect(() => {
      fetch(`${BaseURL}/admin/profile`, { 
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in the headers
      },
    })
      .then( (response) => {
        if (!response.ok) {
          alert("Session has been expired!");
          alert("Please Login Again");
          handleLogout();
          throw new Error('Failed to fetch admin data');
        }
        return response.json();
      })
      .then(  (data) => {
        setadmin(data); // Correct function to set admin data
      })
      .catch((err) => console.error(err));
  }, []); // Add empty dependency array to run useEffect only once
  

  if (!admin) {
    return <p>Loading...</p>;  // Add a loading state while admin data is being fetched
  }

   console.log("welcome admin to the bicyl");

   //when token expired then Logout and redirect to login
   const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from storage
    navigate('/login');  // Redirect to login page
    };
    
   const handleAllBookingHistory = () => {
       navigate("/all-booking-history");
   }
   const handleAllBookingHistory0 = () => {
       navigate("/change-password");
   }
   const handleAllBookingHistory1 = () => {
       navigate("/add-cycle");
   }
   const handleAllBookingHistory2 = () => {
       navigate("/update-cycle");
   }
   const handleAllBookingHistory3 = () => {
       navigate("/delete-cycle");
   }
  
  return (
    <>
          {/* Admin section with picture and info, centered in the container */}
          <div className="profile-section1">
                  {/* Title of the Admin Page */}
                  <div className="header">
                    <h1>Bicyl Admin</h1>
                  </div>

              <div className='displayCol'>
                  {/* Left div for admin picture */}
                  <div className="left-div">
                      <img src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="Admin pic" />
                  </div>

                  {/* Right div for admin information */}
                  <div className="right-div">
                    <div className="info">
                      <p><strong>Name:</strong>{admin.name}</p>
                      <p><strong>Email:</strong>{admin.email}</p>
                      {/* <p><strong>Phone:</strong>{admin.mobile}</p> */}
                      <button className='admin-btn' onClick={handleAllBookingHistory0}>Change Password</button>
                    </div>
                  </div>
              </div>
          </div>

      
      <div className='operation'> 
          <h2 className='heading2'>You can Add New Cycle , Update Info of existing Cycle and Delete the existing Cycle</h2>
          {/* Buttons for adding, updating, and deleting cycles */}
          <div className="button-container">
                {/* <Link to="/add-cycle"> */}
                  <button className="admin-btn" onClick={handleAllBookingHistory1}>Add Cycle</button>
                {/* </Link> */}
                {/* <Link to="/update-cycle"> */}
                  <button className="admin-btn" onClick={handleAllBookingHistory2}>Update Cycle</button>
                {/* </Link> */}
                {/* <Link to="/delete-cycle"> */}
                  <button className="admin-btn" onClick={handleAllBookingHistory3}>Delete Cycle</button>
                {/* </Link> */}
          </div>

      </div>
          <div className='booking-history1'>
            <h2>Users Booking History</h2>
            <button onClick={handleAllBookingHistory}>See Users Booking History</button>     
          </div>

            {/* Back to Home link */}
            <div className="back-link">
            <Link to="/">Back to Home</Link>
            </div>
    </>
  );
}

export default AdminDashboard;
