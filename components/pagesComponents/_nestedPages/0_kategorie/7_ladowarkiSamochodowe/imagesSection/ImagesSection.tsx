import React from 'react';
/*Components*/
import ImageSlider from '../../../../../multipagesComponents/sliders/imageSlider/ImageSlider';
/**Images Data**/
import { imgLadowarki } from '../../../../../../public/images/c7_ladowarki/imgLadowarki';

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
        imageData={imgLadowarki}
        imageDirectContainer="relative w-[90%] h-[90%]"
      />
    </div>
  );
};

export default ImagesSection;
