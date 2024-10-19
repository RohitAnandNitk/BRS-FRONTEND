import React from 'react';
import './ContactUs.css';


function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to help! Feel free to contact us with any questions or concerns.</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name.." required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email.." required />
            </div>

            <div>
              <label htmlFor="phone">Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" placeholder="Your phone number.." />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject.." required />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message here.." required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <p><strong>Phone:</strong> 6202908328</p>
          </div>

          <div className="info-item">
            <p><strong>Email:</strong> sharmarohit64748@gmail.com</p>
          </div>

          <div className="info-item">
            <p><strong>Address:</strong> National Institute of Technology, Karnataka</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
