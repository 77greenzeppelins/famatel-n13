import React, { ReactNode } from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { opacityScaleYDynamicVariants } from '../../../../utils/framerMotion/framerMotionUtils';

/**--------------------------**/
const ScaledYWrapper = ({
  animationDelay,
  children,
  isInView = false,
}: {
  animationDelay: number;
  children: ReactNode;
  isInView?: boolean;
}) => {
  /**JSX**/
  return (
    <motion.div
      custom={animationDelay}
      variants={opacityScaleYDynamicVariants}
      initial="from"
      animate="to"
    >
      {children}
    </motion.div>
  );
};

export default ScaledYWrapper;
