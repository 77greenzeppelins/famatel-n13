import React, { ReactNode } from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import {
  opacityScaleYDynamicVariants,
  opacityScaleYDynamicComplexVariants,
} from '../../../../utils/framerMotion/framerMotionUtils';

/**--------------------------**/
const ScaledYWrapper = ({
  animationDelay,
  children,
  isInView,
  onAnimationCompleteHandler,
}: {
  animationDelay?: number;
  children: ReactNode;
  isInView?: boolean;
  onAnimationCompleteHandler?: () => void;
}) => {
  /**JSX**/
  return (
    <motion.div
      custom={animationDelay}
      variants={opacityScaleYDynamicVariants}
      initial="from"
      animate="to"
      onAnimationComplete={onAnimationCompleteHandler}
      // onComplete={onAnimationCompleteHandler}
    >
      {children}
    </motion.div>
  );
};

export default ScaledYWrapper;
