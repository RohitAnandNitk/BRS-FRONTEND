import React, { useEffect, useState } from 'react';

import config from './config';
const BaseURL = config.BASE_URL;


function QueryHistory() {
    const [queryHistory, setQueryHistory] = useState([]);
    const [error, setError] = useState(null);
    

  
    useEffect(() => {
        const fetchQueryHistory = async () => {
        console.log("Fetching query history...");
        
        try {
          const response = await fetch(`${BaseURL}/contactus/history`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${token}`, // JWT token in the header
            },
          });
  
          if (response.status === 401 || response.status === 403) {
            throw new Error('Unauthorized or Forbidden');
          }
  
          const data = await response.json();
  
          if (response.ok) {
            setQueryHistory(data);
          } else {
            throw new Error('Failed to fetch query history');
          }
  
        } catch (err) {
          console.error(err);
          setError('Error fetching query history');
        }
      };
  
      fetchQueryHistory();
    }, []);
  
    return (
      <div className='booking-history'>
        <h1>All Query History</h1>
        {error && <p>{error}</p>}
        {queryHistory.length === 0 ? (
          <p>No Query found</p>
        ) : (
            queryHistory.map((queryHis, index) => (
            <div key={index} className='one-history'>
            
              <p>User Name : {queryHis.name}</p>
              <p>User Email : {queryHis.email}</p>
              <p>Subject : {queryHis.subject}</p>
              <p>Query : {queryHis.message}</p>
            </div>
          ))
        )}
      </div>
    );
}

export default QueryHistory
