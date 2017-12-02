import React from 'react';
import Button from '../../ui/Button';

import image from '../../../img/slides/slider-image-3.svg';

const Slide3 = () => (
  <div className="row Slider__slide">
    <div className="col-md-6">
      <h2 className="Slider__title">
        Yağlı ellerinle klavyeye dokunma, seslenerek Tepsi’yi kontrol et!
      </h2>

      <p className="u-gap-bottom">
        Yağlı ellerinle klavye ve mouse’unu kirletme, seslenerek Tepsi’ye komutlar ver. Hangi
        komutların ne işe yaradığını öğrenmek için buraya tıkla!
      </p>

      <Button primary>Kullanmaya Başla!</Button>
    </div>
    <div className="col-md-6 u-text-center">
      <img
        src={image}
        className="u-inline-block"
        width="400"
        height="378"
        alt="Yağlı ellerinle klavyeye dokunma, seslenerek Tepsi’yi kontrol et!"
      />
    </div>
  </div>
);

export default Slide3;
