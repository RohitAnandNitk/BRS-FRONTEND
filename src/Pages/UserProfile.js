import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';


import config from './config';
const BaseURL = config.BASE_URL;




const UserProfile = () => {
  const [user, setUser] = useState(null); // State to store user info

  useEffect(() => {
    fetch(`${BaseURL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in the headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data); // Correct function to set user data
      })
      .catch((err) => console.error(err));
  }, []);
  

  if (!user) {
    return <p>Loading...</p>;  // Add a loading state while user data is being fetched
  }

  // console.log(user);

  return (
       <>

                {/* Profile section with picture and personal info */}
                <div className="profile-section">

                    {/* Left div for picture */}
                    <div className="left-div">
                      <img
                        src={user.profilePicture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s'}
                        alt="Profile pic"
                      />
                    </div>

                    {/* Right div for name and personal information */}
                    <div className="right-div">
                          <h1>{user.name}</h1>
                          <div className="info">
                            <p><strong>Program:</strong> {user.program}</p>
                            <p><strong>Reg. number:</strong> {user.regno}</p>
                            <p><strong>Roll number:</strong> {user.rollno}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.mobile}</p>
                            <Link className="change-password-btn" to ="/change-password">Change Password</Link>
                          </div>
                    </div>
                </div>
          

              {/* Bottom div for history of rented bicycles */}
            <div className="history-section">
                  <h2>See Your Booking History</h2>
                 <Link to = "/booking-history" ><button > Click Here </button></Link> 
            </div>

            {/* Back to Home link */}
            <div className="back-link">
            <Link to="/">Back to Home</Link>
            </div>
       </>
  );
};

export default UserProfile;


