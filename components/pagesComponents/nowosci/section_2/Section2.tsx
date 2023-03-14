import { motion } from 'framer-motion';
import React from 'react';
import useMeasure from 'react-use-measure';
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import AnimatedText from '../section_1/AnimatedText';
import Button from './Button';

const Section2 = () => {
  const [ref, bounds] = useMeasure();
  const val = bounds.width * 1.5;

  //   console.log('bounds.width:', bounds.width);
  //   console.log('bounds.width * 2:', bounds.width * 2);
  /**JSX**/
  return (
    <div className="relative flex items-center gap-x-10 h-[50vh] overflow-hidden">
      {/* <div className="fc bg-corpo" style={{ width: val, aspectRatio: '1/1' }}>
        <p
          ref={ref}
          className="text-dark text-center text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem]  font-bold tracking-[2px] leading-tight"
        >
          14307
        </p>
      </div> */}
      {/* <Button /> */}
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="relative fc "
        // innerContainerStyle="xl:px-20 "
        measuredElementStyle="fc w-full h-full"
        topFactor={0.6}
      >
        <Button />
        <AnimatedText text="Text z sekcji_3 animuje sie w następujący sposób..." />
      </InViewContainer>
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.6 }}
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
