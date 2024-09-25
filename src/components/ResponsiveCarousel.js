import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ResponsiveCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} transitionTime={500} >
       <div>
        <img src="https://www.avocadoebike.com.au/cdn/shop/articles/blog_2.jpg?v=1720692310" alt="First Slide" style={{width:'100%', height :'500px' , zIndex :'-1'}} />
      
      </div>
      <div>
        <img src="https://lemonbin.com/wp-content/uploads/2020/06/cyclist-june172020-min.jpg" alt="Second Slide" style={{width:'100%', height :'500px' , zIndex :'-1'}}/>
      
      </div>
      <div>
        <img src="https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-HeroCycles-Library/default/dw9309bdc3/Blogs/Blog1/1.jpg?sh=659&sfrm=jpg&q=70" alt="Third Slide" style={{width:'100%', height :'500px' , zIndex :'-1'}}/>
       
      </div>
      
    </Carousel>
  );
};

export default ResponsiveCarousel;
