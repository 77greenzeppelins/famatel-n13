import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**----------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  setIsProductDescriptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isProductDescriptionOpen, setIsProductDescriptionOpen }) => {
  /**JSX**/
  return (
    <div
      data-component="OFirmieSlider__container"
      className={`flex flex-col-reverse w-full h-full xl:flex-row-reverse `}
    >
      <div
        className="flex items-start justify-end w-full xl:w-[55%] xs:-mt-20 lg:-mt-[180px] xl:mt-0 "
        //___ xs:-mt-20 lg:-mt-[140px] xl:mt-0
      >
        <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
        />
      </div>
      <div
        className="flex items-center w-full inner-pl-md-lg pt-[62px] xs:pt-[120px] md:pt-[120px] lg:pt-[160px] xl:pt-0 xl:w-[45%] "
        //___xl:h-screen
      >
        <TextSection isProductDescriptionOpen={isProductDescriptionOpen} />
      </div>
    </div>
  );
};

export default Section_1;
