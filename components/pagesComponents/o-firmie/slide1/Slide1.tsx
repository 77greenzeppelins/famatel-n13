import React from 'react';
/**Components*/
import SquareImageHolder from '../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Hook Staf**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Basic Data**/
import { imgOFirmiePage } from '../../../../public/images/oFirmiePage/imgOFirmiePage';
/**Framer Motion Staff**/

/**------------------------------------------------------------------------**/
const Slide1: React.FunctionComponent<{
  isLandscape: boolean | null;
  slideNumber: number;
  scrollDeltaValue: number;
}> = ({ isLandscape, slideNumber, scrollDeltaValue }) => {
  /**...WTF**/
  console.log('isLandscape', isLandscape);
  /**Hook Section**/
  const { isLandscape: boolean } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div
      className={`flex ${
        !boolean
          ? 'flex-col-reverse'
          : slideNumber === 0
          ? `flex-row`
          : 'flex-row-reverse'
      } w-full h-full`}
    >
      <div className={`fc ${boolean ? `w-[50%] h-full` : 'w-full h-[50%]'} `}>
        <SquareImageHolder
          imageData={imgOFirmiePage[0].image}
          refDivStyle="flex justify-start items-end h-full w-full"
          squareDivStyle="relative overflow-hidden"
        />
      </div>
      <div
        className={`fc ${
          boolean ? `w-[50%] h-full` : 'w-full h-[50%]'
        } text-3xl text-light`}
      >
        <p>Elektryka</p>
        <p>Przemysłowa</p>
      </div>
    </div>
  );
};

export default Slide1;
