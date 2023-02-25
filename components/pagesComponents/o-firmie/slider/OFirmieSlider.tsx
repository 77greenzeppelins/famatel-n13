import React from 'react';
/**Components**/
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
  'md:justify-end md:w-[70%] md:h-[100%]  xl:h-[90%] xl:h-[100%] xxl:w-[96%] xxl:h-[100%]';

/**----------------------------------------------------**/
const OFirmieSlider: React.FunctionComponent<{
  slideNumber: number;
  isProductDescriptionOpen: boolean;
  setIsProductDescriptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  slideNumber,
  isProductDescriptionOpen,
  setIsProductDescriptionOpen,
}) => {
  /**Hook For Special Case*/
  // const { width, height } = useWindowSize({ screensNumber: 1 });
  // const layoutCondition_1 = height < 450 && width < 400;
  // const layoutCondition = height < 550;
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
        <GraphicSection
          productDescriptionOpener={setIsProductDescriptionOpen}
        />
      </div>
      <div className="flex items-center inner-pl-md-lg pt-[62px] xl:pt-0 w-full xl:w-[45%]">
        <TextSection
          isProductDescriptionOpen={isProductDescriptionOpen}
          slideNumber={slideNumber}
        />
        {/* <div className="w-full h-[100px] bg-corpo" /> */}
      </div>
    </div>
  );
};

export default OFirmieSlider;
