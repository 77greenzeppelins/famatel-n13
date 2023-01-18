import React from 'react';
/**Components**/
import SquareHolder from '../../../../holders/squareHolder/SquareHolder';
import BasicCardImageSection from './imageSection/BasicCardImageSection';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------------------------**/
const BasicCardGraphicSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
}> = ({ imageData }) => {
  return (
    <div
      //___id='ImageSection__container'
      className="flex justify-center items-end relative h-[55%] w-full"
    >
      <div
        className="fc relative h-[80%] w-[80%] z-[10]"
        //rounded-md overflow-hidden
      >
        <SquareHolder
          refDivStyle="fc w-full h-full"
          squareDivStyle="relative overflow-hidden bg-light p-2"
        >
          <BasicCardImageSection imageData={imageData} />
          {/* <OverlaySection />  */}
        </SquareHolder>
      </div>{' '}
    </div>
  );
};

export default BasicCardGraphicSection;
