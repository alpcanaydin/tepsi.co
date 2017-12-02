import React from 'react';
import Button from '../../ui/Button';

import image from '../../../img/slides/slider-image-1.svg';

const Slide1 = () => (
  <div className="row Slider__slide">
    <div className="col-md-6">
      <h1 className="Slider__title Slider__title--main">
        Sen de yemek yerken, ne izleyeceğine karar veremiyor musun?
      </h1>

      <p className="u-gap-bottom">
        Sen yemeğini yerken ne izleyeceğini düşünme ya da izleyecek bir şeyler ararken yemeğini
        soğutma diye ses ile de kontrol edebileceğin bir sistem geliştirdik.
      </p>

      <Button primary>Kullanmaya Başla!</Button>
    </div>
    <div className="col-md-6 u-text-center">
      <img
        src={image}
        className="u-inline-block"
        width="400"
        height="378"
        alt="Sen de yemek yerken, ne izleyeceğine karar veremiyor musun?"
      />
    </div>
  </div>
);

export default Slide1;
