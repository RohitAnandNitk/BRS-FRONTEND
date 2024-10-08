// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import UserProfile from './Pages/UserProfile';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import BookBicyle from './Pages/BookBicyle';
import AdminDashboard from './Pages/AdminDashboard';
import ProtectedUserRoute from './components/ProtectedUserRoute';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import ChangePassword from './Pages/ChangePassword';
import BicycleList from './Pages/BicycleList';
import AddBicycle from './Pages/AddBicycle';
import UpdateBicycle from './Pages/UpdateBicycle';

// React router dom for routes command for terminal : nmp i react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* inside login page */}
        <Route path ='/book-bicycle' element={<BookBicyle />} /> 
        <Route path ='/admin-dashboard' element={<AdminDashboard />} />
         
        {/* Protected route for regular users */}
        <Route  path="/profile" element={ <ProtectedUserRoute> <UserProfile /> </ProtectedUserRoute>}/>
        {/* Protected route for admin dashboard */}
        <Route path="/admin-dashboard"  element={  <ProtectedAdminRoute>  <AdminDashboard /> </ProtectedAdminRoute>  } /> 
        
        {/* chnage password route */}
        <Route path="/change-password" element= {<ChangePassword/>} />
      
        {/* add bicycle  */}
        <Route path = "/add-cycle" element={<AddBicycle></AddBicycle>}></Route>
        {/* update bicycle  */}
        <Route path = "/update-cycle" element={<BicycleList></BicycleList>}></Route>
        <Route path="/bicycles/update/:id" element={<UpdateBicycle />} />
        {/* delete bicycle  */}
        <Route path = "/delete-cycle" element={<BicycleList></BicycleList>}></Route>

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
