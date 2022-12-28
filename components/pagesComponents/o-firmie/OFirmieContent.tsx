import React from 'react';
import Image from 'next/image';
/**Hook Staf**/
import useWindowSize from '../../../utils/hooks/useWindowSize';
/**Basic Data*/
import { tailwindStyles } from '../../../data/_styleData';
import { imgOFirmiePage } from '../../../public/images/oFirmiePage/imgOFirmiePage';
import SquareImageHolder from '../../multipagesComponents/imageHolder/SquareImageHolder';

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  console.log('isLandscape:', isLandscape);
  /**JSX**/
  return (
    <div
      data-component="OFirmieContent__container"
      //__(!) "pb-[20px]" is required by mobile browser to prevent partial cutting of the image
      // className="relative flex items-end w-screen h-screen pt-[64px] bg-dark pb-[28px]"
      className=" w-screen h-screen pt-[52px] bg-dark pb-[32px]"
    >
      <div className="w-full h-full bg-green-800"></div>
      {/* <div
        // className={`${tailwindStyles.innerContainer} relative fc flex-col`}
        className="fc h-[40%] mx-auto px-[2%] md:px-[60px]"
      >
        <p className="text-3xl text-light uppercase">Elektryka przemysłowa</p>{' '}
      </div> */}

      {/* <div className="flex items-end justify-between h-[80%] w-full"> */}
      {/* <div className="h-full max-h-[600px] w-[80%] md:w-[50%]">
          <SquareImageHolder
            imageData={imgOFirmiePage[3].image}
            squareDivStyle="relative  overflow-hidden"
            refDivStyle="flex justify-start items-end relative h-full w-full select-none"
          />
        </div> */}

      {/* <div className="h-full max-h-[600px] w-0 md:w-[50%]  ">
          {' '}
          <SquareImageHolder
            imageData={imgOFirmiePage[4].image}
            squareDivStyle="relative overflow-hidden"
            refDivStyle="flex justify-end items-end relative h-full w-full"
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default OFirmieContent;
