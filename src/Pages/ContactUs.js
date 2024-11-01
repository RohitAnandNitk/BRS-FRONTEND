import React,{ useState } from 'react';
import './ContactUs.css';
import { useNavigate , Link } from 'react-router-dom';

import config from './config';
const BaseURL = config.BASE_URL;

function ContactUs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone :"",
    subject:"",
    message:""
  });
  const [success, setMess] = useState(false);
  const [error, showError] = useState({});


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();

    const occurredError = {};

    if (user.name === "") {
      occurredError.name = "Please Enter Name";
      showError(occurredError);
      return;
    }

    if (user.email === "") {
      occurredError.email = "Please Enter Email";
      showError(occurredError);
      return;
    }

    if (user.subject === "") {
      occurredError.subject = "Please Enter subject";
      showError(occurredError);
      return;
    }

    if (user.message === "") {
      occurredError.message = "Please Enter message";
      showError(occurredError);
      return;
    }


    try {
      const response = await fetch(`${BaseURL}/contactus/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      console.log("Message from server:", response);
      setMess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.log({ error: "Failed to Signup" });
    }
    console.log('Form submitted');
    showError(occurredError);
  };

  return (
    <div className="container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to help! Feel free to contact us with any questions or concerns.</p>
      </div>
      {success && <p style={{ color: 'green', fontSize: '20px' }}>{user.name} You Query Submitted successfully.</p>}
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <div>
              <label>Name</label>
              <span style={{ color: 'red' }}>{error.name}</span>
              <input type="text" id="name" name="name" placeholder="Your name.." required onChange={handleChange} value={user.name}/>
            </div>

            <div>
              <label>Email</label>
              <span style={{ color: 'red' }}>{error.email}</span>
              <input type="email" id="email" name="email" placeholder="Your email.." required onChange={handleChange} value={user.email}/>
            </div>

            <div>
              <label>Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" placeholder="Your phone number.." onChange={handleChange} value={user.phone}/>
            </div>

            <div>
              <label>Subject</label>
              <span style={{ color: 'red' }}>{error.subject}</span>
              <input type="text" id="subject" name="subject" placeholder="Subject.." required onChange={handleChange} value={user.subject} />
            </div>

            <div>
              <label>Message</label>
              <span style={{ color: 'red' }}>{error.message}</span>
              <textarea id="message" name="message" placeholder="Write your message here.." required onChange={handleChange} value={user.message}></textarea>
            </div>

            <button type="submit" onClick={handleSubmit}>Submit</button>
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
