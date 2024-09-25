import React from 'react'
import './HeroSection.css'
import ResponsiveCarousel from '../components/ResponsiveCarousel' // Import the carousel component

function HeroSection() {
  return (
    <div className='hero'>
        <div class="hero-info">
            <h1>Welcome to Bicyl</h1>
            <p>
                  Discover a seamless and eco-friendly way to explore your city with Bicyl.
                  Our bicycle renting platform makes it easy for you to rent a bike anytime, 
                  anywhere. Whether you're commuting, sightseeing, or just enjoying a weekend ride,
                  Bicyl offers flexible options to meet your needs. Join our community of riders
                  and contribute to a greener, healthier world!
            </p>
            <a href="/signup" class="btn-primary">Get Started</a>
        </div>
       <div className='carousel-container'> <ResponsiveCarousel/></div> {/* Include the carousel component */}
    </div>
  )
}

export default HeroSection
