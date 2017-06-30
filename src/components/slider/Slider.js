import React from 'react';
import SlickSlider from 'react-slick';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';

import './Slick.css';
import './Slider.css';

const Slider = () => (
  <SlickSlider className="Slider" dots>
    <div>
      <Slide1 />
    </div>
    <div>
      <Slide2 />
    </div>
  </SlickSlider>
);

export default Slider;
