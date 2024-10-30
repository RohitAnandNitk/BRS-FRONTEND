import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import config from './config';

const BaseURL = config.BASE_URL;

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    rollno: "",
    regno: "",
    program: "",
    mobile: "",
    email: "",
    password: "",
    conpass: ""
  });

  const [error, showError] = useState({});
  const [success, showMess] = useState(false);
  const [role, setRole] = useState("customer");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const occurredError = {};

    if (user.name === "") {
      occurredError.name = "Please Enter Name";
      showError(occurredError);
      return;
    }

    if (role !== "admin") {
      if (user.rollno === "") {
        occurredError.rollno = "Please Enter Roll No.";
        showError(occurredError);
        return;
      }
      if (user.regno === "") {
        occurredError.regno = "Please Enter Registration No.";
        showError(occurredError);
        return;
      }
      if (user.program === "") {
        occurredError.program = "Please Enter Program";
        showError(occurredError);
        return;
      }
    }

    if (user.email === "") {
      occurredError.email = "Please Enter Email";
      showError(occurredError);
      return;
    } else if (!(user.email.endsWith("@nitk.edu.in")) || user.email[0] === '@') {
      occurredError.email = "Please Enter Valid Email";
      showError(occurredError);
      return;
    }

    if (user.mobile === "") {
      occurredError.mobile = "Please Enter Mobile Number";
      showError(occurredError);
      return;
    } else if (user.mobile.length < 10 || isNaN(user.mobile)) {
      occurredError.mobile = user.mobile.length < 10
        ? "Please Enter Valid Mobile Number"
        : "Please Enter Digit Only";
      showError(occurredError);
      return;
    }

    if (user.password === "") {
      occurredError.password = "Please Enter Password";
      showError(occurredError);
      return;
    } else if (user.password.length < 8) {
      occurredError.password = "Password must be at least 8 characters";
      showError(occurredError);
      return;
    }

    if (user.conpass === "") {
      occurredError.conpass = "Please Confirm Password";
      showError(occurredError);
      return;
    } else if (user.password !== user.conpass) {
      occurredError.conpass = "Passwords do not match";
      showError(occurredError);
      return;
    }

    const path = role === 'admin' ? `${BaseURL}/admin/signup` : `${BaseURL}/user/signup`;
    try {
      const response = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      console.log("Message from server:", response);
      showMess(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.log({ error: "Failed to Signup" });
    }

    showError(occurredError);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {success && <p style={{ color: 'green', fontSize: '20px' }}>{user.name} You have registered successfully.</p>}
        <div className="input-group">
          <label htmlFor="user">Choose a Role:</label>
          <select name="user" id="user" onChange={handleRoleChange} value={role}>
            <option value="customer">Renter</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        <label>Name:</label>
        <span style={{ color: 'red' }}>{error.name}</span>
        <input type="text" required onChange={handleChange} value={user.name} name="name" autoComplete='off' />

        {role !== "admin" && (
          <>
            <label>Roll Number:</label>
            <span style={{ color: 'red' }}>{error.rollno}</span>
            <input type="text" required onChange={handleChange} value={user.rollno} name="rollno" />

            <label>Registration Number:</label>
            <span style={{ color: 'red' }}>{error.regno}</span>
            <input type="text" required onChange={handleChange} value={user.regno} name="regno" />

            <label>Programme:</label>
            <span style={{ color: 'red' }}>{error.program}</span>
            <input type="text" required onChange={handleChange} value={user.program} name="program" />
          </>
        )}

        <label>Mobile Number:</label>
        <span style={{ color: 'red' }}>{error.mobile}</span>
        <input type="tel" required onChange={handleChange} value={user.mobile} name="mobile" />

        <label>Email:</label>
        <span style={{ color: 'red' }}>{error.email}</span>
        <input type="email" required onChange={handleChange} value={user.email} name="email" />

        <label>Password:</label>
        <span style={{ color: 'red' }}>{error.password}</span>
        <input type="password" required onChange={handleChange} value={user.password} name="password" />

        <label>Confirm Password:</label>
        <span style={{ color: 'red' }}>{error.conpass}</span>
        <input type="password" required onChange={handleChange} value={user.conpass} name="conpass" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
