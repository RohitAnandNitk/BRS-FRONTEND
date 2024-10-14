import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateBicycle.css';

import config from './config';
const BaseURL = config.BASE_URL;



const UpdateBicycle = () => {
  const { id } = useParams(); // Extract the bicycle ID from the URL
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch bicycle details when the component mounts
  useEffect(() => {
    fetch(`${BaseURL}/bicycle/${id}`) // Use the extracted id to fetch the bicycle
      .then((response) => response.json())
      .then((data) => {
        setBicycle({
          model: data.model,
          location: data.location,
          rent: data.rent,
          status: data.status,
          type: data.type,
          description: data.description,
        });
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching bicycle details:', error);
        setError('Failed to fetch bicycle details');
      });
  }, [id]);

  // Handle form submission to update the bicycle
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the bicycle with a PUT request
    fetch(`${BaseURL}/bicycle/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bicycle), // Send updated data to backend
    })
      .then((response) => {
        if (response.ok) {
          //alert('Bicycle updated successfully!');
          showMess(true);
          setTimeout(() =>{
              navigate('/update-cycle'); // Navigate back to the bicycles list
          }, 2000 ); 

        } else {
          alert('Failed to update bicycle');
        }
      })
      .catch((error) => {
        console.error('Error updating bicycle:', error);
        setError('Failed to update bicycle');
      });
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBicycle((prevBicycle) => ({
      ...prevBicycle,
      [name]: value,
    }));
  };

  if (loading) return <div>Loading bicycle details...</div>;

  return (
    <div className='update-bicycle-container'>
      <h2>Update Bicycle</h2>
      <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/> Bicycle Updated Sucessffuly.</p> : ""}</h2>
        
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={bicycle.model}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={bicycle.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Rent:
          <input
            type="number"
            name="rent"
            value={bicycle.rent}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Status:
          <select
            name="status"
            value={bicycle.status}
            onChange={handleChange}
            required
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={bicycle.type}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={bicycle.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Bicycle</button>
      </form>
    </div>
  );
};

export default UpdateBicycle;
