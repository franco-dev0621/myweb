import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import cool_cat from './cool_cat.jpg';
import cool_cat1 from './cool_cat1.jpg';
import cool_cat2 from './cool_cat2.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src={cool_cat}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cool_cat1}
          alt="Second slide"
        />

        
      </Carousel.Item>

    </Carousel>
  </div>
  );
}

export default ControlledCarousel;