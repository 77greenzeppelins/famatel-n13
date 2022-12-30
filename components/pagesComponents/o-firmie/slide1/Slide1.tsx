import React from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';
/**Hook Staf**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';

/**------------------------------------------------------------------------**/
const Slide1: React.FunctionComponent<{
  slideNumber: number;
  scrollDeltaValue: number;
}> = ({ slideNumber, scrollDeltaValue }) => {
  /**...WTF**/
  //   console.log('isLandscape', isLandscape);
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div
      className={`flex ${
        !isLandscape
          ? 'flex-col-reverse'
          : slideNumber === 0
          ? `flex-row`
          : 'flex-row-reverse'
      } w-full h-full`}
    >
      <div
        //__
        className={
          isLandscape ? 'fc w-[50%] h-full' : 'fc w-full h-[50%] sm:h-[60%]'
        }
      >
        <GraphicSection />
      </div>
      <div
        className={isLandscape ? `w-[50%] h-full` : 'w-full h-[50%] sm:h-[40%]'}
      >
        <TextSection />
      </div>
    </div>
  );
};

export default Slide1;
