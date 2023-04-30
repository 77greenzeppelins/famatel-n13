import React from 'react';
/**Hook staff**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import IconsMarquee from '../marqueeSliders/iconsMarquee/IconsMarquee';

/**HardCoded staff**/
const svgDefaultTreshold = 768;
const svgDefaultSize = [46, 60];
const defaultCellStyle = 'w-[46px] h-[46px] md:w-[60px] md:h-[60px]';
/**TS**/
interface Props {
  //___treshold allows set to "basic" sizes of svgStaff for responsivness reason
  svgSizeTreshold?: number;
  //___must be an array to choose one of values; either mobile or desktop
  svgBasicSize: number[];
  transformationFactor: number;
  cellsNumberFactor: number;
  //___Tailwind Staff
  marqueeHolderStyle?: string;
  marqueeContainerStyle?: string;
  animatedContainerStyle?: string;
  cellStyle: string;
}
/*
used in: oFirmie | section2 | ... | <IconsMarqueeSection>
*/
/**--------------------------------------**/
const MarqueeFullWidth: React.FC<Props> = ({
  svgBasicSize = svgDefaultSize,
  svgSizeTreshold = svgDefaultTreshold,
  cellsNumberFactor,
  transformationFactor,
  //___Tailwind Staff
  cellStyle = defaultCellStyle,
  marqueeHolderStyle,
  marqueeContainerStyle,
  animatedContainerStyle,
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
  !: if marquee has "gap-y-10" it means that space beetwen icons is 40px
  !: recommended sice of icon for mobile is 46px; 
  */
  const numberOfSvgCells = Math.ceil((width / svgRespSize) * cellsNumberFactor);

  // console.log('MarqueeFullWidth / width', width);
  // console.log('MarqueeFullWidth / width / svgRespSize', width / svgRespSize);

  /**JSX**/
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="MarqueeHolder__container"
      className={
        marqueeHolderStyle
          ? marqueeHolderStyle
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
          animationOffset={width * 0.75}
          //___
          marqueeContainerStyle={marqueeContainerStyle}
          animatedContainerStyle={animatedContainerStyle}
          cellStyle={cellStyle}
          transformationFactor={transformationFactor}
          // svgOffset={svgRespSize * 1.25} //___to "align" svg row to screen side
        />
      </InViewContainer>
    </div>
  );
};

export default MarqueeFullWidth;
