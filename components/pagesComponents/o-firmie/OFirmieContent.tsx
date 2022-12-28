import React from 'react';
import Image from 'next/image';
/**Components**/
import TextModule from './textModule/TextModule';
/**Hook Staf**/
import useWindowSize from '../../../utils/hooks/useWindowSize';
/**Basic Data*/
import { tailwindStyles } from '../../../data/_styleData';
import { imgOFirmiePage } from '../../../public/images/oFirmiePage/imgOFirmiePage';
import SquareImageHolder from '../../multipagesComponents/imageHolder/SquareImageHolder';
import GraphicModule from './graphicModule/GraphicModule';

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**Hook Section**/
  const { isLandscape, height } = useWindowSize({ screensNumber: 1 });

  console.log('isLandscape:', isLandscape);
  /**JSX**/
  return (
    <div
      data-component="OFirmieContent__container"
      //__(!) "pb-[20px]" is required by mobile browser to prevent partial cutting of the image
      // className="relative flex items-end w-screen h-screen pt-[64px] bg-dark pb-[28px]"
      //__why such complex heightStyle? samsumg tab cuts about 100px at the bottom
      className={`w-screen h-full pt-[52px] bg-dark ${
        height > 799 ? 'pb-[100px]' : height > 500 ? 'pb-[40px]' : 'pb-[20px]'
      }`}
    >
      <div
        className={`flex ${
          isLandscape ? 'flex-row' : 'flex-col'
        } w-full h-full  bg-green-800`}
      >
        <div
          className={`${isLandscape ? 'w-[50%] h-full' : ' w-full h-[50%] '}`}
        >
          <TextModule />
        </div>
        <div
          className={`${isLandscape ? 'w-[50%] h-full' : ' w-full h-[50%] '}`}
        >
          <GraphicModule />
        </div>
      </div>
    </div>
  );
};

export default OFirmieContent;

{
  /* <div
        // className={`${tailwindStyles.innerContainer} relative fc flex-col`}
        className="fc h-[40%] mx-auto px-[2%] md:px-[60px]"
      >
        <p className="text-3xl text-light uppercase">Elektryka przemysłowa</p>{' '}
      </div> */
}

{
  /* <div className="flex items-end justify-between h-[80%] w-full"> */
}
{
  /* <div className="h-full max-h-[600px] w-[80%] md:w-[50%]">
          <SquareImageHolder
            imageData={imgOFirmiePage[3].image}
            squareDivStyle="relative  overflow-hidden"
            refDivStyle="flex justify-start items-end relative h-full w-full select-none"
          />
        </div> */
}

{
  /* <div className="h-full max-h-[600px] w-0 md:w-[50%]  ">
          {' '}
          <SquareImageHolder
            imageData={imgOFirmiePage[4].image}
            squareDivStyle="relative overflow-hidden"
            refDivStyle="flex justify-end items-end relative h-full w-full"
          />
        </div> */
}
{
  /* </div> */
}
