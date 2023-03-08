import React from 'react';
/**Components**/
import H1Component from './H1Component';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../utils/framerMotion/framerMotionUtils';

/**---------------------------------------**/
const H1AnimatedPresence: React.FunctionComponent<{
  uniqueKey: number;
  text?: string;
  variantH?: string;
  customeStyle?: string;
  customeVariants?: {};
}> = ({ uniqueKey, text, variantH, customeStyle, customeVariants }) => {
  /**JSX**/
  return (
    <AnimatePresence
      //  initial={true}
      mode="wait"
    >
      <motion.div
        key={uniqueKey}
        // className=" disable-soft xl:w-[90%] xxl:w-[70%] xxxl:w-[55%]"
        variants={customeVariants ? customeVariants : opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
      >
        <H1Component
          text={text}
          variantH={variantH}
          customeStyle={customeStyle}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default H1AnimatedPresence;
