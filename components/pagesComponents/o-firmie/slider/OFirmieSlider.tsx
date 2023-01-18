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
  'md:justify-end md:w-[70%] md:h-[100%]  lg:h-[90%] xl:h-[100%] xxl:w-[96%] xxl:h-[100%]';

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
  const { width, height } = useWindowSize({ screensNumber: 1 });
  const layoutCondition_1 = height < 450 && width < 400;
  const layoutCondition = height < 550;
  /**JSX**/
  return (
    <div
      data-component="Slide2__container"
      className={`flex flex-col-reverse w-full h-full ${mdMainContainer}`}
    >
      {!layoutCondition_1 && (
        <div
          className={`absolute bottom-0 right-0 flex w-full max-h-[1200px] h-[60%] sm:h-[65%] ${mdGraphicContainer} `}
        >
          <GraphicSection
            productDescriptionOpener={setIsProductDescriptionOpen}
          />
        </div>
      )}

      <div
        className={`absolute ${
          layoutCondition
            ? 'bottom-0 h-full fc pb-[74px] scale-90 origin-left'
            : 'top-0 h-[40%]'
        }  left-0 flex w-full md:w-[70%] md:h-full pointer-events-none `}
      >
        <TextSection
          isProductDescriptionOpen={isProductDescriptionOpen}
          slideNumber={slideNumber}
        />
      </div>
    </div>
  );
};

export default OFirmieSlider;
