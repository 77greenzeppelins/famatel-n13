import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**----------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  slideNumber: number;
  isProductDescriptionOpen: boolean;
  setIsProductDescriptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  slideNumber,
  isProductDescriptionOpen,
  setIsProductDescriptionOpen,
}) => {
  /**JSX**/
  return (
    <div
      data-component="OFirmieSlider__container"
      className={`flex flex-col-reverse w-full h-full xl:flex-row-reverse `}
    >
      <div
        className={`flex items-start justify-end w-full xl:w-[55%] xs:-mt-20 lg:-mt-[140px] xl:mt-0`}
        //___ xs:-mt-20 lg:-mt-[140px] xl:mt-0
      >
        {/* <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
        /> */}
      </div>
      <div className="flex items-center inner-pl-md-lg pt-[62px] xl:h-screen xl:pt-0 w-full xl:w-[45%]">
        <TextSection
          isProductDescriptionOpen={isProductDescriptionOpen}
          slideNumber={slideNumber}
        />
      </div>
    </div>
  );
};

export default Section_1;
