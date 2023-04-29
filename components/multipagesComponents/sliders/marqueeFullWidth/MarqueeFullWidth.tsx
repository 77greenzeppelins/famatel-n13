import React from 'react';
/**Hook staff**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import IconsMarquee from '../marqueeSliders/iconsMarquee/IconsMarquee';

/**HardCoded staff**/
const svgDefaultTreshold = 768;
const svgDefaultSize = [60];
const svgDefaultContainerSizes = 'w-[60px] h-[60px]';
/**TS**/
interface Props {
  marqueeContainerStyle?: string;
  //___treshold allows set to "basic" sizes of svgStaff for responsivness reason
  svgSizeTreshold?: number;
  //___must be an array to choose one of value
  svgBasicSize: number[];
  svgContainerSizes: string;
}
/*
used in: oFirmie | section2 | ... | <IconsMarqueeSection>
*/
/**--------------------------------------**/
const MarqueeFullWidth: React.FC<Props> = ({
  marqueeContainerStyle,
  svgBasicSize = svgDefaultSize,
  svgSizeTreshold = svgDefaultTreshold,
  svgContainerSizes = svgDefaultContainerSizes,
}) => {
  /**...**/
  const { width } = useWindowSize({ screensNumber: 1 });
  /*
  why: svgBasicSize is an arra of one or two numbers; if two numbers we can choose one fize for mobile and one for desktop; mobile vs desktop is defined by svgDefaultTreshold in that case;
  */
  const svgRespSize =
    svgBasicSize.length > 0 && width > svgSizeTreshold
      ? svgBasicSize[svgBasicSize.length - 1] //___take the last one; larger value =  value for desktop
      : svgBasicSize[0]; //___take the very first
  /*
  why: just calculate number of svg's in a line / in a marquee
  */
  const numberOfSvgCells = Math.ceil(width / svgRespSize);

  /**JSX**/
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="MarqueeHolder__container"
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
          svgContainerSizes={svgContainerSizes}
          svgOffset={svgRespSize * 1.25} //___to "align" svg row to screen side
        />
      </InViewContainer>
    </div>
  );
};

export default MarqueeFullWidth;
