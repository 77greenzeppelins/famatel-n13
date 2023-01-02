import React from 'react';
/**Components**/
import Slide1 from '../slide1/Slide1';
import Slide2 from '../slide2/Slide2';
import Slide3 from '../slide3/Slide3';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { homePageSliderVariants } from '../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
const slidesArr = [Slide2, Slide1, Slide3];

/**----------------------------------------------------**/
const OFirmieSlider: React.FunctionComponent<{
  slideNumber: number;
}> = ({ slideNumber }) => {
  /**JSX**/
  return (
    <AnimatePresence mode="wait" initial={true}>
      {slidesArr.map((Component, index) => {
        if (index === slideNumber)
          return (
            <motion.div
              key={slideNumber}
              // custom={direction}
              variants={homePageSliderVariants}
              initial="from"
              animate="presence"
              exit="to"
              className="fc w-[100%] h-[100%] "
              // className="fixed inset-0"
            >
              <Component slideNumber={slideNumber} />
            </motion.div>
          );
      })}
    </AnimatePresence>
  );
};

export default OFirmieSlider;
