import React from 'react'
import "./Footer.css";
import { Link} from 'react-router-dom';
const  Footer = () => {
  return (
    <div className='Footer'>
       <div>
          <h1>SUPPORT</h1> 
           <p><Link to= "" className='link'>Contact Us</Link></p>
           <p><Link to= "" className='link'>Privacy and Policy</Link></p>
           <p><Link to= "" className='link'>Terms and Conditions</Link></p>
       </div>
       <div>
          <h1>FAQ</h1> 
           <p><Link to= "" className='link'>How to Use?</Link></p>
           <p><Link to= "" className='link'>Who can Use?</Link></p>
       </div>
       <div>
          <h1>ABOUT</h1> 
           <p>By MCA'26 Batch NITK</p>
           <p>Members : &nbsp;
                  <Link to ="https://www.linkedin.com/in/ra157/" className='link'>Rohit</Link>,&nbsp;
                  <Link to ="https://www.linkedin.com/in/piyush-patel-03236b250/" className='link'>Piyush</Link>,&nbsp;
                  <Link to ="https://www.linkedin.com/in/ujjwal-panchal-705aa4284/" className='link'>Ujjwal</Link>,&nbsp;
                  <br></br>
                  <Link to ="https://www.linkedin.com/in/pranjalpatidar01/" className='link'>Pranjal</Link>,&nbsp;
                  <Link to ="https://www.linkedin.com/in/shubh-goel-383763295/" className='link'>Shubh</Link>,&nbsp;
                  <Link to ="https://www.linkedin.com/in/palak-purwar01/" className='link'>Palak</Link>,&nbsp;
                  <Link to ="https://www.linkedin.com/in/rohan-roy-yash-5205861b5/" className='link'>Rohan</Link>,&nbsp;
                  <Link to ="https://www.linkedin.com/in/saikat-dey-1648562b0/" className='link'>Saikat</Link>&nbsp;
            </p>
       </div>
       
    </div>
  )
}

export default Footer;