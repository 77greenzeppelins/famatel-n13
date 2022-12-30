import React from 'react';
/**Component**/
import SquareImageHolder from '../../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
const variants = {
  initial: { x: '100%', y: '-20%' },
  animate: { x: 0, y: 0, transition: { ease: 'circOut', duration: 1.2 } },
};

const GraphicSection = () => {
  /**JSX**/
  return (
    <motion.div
      className="w-full h-full disable"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <SquareImageHolder
        imageData={imgOFirmiePage[1].image}
        refDivStyle="flex justify-end items-end w-full h-full "
        squareDivStyle="relative overflow-hidden"
      >
        <div className="absolute top-[20%] left-[30%] h-[65%] w-[65%]">
          {/* <AnimatedButton
            onClick={() => {
              console.log('...........AnimatedButton / GraphicSection');
            }}
          /> */}
        </div>
      </SquareImageHolder>
    </motion.div>
  );
};

export default GraphicSection;
