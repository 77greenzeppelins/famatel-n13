import React, { useEffect, useState } from 'react';
/**Components**/
import InViewContainer from '../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../kontakt/_inViewAnimatedContent/InViewAnimatedContent';
import HeroSection from './heroSection/HeroSection';
import SectionCatalogy from './sectionCatalogy/SectionCatalogy';
import SectionDeclarations from './sectionDeclarations/SectionDeclarations';
/**Hardcoded Staff*/
const lgTextStyle =
  'text-light text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem] tracking-[2px]';
const mdTextStyle =
  'text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025';

/**----------------------------------**/
const DoPobraniaContent = () => {
  /**State for CursorTracker*/
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [mouseRelativePosition, setMouseRelativePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  const [normalizingValue, setNormalizingValue] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const x = event.clientX;
    const y = event.clientY;
    // setMousePosition({ x, y });
    // const relativeX = x / screenWidth;
    // const relativeY = y / screenHeight;
    // setMouseRelativePosition({ x: relativeX, y: relativeY });

    const normalizingX = 0.5 - x / screenWidth;
    const normalizingY = 0.5 - y / screenHeight;
    // const normalizingX = (x - screenWidth / 2) / (screenWidth / 2) + 0.5;
    // const normalizingY = (y - screenHeight / 2) / (screenHeight / 2) + 0.5;
    setNormalizingValue({ x: normalizingX, y: normalizingY });
  }

  /**JSX**/
  return (
    <main
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[30px]"
      onMouseMove={handleMouseMove}
    >
      {/* <div className="sticky flex flex-col w-[200px] h-[140px] top-[50px] left-0 z-999 bg-vY">
        <p>{`mouseX: ${mousePosition.x}`}</p>
        <p>{`mouseY: ${mousePosition.y}`}</p>
        <p>{`mouseRelX: ${mouseRelativePosition.x.toFixed(2)}`}</p>
        <p>{`mouseRelY: ${mouseRelativePosition.y.toFixed(2)}`}</p>
        <p>{`normalizingX: ${normalizingValue.x.toFixed(2)}`}</p>
        <p>{`normalizingY: ${normalizingValue.y.toFixed(2)}`}</p>
      </div> */}
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
                normalizedValues={{
                  x: normalizingValue.x,
                  y: normalizingValue.y,
                }}
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
