import React from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
/**Hook Staf**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import TextSection from './textSection/TextSection';

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
        className={isLandscape ? 'fc w-[50%] h-full' : 'fc w-full h-[60%]'}
      >
        <GraphicSection />
      </div>
      <div
        className={` flex flex-col text-3xl text-light px-[2%] md:px-[60px] ${
          isLandscape ? `w-[50%] h-full` : 'w-full h-[40%]'
        } `}
      >
        <TextSection />
      </div>
    </div>
  );
};

export default Slide1;
