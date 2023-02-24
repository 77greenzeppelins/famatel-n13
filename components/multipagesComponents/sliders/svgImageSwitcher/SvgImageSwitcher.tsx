import React, { useState } from 'react';
/*Components*/
import NavSection from './navSection/NavSection';
import SlidesSection from './slidesSection/SlidesSection';
/*Hook*/
import usePrevious from '../../../../utils/hooks/usePrevious';
/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';
/*Basic Data*/
const switcherRange = [1, 2];

/*****************************************************************************************/
const SvgImageSwitcher: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
}> = ({ imageData }) => {
  /**localState__1: to follow slideIndex changes**/
  const [basicState, setBasicState] = useState(0);
  // console.log('basicState:', basicState);
  /**....**/
  const prev = usePrevious(basicState);
  /*
  ...
  */
  const direction = basicState > prev ? 1 : -1;

  /*
  JSX
  */
  return (
    <div
      data-component="SvgImageSwitcher__container"
      className="flex items-center flex-col gap-4 w-full h-full"
    >
      <div className=" w-full h-[40px]">
        <NavSection setBasicState={setBasicState} modelNumb={imageData.model} />
      </div>
      <div className=" w-full h-full ">
        <SlidesSection
          direction={direction}
          imageData={imageData}
          basicState={basicState}
        />
      </div>
    </div>
  );
};

export default SvgImageSwitcher;
