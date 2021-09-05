import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.jpg';

const CarouselContainer = () => {
  return (
    <center>
      <Carousel fade={true} pause={false}>
      <Carousel.Item interval={8000} className="car">
        <img
          style = {{height:"80vh"}}
          src={image1}
          alt="First slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          style = {{height:"80vh"}}
          src={image2}
          alt="Third slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          style = {{height:"80vh"}}
          src={image3}
          alt="Third slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item interval={8000} className="car">
        <img
          style = {{height:"80vh", width:"auto"}}
          src={image4}
          alt="Forth slide"
          className="d-block img-fluid"
        />
      </Carousel.Item>
    </Carousel>
    </center>
  )
}

export default CarouselContainer;
