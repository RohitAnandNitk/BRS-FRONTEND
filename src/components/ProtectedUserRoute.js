import React from 'react';
import { Navigate } from 'react-router-dom';

// Higher-order component to protect routes
function ProtectedRoute({ children }) {
  // Check if user is authenticated by checking the token in localStorage
  const token = localStorage.getItem('token');

  // If the token is not present, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If token is present, allow access to the protected route
  return children;
}

export default ProtectedRoute;
