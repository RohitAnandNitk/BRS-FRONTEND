import React from 'react'
import "./HomePage.css";
import BookBicyle from './BookBicyle';
import HeroSection from './HeroSection';


function HomePage() {
  return (
    <div className ='HomePage'>
       <HeroSection></HeroSection>
       <BookBicyle></BookBicyle>
    </div>
  )
}

export default HomePage;
