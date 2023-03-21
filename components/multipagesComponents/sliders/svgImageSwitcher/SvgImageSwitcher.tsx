import React, { useState } from 'react';
/*Components*/
import NavSection from './navSection/NavSection';
import SlidesSection from './slidesSection/SlidesSection';
/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';

/*****************************************************************************************/
const SvgImageSwitcher: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
}> = ({ imageData }) => {
  /**localState__1: to follow slideIndex changes**/
  const [basicState, setBasicState] = useState(0);
  // console.log('basicState:', basicState);
  /**....**/

  /**JSX**/
  return (
    <div
      data-component="SvgImageSwitcher__container"
      className="flex items-center flex-col gap-4 w-full h-full"
    >
      <div className="w-full h-[40px] xl:max-w-[600px]">
        <NavSection
          basicState={basicState}
          setBasicState={setBasicState}
          modelName={imageData.model}
        />
      </div>
      <div className="fc w-full h-full">
        <SlidesSection imageData={imageData} basicState={basicState} />
      </div>
    </div>
  );
  /*
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
  */
};

export default SvgImageSwitcher;
