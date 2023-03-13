import { motion } from 'framer-motion';
import React from 'react';
import useMeasure from 'react-use-measure';

/**------------------------------------**/
const OverlayWithGradient: React.FC<{
  transition?: {};
  initial?: {};
  animate?: {};
}> = ({ initial, animate, transition }) => {
  /**Hook Section**/
  const [ref, bounds] = useMeasure();
  /**JSX**/
  return (
    <div
      ref={ref}
      data-layout="Fake-overlay__for-initial-animation "
      className="absolute block h-full w-full pointer-events-none overflow-hidden"
    >
      <motion.div
        style={{ width: bounds.width && bounds.width * 2 }}
        initial={initial ? initial : { x: '-50%' }}
        animate={animate ? animate : { x: '19%' }}
        transition={transition ? transition : { duration: 2, delay: 0.9 }}
        className="h-full bg-gradient-to-r from-transparent via-dark to-dark"
      />
    </div>
  );
};

export default OverlayWithGradient;
