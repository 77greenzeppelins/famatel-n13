import React from 'react';
/**Component**/
import SquareImageHolder from '../../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**----------------------------------------------------------------------**/
const GraphicSection = () => {
  /**JSX**/
  return (
    <SquareImageHolder
      imageData={imgOFirmiePage[0].image}
      refDivStyle="flex justify-start items-end w-full h-full "
      squareDivStyle="relative overflow-hidden"
    >
      <motion.button
        className="absolute top-[20%] left-[30%] h-[65%] w-[65%] "
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        }}
      >
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between w-full h-[30%] ">
            <div className="w-[30%] h-full border-t border-l border-grey" />
            <div className="w-[30%] h-full border-t border-r border-grey" />
          </div>
          <div className="flex justify-between  w-full h-[30%] ">
            <div className="w-[30%] h-full border-b border-l border-grey" />
            <div className="w-[30%] h-full border-b border-r border-grey" />
          </div>
        </div>
      </motion.button>
    </SquareImageHolder>
  );
};

export default GraphicSection;
