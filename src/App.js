// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// React router dom for routes command for terminal : nmp i react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
