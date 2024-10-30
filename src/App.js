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
import BookNow from './Pages/BookNow';
import BookingHistory from './Pages/BookingHistory';
import ReturnBicycle from './Pages/ReturnBicycle';
import Payment from './Pages/Payment';
import PaymentSuccessful from './Pages/PaymentSuccessful';
import PaymentFailed from './Pages/PaymentFailed';
import ContactUs from './Pages/ContactUs';
import PrivacyAndPolicy from './Pages/PrivacyAndPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import HowToUse from './Pages/HowToUse';
import WhoCanUse from './Pages/WhoCanUse';
import AllBookingHistory from './Pages/AllBookingHistory';

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
        
        {/* book bicycle page */}
        <Route path ='/book-now/:id' element = {<BookNow></BookNow>}></Route>

        {/* booking history */}
        <Route path="/history" element={<BookingHistory></BookingHistory>}></Route>
        
        {/* return bicycle */}
        <Route path="/return-bicycle/:bookingId" element={<ReturnBicycle></ReturnBicycle>}></Route>
        
        {/* for see the bookin history */}
        <Route path="/booking-history" element = {<BookingHistory></BookingHistory>} ></Route>

          
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/pandp' element={<PrivacyAndPolicy></PrivacyAndPolicy>}></Route>
        <Route path='/tandc' element={<TermsAndConditions></TermsAndConditions>}></Route>
        <Route path='/how-to-use' element={<HowToUse></HowToUse>}></Route>
        <Route path='/who-can-use' element={<WhoCanUse></WhoCanUse>}></Route>

         
        {/* import PaymentPage from './PaymentPage'; // Import the payment page component */}
        <Route path="/payment" element={<Payment />} />

        {/* payment successfully  */}
        <Route path = "/payment-success/:bicycleId"  element = {<PaymentSuccessful></PaymentSuccessful>}></Route>
        
        {/* payment  failed */}
        <Route path="/payment-falied/:bicycleId" element={<PaymentFailed></PaymentFailed>}></Route>

        {/* all booking history */}
        <Route path ="/all-booking-history" element ={<AllBookingHistory></AllBookingHistory>}></Route>

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
