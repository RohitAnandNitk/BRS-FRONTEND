import React from 'react'
import "./Navbar.css";
import brslogo from "../Assets/logo.jpg";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={brslogo} alt = "bicyl logo" style={{width : "100px"}}/> 
        </div>
        <div className='listItem'>
            <ul >
                <li><Link to = "/" className='link'>Home</Link></li>
                <li><Link to = "/Profile" className='link'>Profile</Link></li>
                <li><Link to = "/Login" className='link'>Login</Link></li>
                <li><Link to = "/Signup" className='link'>Signup</Link></li>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar;
