import React, { useState } from 'react';
import './Login.css';
import { useNavigate , Link } from 'react-router-dom'; // Import useNavigate

import config from './config';
const BaseURL = config.BASE_URL;


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(''); // Error state for storing error messages
  // sucessful submit
  const [sucess, showMess] = useState('');
 
  const navigate = useNavigate(); // Call useNavigate at the top level of the component

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("entered in handleSubmit function");
  
    // Make a POST request to your backend authentication endpoint
    try {
      const selectedUserRole = document.getElementById("user").value;
      console.log(selectedUserRole);
  
      const path = selectedUserRole === 'admin' ? `${BaseURL}/admin/login` : `${BaseURL}/user/login`;
  
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password to the backend
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successful login
        console.log('Login successful:', data);
        // Save the token or handle the login flow
        localStorage.setItem('token', data.token); // Save token to localStorage
        localStorage.setItem('role', data.role); // Save token to localStorage
        console.log('Login successful!');
        console.log(data.token);
        showMess('You have Logged In Sucessffuly.');
  
        setTimeout(() => {
          // Redirect based on user role
          if (selectedUserRole === 'admin') {
            navigate('/admin-dashboard'); // Navigate admin to dashboard
          } else {
            navigate('/book-bicycle'); // Navigate renter to book bicycle page
          }
        }, 2000);
      } else {
        // Error handling
        setError('Invalid Email or Password');
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      // Ensure to extract the message from the Error object
      setError(error.message || 'Error during login');
      console.error('Error during login:', error.message);
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        
        
        {/* Display error message */}
        {error && !sucess ? (
          <p style={{ color: 'red', fontSize: '16px' }}>
            <strong>{error}</strong> 
          </p>
        ) : (<h2 style={{color:'green', fontSize:'20px'}}><p>{sucess}</p></h2>)}
        
        
        <form>
        <div className="input-group">
            <label for="user">Choose an User:</label>
            <select name="user" id="user">
              <option value="customer">Renter</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Capture user input
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Capture password input
              required
            />
          </div>
          <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
        </form>
          <p>Don't have an account?<Link to ="/Signup"> Sign up.</Link></p>
      </div>
    </div>
  );
}

export default Login;


/*
 -> Props value can't change it is read only
 -> from handling  --> onChange handling

*/ 
