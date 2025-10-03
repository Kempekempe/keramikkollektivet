import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/_carousel.scss'; // Assuming you have some styles for the carousel

const ImageCarousel = () => { 

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div className="carousel-wrapper">
      <Carousel
        className='carousel'
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {/* Carousel items go here */}
          <div className="carousel-item">Item 1</div>
          <div className="carousel-item">Item 2</div>
          <div className="carousel-item">Item 3</div>
          <div className="carousel-item">Item 4</div>
      </Carousel>
    </div>
  ); 
};



export default ImageCarousel; 