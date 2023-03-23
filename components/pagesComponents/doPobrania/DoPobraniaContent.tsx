import React, { useState } from 'react';
import { imgLadowarki } from '../../../public/images/c7_ladowarki/imgLadowarki';
import ImageSlider from '../../multipagesComponents/sliders/imageSlider/ImageSlider';
import SliderWithScrollbar from '../../multipagesComponents/sliders/sliderWithScrollbar/SliderWithScrollbar';
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
      <div className="w-full h-full inner-px-md-xl-xxl">
        {/* <div className="w-full h-full inner-px-md-xl-xxl pt-[20px] lg:pt-[40px]">
        <div>
          <ImageSlider imageData={imgLadowarki} />
        </div>
      </div> */}
        <div>
          <p className="text text-grey">Karty katalogowe</p>
          <p className="text text-grey">deklaracje</p>
          <p className="text text-grey">katalog</p>
        </div>
        <div className="fc h-[50vh] py-4">
          <div className="fc w-[90%] h-full border-t border-b border-greyShade2">
            <a
              className="text-2xl text-light"
              href="/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf"
              // alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              //___
              download
              // locale={false}
            >
              Download FIle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoPobraniaContent;
