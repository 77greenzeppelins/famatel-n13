import React from 'react';
/**Components**/
import Slide1 from '../slide1/Slide1';
import Slide2 from '../slide2/Slide2';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Framer Motion Staff**/
const slidesArr = [Slide1, Slide2, Slide1];

const variants = {
  from: { opacity: 0 },
  presence: {
    opacity: 1,
    transition: { type: 'tween', duration: 0.6 },
  },
  to: { opacity: 0, transition: { type: 'tween', duration: 0.6 } },
};

/**----------------------------------------------------**/
const OFirmieSlider: React.FunctionComponent<{
  isLandscape: boolean | null;
  slideNumber: number;
  scrollDeltaValue: number;
}> = ({ isLandscape, slideNumber, scrollDeltaValue }) => {
  /**JSX**/
  return (
    <AnimatePresence mode="wait" initial={false}>
      {slidesArr.map((Component, index) => {
        if (index === slideNumber)
          return (
            <motion.div
              key={slideNumber}
              // custom={direction}
              variants={variants}
              initial="from"
              animate="presence"
              exit="to"
              className="fc w-[100%] h-[100%]"
            >
              <Component
                isLandscape={isLandscape}
                slideNumber={slideNumber}
                scrollDeltaValue={scrollDeltaValue}
              />
            </motion.div>
          );
      })}
    </AnimatePresence>
  );
};

export default OFirmieSlider;
