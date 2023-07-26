import React from 'react';
/**Components**/
import HeroBackground from './heroBackground/HeroBackground';
import TenCategoriesWithSvg from './heroForegroundGraphic/TenCategoriesWithSvg';
import MobileMarquee from './mobileMarquee/MobileMarqui';
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import InViewAnimatedContent from '../../../containers/inViewContainer/InViewAnimatedContent';
/**Basic Data**/
import { story } from '../../../../data/_data';

/**-------------------------**/
const HeroSection = () => {
  return (
    <div className="relative flex-col fc gap-y-0">
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[76vh] min-h-[300px] w-full">
        <div
          className="absolute h-full left-0 w-[5%] max-w-[40px] z-10 from-dark  to-transparent bg-gradient-to-r"
          //___via-dark
        />
        <div className="absolute h-full right-0 w-[5%] max-w-[40px] z-10 from-dark to-transparent bg-gradient-to-l" />

        <div className="absolute sm:hidden h-[50px] top-8 inset-x-0">
          <MobileMarquee transformationFactor={-2} />
        </div>
        <div className="absolute sm:hidden h-[50px] bottom-8 inset-x-0">
          <MobileMarquee
            transformationFactor={2}
            animatedContainerStyle="flex justify-end w-full gap-x-[46px] md:gap-x-[60px]"
          />
        </div>

        <div className="h-full fc">
          <HeroBackground />
          <TenCategoriesWithSvg />
        </div>
      </div>
      <div className="my-10 sm:my-0 inner-px-md-xl-xxl">
        <div className="relative flex items-start justify-center h-full ">
          <InViewContainer
            animationDelay={0.1}
            outherContainerStyle="relative fc "
            measuredElementStyle="fc w-full h-full"
            topFactor={0.6}
          >
            <InViewAnimatedContent
              scaleFactor={0.95}
              xFactor={'0'}
              yFactor={'0'}
            >
              <p className="text-center text-grey p-l-m">
                {story.oFirmiePage.heroSection[0]}
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
    </div>
  );
};

export default HeroSection;
