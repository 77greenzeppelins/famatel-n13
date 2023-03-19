import React, { useState } from 'react';
import { imgLadowarki } from '../../../public/images/c7_ladowarki/imgLadowarki';
import ImageSlider from '../../multipagesComponents/sliders/imageSlider/ImageSlider';
import SvgTechPrzemyslowe from '../../SVG/techDrawings/5_przedluzacze-bebnowe/SvgTechPrzemyslowe';

/**----------------------------------**/
const DoPobraniaContent = () => {
  /**Local State**/
  // const [animationStage, setAnimationStage] = useState<number>(0);

  // console.log('.......animationStage', animationStage);
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[60px]"
    >
      {/* <div className="w-full h-full inner-px-md-xl-xxl pt-[20px] lg:pt-[40px]">
        <div>
          <ImageSlider imageData={imgLadowarki} />
        </div>
      </div> */}
      <div>
        <p className="text-2xl text-corpo">Karty katalogowe</p>
        <p className="text-2xl text-corpo">deklaracje</p>
        <p className="text-2xl text-corpo">katalog</p>
      </div>
    </div>
  );
};

export default DoPobraniaContent;
