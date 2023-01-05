import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**------------------------------------------------------------------------**/
const Slide1: React.FunctionComponent<{
  slideNumber: number;
}> = ({ slideNumber }) => {
  /**State Section**/
  const [isProductDescriptionOpen, setIsProductDescriptionOpen] =
    useState(false);
  /**...WTF**/
  // console.log('slideNumber', slideNumber);

  /**JSX**/
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full h-full ">
      {/* <div className="flex w-full h-[40%] absolute top-0  sm:top-0 sm:right-0  sm:w-[70%] sm:h-[70%]  border-b border-r border-greyShade1 " />
      <div className="flex w-full h-[60%] absolute bottom-0 sm:left-0 sm:w-[80%] sm:h-[80%] xl:w-[90%] xl:h-[90%] xxl:w-[96%] xxl:h-[96%]  border-t border-l border-greyShade2" /> */}

      <div className="absolute bottom-0 left-0 flex w-full h-[60%] max-h-[800px] xl:max-h-[929px] md:w-[80%]  xl:w-[100%]  xxl:w-[96%] pb-[40px] ">
        <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
        />
      </div>
      <div
        className="absolute top-0 sm:top-0 sm:right-0 flex w-full h-[40%]  md:w-[70%] md:h-[70%]  xl:h-full pointer-events-none bg-greyShade2"
        //__border-b border-greyShade2
      >
        <TextSection
          isProductDescriptionOpen={isProductDescriptionOpen}
          slideNumber={slideNumber}
        />
      </div>
    </div>

    // <div
    //   className={`flex ${
    //     !isLandscape
    //       ? 'flex-col-reverse'
    //       : slideNumber === 0
    //       ? `flex-row`
    //       : 'flex-row-reverse'
    //   } w-full h-full`}
    // >
    //   <div
    //     className={
    //       isLandscape ? 'fc w-[50%] h-full' : 'fc w-full h-[50%] sm:h-[60%]'
    //     }
    //   >
    //     <GraphicSection />
    //   </div>
    //   <div
    //     className={isLandscape ? `w-[50%] h-full` : 'w-full h-[50%] sm:h-[40%]'}
    //   >
    //     <TextSection />
    //   </div>
    // </div>
  );
};

export default Slide1;
