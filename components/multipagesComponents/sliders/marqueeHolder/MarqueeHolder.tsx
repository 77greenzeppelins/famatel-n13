import React from 'react';
/**Hook staff**/
import useMeasure from 'react-use-measure';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import IconsMarquee from '../marqueeSliders/iconsMarquee/IconsMarquee';

/**HardCoded staff**/
// const heightValue = 300;
const svgBasicSize = 60;
const svgContainerSizes = 'w-[60px] h-[60px]';
/**TS**/
interface Props {
  marqueeContainerStyle?: string;
}
/*
used in: oFirmie | section2 | ... | <IconsMarqueeSection>
*/
/**--------------------------------------**/
const MarqueeHolder: React.FC<Props> = ({ marqueeContainerStyle }) => {
  /**...**/
  const [ref, { height, width }] = useMeasure();
  const numberOfSvgCells = Math.ceil(width / svgBasicSize) + 4;
  console.log('...width:', width);

  console.log('...numberOfSvgCells:', numberOfSvgCells);
  /**JSX**/
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="MarqueeHolder__container"
      ref={ref}
      className={
        marqueeContainerStyle
          ? marqueeContainerStyle
          : 'absolute hidden md:block inset-0 overflow-hidden z-5'
      }
    >
      <InViewContainer
        animationDelay={0.1}
        outherContainerStyle="w-full h-full "
        measuredElementStyle="w-full h-full "
        topFactor={0}
        bottomFactor={0}
      >
        <IconsMarquee
          numberOfSvgCells={numberOfSvgCells}
          cellStyle={svgContainerSizes}
          animationOffset={svgBasicSize * 1.5} //to alligh svg row to screen side
          transformationFactor={1}
        />
      </InViewContainer>
    </div>
  );
};

export default MarqueeHolder;
