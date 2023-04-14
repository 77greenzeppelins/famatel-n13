import React from 'react';
/**Hook staff**/
import useMeasure from 'react-use-measure';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
/**Basic Data*/
import IconsMarquee from './iconsMarquee/IconsMarquee';

/**HardCoded staff**/
// const heightValue = 300;
const svgBasicSize = 60;
const svgContainerSizes = 'w-[60px] h-[60px]';

/**--------------------------------------**/
const MarqueeHolder: React.FC = () => {
  /**...**/
  const [ref, { height, width }] = useMeasure();
  const NumberOfSvgCells = Math.ceil(width / svgBasicSize) + 4;
  /**JSX**/
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="MarqueeHolder__container"
      ref={ref}
      className="absolute hidden md:block inset-0 overflow-hidden z-5"
    >
      <InViewContainer
        animationDelay={0.1}
        outherContainerStyle="w-full h-full "
        measuredElementStyle="w-full h-full "
        topFactor={0}
        bottomFactor={1}
      >
        <IconsMarquee
          NumberOfSvgCells={NumberOfSvgCells}
          svgContainerSizes={svgContainerSizes}
        />
      </InViewContainer>
    </div>
  );
};

export default MarqueeHolder;
