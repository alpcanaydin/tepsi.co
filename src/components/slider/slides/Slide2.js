import React from 'react';
import Button from '../../ui/Button';

import image from '../../../img/slides/slider-image-2.svg';

const Slide2 = () => (
  <div className="row Slider__slide">
    <div className="col-md-6">
      <h2 className="Slider__title">
        Kategorini seç, senin için seçtiğimiz videonun keyfini çıkar!
      </h2>

      <p className="u-gap-bottom">
        Video izlemeye başlamak için ilk önce kategorini seç ve rastgele seçtiğimiz videonun keyfini
        çıkar. Eğer videoyu beğenmezsen sıradaki video’ya geç.
      </p>

      <Button primary>Kullanmaya Başla!</Button>
    </div>
    <div className="col-md-6 u-text-center">
      <img
        src={image}
        className="u-inline-block"
        width="400"
        height="378"
        alt="Kategorini seç, senin için seçtiğimiz videonun keyfini çıkar!"
      />
    </div>
  </div>
);

export default Slide2;
