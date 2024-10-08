import React, { useState } from 'react';
import './AddBicycle.css';

const AddBicycle = () => {
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
      const response = await fetch('/bicycles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bicycle),
      });

      if (response.ok) {
        alert('Bicycle added successfully!');
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
