import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../../images/slider-1.jpg";
import banner2 from "../../../images/slider-2.jpg";
import banner3 from "../../../images/slider-3.jpg";
import Button from 'react-bootstrap/Button';

import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3} 
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h2>Capture Your <br />
Beautiful Moments</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption className='carousel-caption'>
        <h2>Look for the <br /> magic in every moment.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Third slide"
        />

        <Carousel.Caption className='carousel-caption'>
       <h2> perfect focus <br /> on my own picture    </h2>     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
        </div>
    );
};

export default Banner;