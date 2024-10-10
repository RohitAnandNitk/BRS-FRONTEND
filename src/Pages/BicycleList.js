import React, { useState, useEffect } from 'react';
import './BicycleList.css';
import { useNavigate } from 'react-router-dom';

const BicycleList = () => {
  const [bicycles, setBicycles] = useState([]);
  const navigate = useNavigate(); // For navigating after successful update

  useEffect(() => {
    // Fetch bicycles from the backend
    const fetchBicycles = async () => {
      try {
        const response = await fetch('http://localhost:4000/bicycle', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token if needed
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch bicycles');
        }

        const data = await response.json();
        setBicycles(data);
      } catch (error) {
        console.error("There was an error fetching the bicycles!", error);
      }
    };

    fetchBicycles();
  }, []);

  const handleDelete = async (bicycleId) => {
    // Call API to delete bicycle
    try {
      const response = await fetch(`http://localhost:4000/bicycle/${bicycleId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token if needed
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete bicycle');
      }

      // Remove the deleted bicycle from the state
      setBicycles(bicycles.filter(bicycle => bicycle._id !== bicycleId));
    } catch (error) {
      console.error("There was an error deleting the bicycle!", error);
    }
  };

  const handleUpdate = (bicycleId) => {
    // Handle the update functionality here, e.g., redirecting to an update form or modal
    navigate(`/bicycles/update/${bicycleId}`)
    console.log(`Update bicycle with ID: ${bicycleId}`);
  };

  return (
    <div className='bicycle-list'>
      <h2>Bicycle List</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Status</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bicycles.map(bicycle => (
            <tr key={bicycle._id}>
              <td>{bicycle.model}</td>
              <td>{bicycle.location}</td>
              <td>{bicycle.rent}</td>
              <td>{bicycle.status}</td>
              <td>{bicycle.type}</td>
              <td>
                <button onClick={() => handleDelete(bicycle._id)}>Delete</button>
                <button onClick={() => handleUpdate(bicycle._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BicycleList;

































// Steps to Delete/Update a Bicycle:
// Display the List of Bicycles:

// When the admin visits the bicycle management page, fetch all the bicycles from the database and display them in a list or table.
// Each bicycle entry can have buttons for edit and delete.
// Select a Bicycle to Update/Delete:

// For deletion, the admin can simply click the "Delete" button next to the specific bicycle.
// For updating, the admin can click an "Edit" button next to the bicycle, which will either:
// Open a form pre-filled with the bicycle's current data (so they can update fields), or
// Redirect the admin to a new page where they can edit the details of that bicycle.