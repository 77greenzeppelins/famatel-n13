import React, { useState } from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';
/**Hoof Staff**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Basic Data
 * (!) crucial breakPoint: md / 768
 * additional settingas are in "SquareImageHolder__container" & "TextSection-Slide1__container"
 */
const mdMainContainer = 'md:flex-row';
const mdGraphicContainer =
  'md:justify-end md:w-[80%] md:h-[100%] xl:w-[90%] xl:h-[100%] xxl:w-[96%] xxl:h-[100%]';

/**------------------------------------------------------------------------**/
const Slide2: React.FunctionComponent<{
  slideNumber: number;
}> = ({ slideNumber }) => {
  /**State Section**/
  const [isProductDescriptionOpen, setIsProductDescriptionOpen] =
    useState(false);

  /**Hook For Special Case*/
  const { height } = useWindowSize({ screensNumber: 1 });
  const layoutCondition = height < 550;
  /**Special Render*/
  // if (height < 500){
  console.log('layoutCondition:', layoutCondition);

  // }
  /**JSX**/
  return (
    <div
      data-component="Slide2__container"
      // className={
      //   layoutCondition
      //     ? 'bg-corpo'
      //     : `flex flex-col-reverse w-full h-full ${mdMainContainer}`
      // }
      className={`flex flex-col-reverse w-full h-full ${mdMainContainer} `}
    >
      <div
        className={`absolute bottom-0 right-0 flex w-full max-h-[1200px] h-[60%] ${mdGraphicContainer}`}
      >
        <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
        />
      </div>
      <div
        className={`absolute ${
          layoutCondition
            ? 'bottom-0 h-full fc pb-[74px] scale-90 origin-left'
            : 'top-0 h-[40%]'
        }  left-0 flex w-full md:w-[70%] md:h-full pointer-events-none`}
      >
        <TextSection
          isProductDescriptionOpen={isProductDescriptionOpen}
          slideNumber={slideNumber}
        />
      </div>
    </div>

    // <div
    //   className={`${
    //     isLandscape ? `flex flex-row` : 'flex flex-col'
    //   } w-full h-full`}
    // >
    //   <div
    //     className={`fc ${
    //       isLandscape ? `w-[50%] h-full` : 'w-full h-[40%]'
    //     } text-3xl text-light`}
    //   >
    //     <div className="flex justify-center flex-col px-[2%] md:px-[60px] w-full h-full ">
    //       <h1 className=" text-light text-left text-[3rem]  leading-[3rem]  xl:text-[6rem]  xl:leading-[6rem]">
    //         Header in slide_2
    //       </h1>
    //     </div>
    //   </div>
    //   <div
    //     //__
    //     className={isLandscape ? 'fc w-[50%] h-full' : 'fc w-full h-[60%]'}
    //   >
    //     <GraphicSection />
    //   </div>
    // </div>
  );
};

export default Slide2;
