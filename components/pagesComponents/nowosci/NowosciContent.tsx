import React, { useState } from 'react';
import InViewContainer from '../../containers/inViewContainer/InViewContainer';
import AnimatedText from './section_1/AnimatedText';
import Section2 from './section_2/Section2';
/**Components**/

/**----------------------------------**/
const NowosciContent = () => {
  /**Local State**/
  // const [animationStage, setAnimationStage] = useState<number>(0);

  // console.log('.......animationStage', animationStage);
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-xl-xxl">
        <div className="flex flex-col pt-[50px] gap-y-[10px]">
          <Section2 />
          <div className="fc h-[50vh] bg-greyShade2">
            <InViewContainer
              animationDelay={2}
              outherContainerStyle="relative fc inner-px-md-xl-xxl "
              innerContainerStyle="xl:px-20 "
              measuredElementStyle="w-full h-full bg-vR"
              topFactor={0.6}
            >
              <AnimatedText text="Text z sekcji_1 animuje sie w następujący sposób..." />
            </InViewContainer>
          </div>
          <div className="relative fc h-[50vh] bg-greyShade1">
            <InViewContainer
              animationDelay={2}
              outherContainerStyle="relative fc inner-px-md-xl-xxl "
              innerContainerStyle="xl:px-20 "
              measuredElementStyle=" w-full h-full bg-vR"
              topFactor={0.6}
            >
              <AnimatedText text="Text z sekcji_2 animuje sie w następujący sposób..." />
            </InViewContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowosciContent;
