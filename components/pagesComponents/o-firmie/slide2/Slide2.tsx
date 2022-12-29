import React from 'react';
/**Components*/
import SquareImageHolder from '../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Hook Staf**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Basic Data**/
import { imgOFirmiePage } from '../../../../public/images/oFirmiePage/imgOFirmiePage';

/**------------------------------------------------------------------------**/
const Slide2: React.FunctionComponent<{
  slideNumber: number;
  scrollDeltaValue: number;
}> = ({ slideNumber, scrollDeltaValue }) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  /**JSX**/
  return (
    <div
      className={`${
        isLandscape ? `flex flex-row` : 'flex flex-col'
      } w-full h-full`}
    >
      <div
        className={`fc ${
          isLandscape ? `w-[50%] h-full` : 'w-full h-[50%]'
        } text-3xl text-light`}
      >
        <p>text for slide_2</p>
      </div>
      <div
        className={`fc ${isLandscape ? `w-[50%] h-full` : 'w-full h-[50%]'} `}
      >
        <SquareImageHolder
          imageData={imgOFirmiePage[1].image}
          refDivStyle="flex justify-end items-end h-full w-full"
          squareDivStyle="relative bg-dark overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Slide2;
