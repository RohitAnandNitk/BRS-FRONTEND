import React, { useState } from 'react';
import './AddBicycle.css';
import {useNavigate } from 'react-router-dom';

const BaseURL = "https://brs-backend-2rfc.onrender.com";

const AddBicycle = () => {
  const navigate = useNavigate(); // For navigating after successful update
  // sucessful submit
  const [sucess, showMess] = useState(false);

  const [bicycle, setBicycle] = useState({
    model: '',
    location: '',
    rent: '',
    status: 'available',
    type: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBicycle({ ...bicycle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseURL}/bicycle/add`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bicycle),
      });

      if (response.ok) {
        showMess(true);
          setTimeout(() =>{
              navigate('/update-cycle'); // Navigate back to the bicycles list
          }, 2000 );
        // Reset form
        setBicycle({
          model: '',
          location: '',
          rent: '',
          status: 'available',
          type: '',
          description: ''
        });
      } else {
        alert('Error adding bicycle. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="add-bicycle">
      <h2>Add New Bicycle</h2>
      <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> Bicycle Added Sucessffuly.</p> : ""}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={bicycle.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={bicycle.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rent:</label>
          <input
            type="number"
            name="rent"
            value={bicycle.rent}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={bicycle.status}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={bicycle.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={bicycle.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Bicycle</button>
      </form>
    </div>
  );
};

export default AddBicycle;
