import { motion } from 'framer-motion';
import React from 'react';
import useMeasure from 'react-use-measure';
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import AnimatedText from '../section_1/AnimatedText';

const Section2 = () => {
  const [ref, bounds] = useMeasure();

  //   console.log('bounds.width:', bounds.width);
  //   console.log('bounds.width * 2:', bounds.width * 2);
  /**JSX**/
  return (
    <div ref={ref} className="relative fc overflow-hidden">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="relative fc inner-px-md-xl-xxl"
        innerContainerStyle="xl:px-20 "
        measuredElementStyle="w-full h-full"
        topFactor={0.6}
      >
        <AnimatedText text="Text z sekcji_3 animuje sie w następujący sposób..." />
      </InViewContainer>
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.8 }}
      />
      {/* <motion.div
        data-layout="Fake-overlay__for-initial-animation"
        className="absolute fc h-full "
        style={{ width: bounds.width * 2 }}
        initial={{ x: '-25%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <motion.div className="w-full h-full bg-gradient-to-r from-transparent via-dark to-dark" />
      </motion.div> */}
    </div>
  );
};

export default Section2;
