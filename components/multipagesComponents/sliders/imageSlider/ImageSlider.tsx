import React, { useState } from 'react';
/*Components*/
import NavSection from './navSection/NavSection';
import SlidesSection from './slidesSection/SlidesSection';
/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';

/*****************************************************************************************/
const ImageSlider: React.FunctionComponent<{
  imageData: IF_ImgStaticData[];
  imageDirectContainer?: string;
}> = ({
  imageData,
  imageDirectContainer, //allowes to style <div> that wraps <Image>
}) => {
  /**localState__1: to follow slideIndex changes**/
  const [basicState, setBasicState] = useState<number>(0);
  /**...**/
  const modelsNames = imageData.map(item => item.model);

  /**JSX**/
  return (
    <div
      data-component="SvgImageSwitcher__container"
      className="flex flex-col items-center w-full h-full gap-4"
    >
      <div className=" w-full h-[40px] ">
        <NavSection
          basicState={basicState}
          setBasicState={setBasicState}
          modelsNames={modelsNames}
        />
      </div>
      <div className="w-full h-full fc">
        <SlidesSection
          imageData={imageData}
          basicState={basicState}
          imageDirectContainer={imageDirectContainer}
        />
      </div>
    </div>
  );
};

export default ImageSlider;

// const modelsNames = Object.entries(imageData)
// .filter(([key, value]) => typeof value === 'string')
// .map(([key, value]) => value);
