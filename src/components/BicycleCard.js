import React from 'react'
import './BicycleCard.css'
import { Link } from 'react-router-dom'



const BicycleCard = ({id, type , location ,rent ,status ,pic}) => {
  return (
    <div className='card'>
           <img src = {pic} alt ="bicycle img" />
           <div  className='info' > 
                
                <p> Type : {type}</p>
                <p> Location : {location}</p>
                <p>Rent : ₹{rent}</p>
                <p>Availability : {status}</p>
           </div>
            <Link className='link'  to = {`/book-now/${id}`}><button className='booknow'> Book Now</button></Link>
        </div>
  )
}

export default BicycleCard;
