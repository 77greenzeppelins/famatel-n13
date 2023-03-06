import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**----------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSection_2_Open, setIsSection_2_Open }) => {
  //___{ scroll: true }
  /**JSX**/
  return (
    <div
      data-component="OFirmieSlider__container"
      className={`flex flex-col-reverse items-end w-full xl:flex-row-reverse xl:items-center justify-center min-h-[100.1vh] xl:h-screen`}
    >
      <div
        className="relative flex items-start justify-end w-[98%] sm:w-[95%] md:w-[90%] lg:w-[84%] xl:w-[55%] xxl:w-[60%] xl:h-auto xs:-mt-20 lg:-mt-[140px] xl:mt-0"
        //___ xs:-mt-20 lg:-mt-[140px] xl:mt-0 md:aspect-h-1  xl:aspect-none
      >
        <GraphicSection
          isSection_2_Open={isSection_2_Open}
          setIsSection_2_Open={setIsSection_2_Open}
        />
      </div>
      <div
        className="flex items-center w-full inner-pl-md-lg pt-[62px] xs:pt-[120px] md:pt-[120px] lg:pt-[160px] xl:pt-0 xl:w-[45%] xxl:w-[40%]"
        //___xl:h-screen
      >
        <TextSection />
      </div>
    </div>
  );
};

export default Section_1;
