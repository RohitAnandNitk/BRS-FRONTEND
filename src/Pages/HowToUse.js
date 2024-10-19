import React from 'react';
import './HowToUse.css'; // Import your CSS file for styling

const HowToUse = () => {
  return (
    <div className="container10">
      <h1>How to Use the App</h1>
      <ol>
        <li>
          <h2>Open the App</h2>
          <ul>
            <li>
              Click on this link: <a href="#">Open the App</a>
            </li>
            <li>Make sure your internet is working, and you're using a browser like Chrome or Firefox.</li>
          </ul>
        </li>
        <li>
          <h2>Login or Sign Up</h2>
          <ul>
            <li><b>If you have an account:</b> Click <b>Login</b> and enter your email and password.</li>
            <li>
              <b>If you are new:</b> Click <b>Sign Up</b> to create an account.
              <ul>
                <li>Fill in your details and click <b>Register</b>.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2>Explore the Main Page</h2>
          <p>After logging in, you'll see the home page or dashboard.</p>
          <p>Use the menu or buttons to explore the app’s features.</p>
        </li>
        <li>
          <h2>Perform Actions</h2>
          <ul>
            <li>Click <b>Book Now</b> to create a new booking.</li>
            <li>Fill in the required details and click <b>Submit</b>.</li>
            <li>You can also view or cancel bookings from the <b>My Bookings</b> section.</li>
          </ul>
        </li>
        <li>
          <h2>Change Your Settings (if needed)</h2>
          <p>Go to <b>Profile</b> or <b>Settings</b> to update your details (like password or name).</p>
        </li>
        <li>
          <h2>Log Out Safely</h2>
          <p>When you're done, click <b>Logout</b> to leave the app securely.</p>
        </li>
        <li>
          <h2>Need Help?</h2>
          <p>Look for a <b>Contact Us</b> section if you get stuck or have questions.</p>
        </li>
      </ol>
    </div>
  );
};

export default HowToUse;
