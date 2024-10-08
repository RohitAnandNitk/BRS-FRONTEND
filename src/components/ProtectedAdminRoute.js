import React from 'react';
import { Navigate } from 'react-router-dom';

// Higher-order component to protect admin routes
function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem('token'); // Check if user is authenticated
  const role = localStorage.getItem('role');   // Get the user role from localStorage

  // If no token or role is not admin, redirect to login
  if (!token || role !== '/admin') {
    return <Navigate to="/login" />;
  }

  // If user is authenticated and is an admin, allow access
  return children;
}

export default ProtectedAdminRoute;
