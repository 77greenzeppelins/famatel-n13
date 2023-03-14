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
    <div className="flex inner-pl-md-xl-xxl ">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="relative flex flex-col inner-px-md-xl-xxl "
        // innerContainerStyle="xl:px-20 "
        measuredElementStyle="fc flex-col md:flex-row md:justify-center md:items-center pt-10 gap-y-6 gap-x-6 w-full h-full"
        topFactor={0.6}
      >
        <SquareWithModelNumber pseudoNumber="10" text="kategorii" />
        <AnimatedText text={story.pageOFirmie[2]} />
      </InViewContainer>
    </div>
  );
};

export default ModuleCatNumber;