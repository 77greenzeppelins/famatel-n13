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
}> = ({ uniqueKey, text, variantH, customeStyle }) => {
  /**JSX**/
  return (
    <AnimatePresence
      //  initial={true}
      mode="wait"
    >
      <motion.div
        key={uniqueKey}
        className=" disable "
        variants={opacityScaleYVariants}
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
