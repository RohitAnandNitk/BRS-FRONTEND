import React, { useState } from 'react';
import './ChangePassword.css'; // Create a CSS file for styling if needed
import {Link, useNavigate } from 'react-router-dom';

import config from './config';
const BaseURL = config.BASE_URL;



const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // sucessful submit
  const [sucess, showMess] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password don't match");
      return;
    }
    const role = localStorage.getItem('role'); // Get role from local storage
    // Make the API call to change the password
    try {
      const path  = role === 'admin' ? `${BaseURL}/admin/profile/password` : `${BaseURL}/user/profile/password`
      const response = await fetch(path, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          currentPassword: currentPassword,
          newPassword: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Password change failed');
      }

      showMess(true);

      setTimeout(() =>{
        const langinPage = role === 'admin' ? '/admin-dashboard' : '/profile';
        navigate(langinPage); // Redirect to the profile page after success according to user
      }, 2000 );


    } catch (err) {
      console.error(err);
      setError('Failed to change password');
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> Your Password has been Changed Sucessffuly.</p> : ""}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
       <Link onClick={handleSubmit} className='btn'>Submit</Link>
      </form>
    </div>
  );
};

export default ChangePassword;
