import React, { useState, useEffect } from 'react';
import BicycleCard from '../components/BicycleCard';
import by1 from "../Assets/b1.jpeg";
import './BookBicycle.css';

const BookBicyle = () => {
  const [bicycles, setBicycles] = useState([]);
  const [filteredBicycles, setFilteredBicycles] = useState([]);
  const [filters, setFilters] = useState({
    rent: '',
    location: '',
    type: '',
    status: ''
  });

  useEffect(() => {
    // Fetch bicycles from the backend
    const fetchBicycles = async () => {
      try {
        const response = await fetch('http://localhost:4000/bicycle', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch bicycles');
        }

        const data = await response.json();
        console.log(data);
        setBicycles(data);
        setFilteredBicycles(data);  // Initial state is all bicycles
      } catch (error) {
        console.error("There was an error fetching the bicycles!", error);
      }
    };
    fetchBicycles();
  }, []);

  // Handle filter inputs change
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Apply filters
  const applyFilters = () => {
    const filtered = bicycles.filter(bicycle => {
      return (
        (filters.location ? bicycle.location.includes(filters.location) : true) &&
        (filters.rent ? bicycle.rent <= parseFloat(filters.rent) : true) &&
        (filters.type ? bicycle.type.includes(filters.type) : true) &&
        (filters.status ? bicycle.status === filters.status : true)
      );
    });
    setFilteredBicycles(filtered);
  };

  return (
    <div className='lists'>
      <div className="filter-options">
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Enter location"
          />
        </div>
        <div>
          <label>Max Rent:</label>
          <input
            type="number"
            name="rent"
            value={filters.rent}
            onChange={handleFilterChange}
            placeholder="Max rent"
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            placeholder="Bicycle type"
          />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <button className='filter-btn' onClick={applyFilters}>Apply Filters</button>
      </div>

      <div className='bipage' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredBicycles.map((ele) => (
          
          <BicycleCard
            id = {ele._id}
            type={ele.type}
            location={ele.location}
            rent={ele.rent}
            status={ele.status}
            pic={by1}
          />
        ))}
      </div>
    </div>
  );
};

export default BookBicyle;
