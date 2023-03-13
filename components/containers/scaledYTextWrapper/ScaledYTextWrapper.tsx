import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
// const opacityScaleYDynamicVariants = {
//   from: { opacity: 0, scaleY: 0 },
//   to: (delayVal: number) => ({
//     opacity: 1,
//     scaleY: 1,
//     transition: {
//       duration: 0.8,
//       delay: 0.6 * delayVal,
//       ease: 'easeInOut',
//     },
//   }),
// };

/**--------------------------------**/
const ScaledYTextWrapper: React.FC<{
  isInView: boolean;
  children: React.ReactNode;
  delayVal: number;
}> = ({ isInView, children, delayVal = 1 }) => {
  /**JSX**/
  return (
    <motion.div
      animate={{ opacity: isInView ? 1 : 0, scaleY: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.6 * delayVal }}
    >
      {children}
    </motion.div>
  );
};

export default ScaledYTextWrapper;
