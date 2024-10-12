import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Assuming you have a separate CSS file for styling
import { Link  , useNavigate} from 'react-router-dom';

const BaseURL = "https://brs-backend-2rfc.onrender.com";


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
  });
  

  if (!admin) {
    return <p>Loading...</p>;  // Add a loading state while admin data is being fetched
  }

   console.log(admin);

   //when token expired then Logout and redirect to login
   const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from storage
    navigate('/login');  // Redirect to login page
  };
  
  return (
    <>
         <div className="container">
      {/* Title of the Admin Page */}
      <div className="header">
         <h1>Bicyl Admin</h1>
      </div>

      {/* Admin section with picture and info, centered in the container */}
      <div className="admin-section">
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
            <Link to="/change-password"  className='change-password'>Change Password</Link>
          </div>

          
        </div>
      </div>
    </div>
    <div className='containerd'>
        <h2 className='heading2'>You can Add New Cycle , Update Info of existing Cycle and Delete the existing Cycle</h2>
        {/* Buttons for adding, updating, and deleting cycles */}
        <div className="button-container">
            
            <Link to="/add-cycle">
              <button className="admin-btn">Add Cycle</button>
            </Link>
            <Link to="/update-cycle">
              <button className="admin-btn">Update Cycle</button>
            </Link>
            <Link to="/delete-cycle">
              <button className="admin-btn">Delete Cycle</button>
            </Link>
          </div>

    </div>
    </>
  );
}

export default AdminDashboard;
