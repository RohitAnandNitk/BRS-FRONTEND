import React from 'react';
import './PrivacyAndPolicy.css';

function PrivacyAndPolicy() {
  return (
    <div className="container4">
      <h1>Privacy Policy</h1>
      <p>Last updated: [2024]</p>

      <p>This Privacy Policy outlines our policies regarding the collection, use, and disclosure of personal information when you use our website.</p>

      <h2>Information Collection and Use</h2>
      <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
      <ul>
        <li><strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information, including but not limited to your name, email address, and phone number.</li>
        <li><strong>Usage Data:</strong> We may also collect information on how the service is accessed and used, such as your IP address, browser type, and pages visited.</li>
      </ul>

      <h2>Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.</p>

      <h2>Use of Data</h2>
      <p>We use the collected data for various purposes, including:</p>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To notify you about changes to our service</li>
        <li>To allow you to participate in interactive features of our service when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our service</li>
      </ul>

      <footer>
        <p>&copy; All rights reserved.</p>
        <a href="/" className="btn">Back to Home</a>
      </footer>
    </div>
  );
}

export default PrivacyAndPolicy;
