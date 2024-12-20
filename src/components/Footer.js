import React from 'react'
import "./Footer.css";
import { Link} from 'react-router-dom';
const  Footer = () => {
  return (
    <div className='Footer'>
       <div>
          <h1>SUPPORT</h1> 
           <p><Link to= "/contact-us" className='link'>Contact Us</Link></p>
           <p><Link to= "/pandp" className='link'>Privacy and Policy</Link></p>
           <p><Link to= "/tandc" className='link'>Terms and Conditions</Link></p>
       </div>
       <div>
          <h1>FAQ</h1> 
           <p><Link to= "how-to-use" className='link'>How to Use?</Link></p>
           <p><Link to= "who-can-use" className='link'>Who can Use?</Link></p>
       </div>
       <div>
          <h1>ABOUT</h1> 
           
           <p><Link to ="https://www.linkedin.com/in/ra157/" className='link'>Rohit</Link></p>
            <p>By MCA'26 Batch NITK</p>
       </div>
       
    </div>
  )
}

export default Footer;
