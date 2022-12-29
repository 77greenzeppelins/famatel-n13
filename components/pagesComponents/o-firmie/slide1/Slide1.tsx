import React from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
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
        className={` fc ${isLandscape ? `w-[50%] h-full` : 'w-full h-[50%]'} `}
      >
        <GraphicSection />
      </div>
      <div
        className={` flex flex-col ${
          isLandscape ? `w-[50%] h-full` : 'w-full h-[50%]'
        } text-3xl text-light px-[2%] md:px-[60px]`}
      >
        <div className="flex h-[50%] justify-end items-end bg-dark pb-6 z-[10] ">
          <h1 className="text-[4rem] text-right leading-[5rem] uppercase">
            Elektryka <br />
            Przemysłowa
          </h1>
        </div>
        <div className="flex h-[50%] justify-end  bg-dark pt-6 z-[1]">
          <p className="text-[2rem] text-grey text-right leading-[2rem]">
            Zobacz pełną ofertę
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
