import React from 'react';
/**Components**/
import SquareHolder from '../../../../holders/squareHolder/SquareHolder';
import BasicCardImageSection from './imageSection/BasicCardImageSection';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { cardVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
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
      <motion.div
        className="fc relative h-[80%] w-[80%] "
        //rounded-md overflow-hidden
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <SquareHolder
          refDivStyle="fc w-full h-full"
          squareDivStyle="relative overflow-hidden bg-light p-2"
        >
          <BasicCardImageSection imageData={imageData} />
          {/* <OverlaySection />  */}
        </SquareHolder>
      </motion.div>{' '}
    </div>
  );
};

export default BasicCardGraphicSection;
