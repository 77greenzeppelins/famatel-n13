import React from 'react';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import AnimatedText from './AnimatedText';

/**----------------------**/
const Section2 = () => {
  /**JSX**/
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="relative fc h-[75vh]">
        <InViewContainer
          animationDelay={2}
          outherContainerStyle="relative fc "
          measuredElementStyle="fc w-full h-full"
          topFactor={0.6}
        >
          <AnimatedText text="Już wkrótce zobaczysz tutaj coś niezwykle elektryzującego..." />
        </InViewContainer>
        <OverlayWithGradient
          initial={{ x: '-50%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 3, delay: 0.6 }}
        />
      </div>
    </div>
  );
};

export default Section2;
