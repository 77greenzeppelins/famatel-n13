import React, { useState } from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**------------------------------------------------------------------------**/
const Slide2: React.FunctionComponent<{
  slideNumber: number;
}> = ({ slideNumber }) => {
  /**State Section**/
  const [isProductDescriptionOpen, setIsProductDescriptionOpen] =
    useState(false);
  /**JSX**/
  return (
    <div className="flex flex-col-reverse justify-between sm:flex-row w-full h-full ">
      {/* <div className="flex w-full h-[50%] sm:absolute sm:bottom-0 sm:right-0 sm:w-[80%] sm:h-[80%] xl:w-[90%] xl:h-[90%] xxl:w-[96%] xxl:h-[96%] border-t border-l border-greyShade2" />
      <div className="flex w-full h-[50%] sm:absolute sm:top-0 sm:left-0 sm:w-[70%] sm:h-[70%]  border-b border-r border-greyShade2 " /> */}

      <div className="flex w-full h-[60%] absolute bottom-0 sm:justify-end sm:bottom-0 sm:right-0 sm:w-[80%] sm:h-[80%] xl:w-[90%] xl:h-[90%] xxl:w-[96%] xxl:h-[96%] ">
        <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
        />
      </div>
      <div className="flex w-full h-[40%] absolute top-0 sm:top-0 sm:left-0 sm:w-[60%] sm:h-full pointer-events-none">
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
