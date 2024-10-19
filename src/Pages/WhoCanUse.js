import React from 'react';
import './WhoCanUse.css'; // Import your CSS file for styling

const WhoCanUse = () => {
  return (
    <div className="container9">
      <h1>Who Can Use the App?</h1>
      <ol>
        <li>
          <h2>NITK Students</h2>
          <ul>
            <li>All current NITK students are eligible to use the app.</li>
            <li>Use your <strong>NITK student email</strong> to sign up and rent bicycles on campus.</li>
          </ul>
        </li>
        <li>
          <h2>NITK Staff</h2>
          <ul>
            <li>Faculty, administrative, and other NITK staff can also use the app.</li>
            <li>Register with your <strong>official NITK staff email</strong> to access bicycle rentals.</li>
          </ul>
        </li>
        <li>
          <h2>Requirements</h2>
          <ul>
            <li>You must be affiliated with NITK (as a student or staff).</li>
            <li>All you need is:
              <ul>
                <li>A device with internet access (like a phone or laptop).</li>
                <li>A valid <strong>NITK email ID</strong> for registration.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default WhoCanUse;
