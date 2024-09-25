import React from 'react'
import './BicycleCard.css'
import BookNow from '../Pages/BookNow'

const BicycleCard = ({location,rent,avai,pic}) => {

  return (
    <div className='card'>
           <img src = {pic} alt ="bicycle img" />
           <div  className='info' > 
                <p> Location : {location}</p>
                <p>Rent : ₹{rent}</p>
                <p>Availability : {avai}</p>
           </div>
            <button className='booknow'   to = './BookNow'> Book Now</button>
        </div>
  )
}

export default BicycleCard;
