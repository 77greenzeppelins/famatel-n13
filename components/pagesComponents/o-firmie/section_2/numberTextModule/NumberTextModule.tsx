import React from 'react';
/**Components**/
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import SquareWithNumber from '../_embellishment/SquareWithNumber';
import AnimatedText from '../_textInView/AnimatedText';

/**---------------------------------**/
const NumberTextModule: React.FC<{
  squareNumber: string;
  squareText: string;
  animatedText: string;
}> = ({ squareNumber, squareText, animatedText }) => {
  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="relative flex flex-col px-[2%] xxs:px-[6%] md:px-[60px] lg:px-[15%]"
      measuredElementStyle="fc flex-col md:flex-row md:justify-between md:items-center  gap-y-6 gap-x-6 w-full h-full "
      topFactor={0.5}
      bottomFactor={0.9}
    >
      <SquareWithNumber pseudoNumber={squareNumber} text={squareText} />
      <AnimatedText text={animatedText} />
    </InViewContainer>
  );
};

export default NumberTextModule;
