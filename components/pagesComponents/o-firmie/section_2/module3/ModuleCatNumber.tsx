import React from 'react';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import SquareWithModelNumber from '../_embellishment/SquareWithModelNumber';
import AnimatedText from '../_textInView/AnimatedText';
/**Basic Data*/
import { story } from '../../../../../data/_data';

/**-----------------------------------**/
const ModuleCatNumber = () => {
  /**JSx**/
  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="relative flex flex-col  inner-px-md-xl-xxl "
      // innerContainerStyle="xl:px-20 "
      measuredElementStyle="fc flex-col md:flex-row md:justify-between md:items-center  gap-y-6 gap-x-6 w-full h-full"
      topFactor={0.5}
      bottomFactor={0.9}
    >
      <SquareWithModelNumber pseudoNumber="10" text="kategorii" />
      <AnimatedText text={story.pageOFirmie[4]} />
    </InViewContainer>
  );
};

export default ModuleCatNumber;
