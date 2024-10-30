import React from 'react';
import './Navbar.css';
import brslogo from '../Assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // Get the user's role (admin or customer)

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate("/"); // Redirect to home page after logout
    console.log("In the handleLogout Function");
  };

  return (
    <div className='navbar'>
      <div>
        <Link to = "/">
        <img src={brslogo} alt="bicyl logo" style={{ width: '100px' }} />
        </Link>
      </div>
      <div className='listItem'>
        <ul>
          <li><Link to="/"  className='link'>Home</Link></li>

          {/* Conditionally render links based on user's login and role */}
          {token ? (
            <>
              {/* If role is admin, show Admin Dashboard */}
              {role === 'admin' && (
                <li><Link to="/admin-dashboard" className='link'>Admin Dashboard</Link></li>
              )}

              {/* If role is customer, show Profile */}
              {role !== 'admin' && (
                <li><Link to="/profile" className='link'>Profile</Link></li>
              )}

              <li><Link onClick={handleLogout} to="/" className='logout-button'>Signout</Link></li>
            </>
          ) : (
            <>
              {/* Show Login and Signup if user is not logged in */}
              <li><Link to="/login" className='link'>Signin</Link></li>
              <li><Link to="/signup" className='link'>Signup</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
