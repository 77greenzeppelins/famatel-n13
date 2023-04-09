import React from 'react';
/**Components**/
import InViewContainer from '../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../kontakt/_inViewAnimatedContent/InViewAnimatedContent';
import HeroSection from './heroSection/HeroSection';
import SectionCatalogy from './sectionCatalogy/SectionCatalogy';
import SectionDeclarations from './sectionDeclarations/SectionDeclarations';
/**Hardcoded Staff*/
const lgTextStyle =
  'text-light text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem]  xxl:text-[5rem]  tracking-[2px] md:leading-[3rem] lg:leading-[4rem] xl:leading-[3.5rem] xxl:leading-[4rem]';
//___md:text-[4rem] lg:text-[5rem] xl:text-[4.5rem]
const mdTextStyle =
  'text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025';

/**----------------------------------**/
const DoPobraniaContent = () => {
  /**JSX**/
  return (
    <main
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[30px]"
    >
      <div className="fc w-full min-h-screen">
        <HeroSection mdTextStyle={mdTextStyle} lgTextStyle={lgTextStyle} />
      </div>
      <div className="w-full h-full inner-px-md-xl-xxl">
        <div className="flex flex-col w-full pt-10 gap-y-20 lg:pt-20">
          <InViewContainer
            animationDelay={0.1}
            outherContainerStyle="relative w-full h-full"
            measuredElementStyle="w-full h-full"
            topFactor={0}
            bottomFactor={0.2}
          >
            <InViewAnimatedContent containerStyle="w-full">
              <SectionCatalogy
                mdTextStyle={mdTextStyle}
                lgTextStyle={lgTextStyle}
              />
            </InViewAnimatedContent>
          </InViewContainer>

          <InViewContainer
            animationDelay={0.1}
            outherContainerStyle="relative fc w-full h-full"
            measuredElementStyle="fc w-full h-full"
            topFactor={0}
            bottomFactor={0.2}
          >
            <InViewAnimatedContent containerStyle="w-full">
              <SectionDeclarations />
            </InViewAnimatedContent>
          </InViewContainer>
        </div>
      </div>
    </main>
  );
};
export default DoPobraniaContent;
