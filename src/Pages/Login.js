import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Make a POST request to your backend authentication endpoint
    try {
      const response = await fetch('/api/auth/login', {
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
        alert('Login successful!');
        // Redirect or take action based on successful login
      } else {
        // Error handling
        console.error('Login failed:', data.message);
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;


/*
 -> Props value can't change it is read only
 -> from handling  --> onChange handling

*/ 
