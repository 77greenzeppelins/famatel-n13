import React from 'react';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../containers/inViewContainer/InViewAnimatedContent';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';

/**----------------------**/
const Section2 = () => {
  /**JSX**/
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="relative fc h-[75vh]">
        <InViewContainer
          animationDelay={0.1}
          outherContainerStyle="relative fc "
          measuredElementStyle="fc w-full h-full"
          topFactor={0.6}
        >
          <InViewAnimatedContent scaleFactor={0.95} xFactor={'0'} yFactor={'0'}>
            <p className="text-light text-center text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem] xxl:text-[3.5rem] font-bold tracking-[2px] leading-tight">
              Już wkrótce zobaczysz tutaj coś niezwykle elektryzującego...
            </p>
          </InViewAnimatedContent>
        </InViewContainer>
        <OverlayWithGradient
          initial={{ x: '-50%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 3, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default Section2;
