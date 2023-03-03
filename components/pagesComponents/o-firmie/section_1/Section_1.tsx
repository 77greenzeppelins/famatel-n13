import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import ProductDescription from './productDescription/ProductDescription';
import TextSection from './textSection/TextSection';

/**----------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  setIsProductDescriptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isProductDescriptionOpen, setIsProductDescriptionOpen }) => {
  /**...**/
  console.log('isProductDescriptionOpen', isProductDescriptionOpen);
  /**JSX**/
  return (
    <div
      data-component="OFirmieSlider__container"
      className={`flex flex-col-reverse w-full xl:flex-row-reverse justify-center h-screen`}
    >
      <div
        className="relative flex items-start justify-end w-full xl:w-[55%] xs:-mt-20 lg:-mt-[180px] xl:mt-0"
        //___ xs:-mt-20 lg:-mt-[140px] xl:mt-0
      >
        <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
          isProductDescriptionOpen={isProductDescriptionOpen}
        />
        {/* <ProductDescription
          productDescriptionOpener={setIsProductDescriptionOpen}
          isProductDescriptionOpen={isProductDescriptionOpen}
        /> */}
      </div>
      <div
        className="flex items-center w-full inner-pl-md-lg pt-[62px] xs:pt-[120px] md:pt-[120px] lg:pt-[160px] xl:pt-0 xl:w-[45%]"
        //___xl:h-screen
      >
        <TextSection />
      </div>
    </div>
  );
};

export default Section_1;
