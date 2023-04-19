import React from 'react';
/**Components**/
import SquareHolderWithImage from '../../../../holders/squareHolderWithImage/SquareHolderWithImage';

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
      data-component="BasicCardGraphicSection__container"
      className="flex justify-center items-end relative h-[55%] w-full"
    >
      <motion.div
        className="fc relative h-[80%] w-[80%]"
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <SquareHolderWithImage imageData={imageData} />
      </motion.div>{' '}
    </div>
  );
};

export default BasicCardGraphicSection;

{
  /* <SquareHolder
          refDivStyle="fc w-full h-full"
          squareDivStyle="relative overflow-hidden bg-light p-2"
        >
          <BasicCardImageSection imageData={imageData} />
        </SquareHolder> */
}
