import React from 'react';
/*Components*/
import ImageSlider from '../../../../../multipagesComponents/sliders/imageSlider/ImageSlider';
/**Images Data**/
import { imgGniazdaPodwieszane } from '../../../../../../public/images/c4_gniazda-podwieszane/imgGniazdaPodwieszane';

/**-----------------------------**/
const ImagesSection = () => {
  /**JSX**/
  return (
    <div
      data-component="SvgTechSection__container"
      className="w-full h-full fc "
      //___bg-light
    >
      <ImageSlider
        imageData={imgGniazdaPodwieszane}
        imageDirectContainer="relative w-[90%] h-[90%]"
      />
    </div>
  );
};

export default ImagesSection;
