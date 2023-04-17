import React from 'react';
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import DraggableSlider from './graphicSection/draggableSlider/DraggableSlider';
import NavSection from './navSection/NavSection';
// import ButtonsPanel from './navSection/ButtonsPanel';

/**HardCodedStaff*/
/**--------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**Hook Section / just count container of "sliding" images... **/
  // const [ref, { width, height }] = useMeasure();
  const { width } = useWindowSize({ screensNumber: 1 });
  /**JSX**/
  return (
    <div className="w-full flex flex-col gap-y-20 pb-[20px] md:pb-[60px]">
      <div className="relative fc w-full max-w-[2000px] overflow-hidden">
        <DraggableSlider
          width={width}
          heightValue={1} //___fake value to
          currentCategory={categoryIndex}
          arrayOrder={0} //___specifief if read array from first or the last item
        />
      </div>

      <div className="flex justify-center w-full ">
        <NavSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>

      <div className="relative fc w-full max-w-[2000px] overflow-hidden ">
        <DraggableSlider
          width={width}
          heightValue={1} //___fake value to
          currentCategory={categoryIndex}
          arrayOrder={1} //___specifief if read array from first or the last item
          xFactor={'-5%'}
          yFactor={'-5%'}
        />
      </div>
    </div>
  );
  // return (
  //   <div
  //     data-component="Section_1__container"
  //     className="flex w-screen items-center flex-col-reverse gap-y-4 xs:gap-y-6 inner-px-md-xl-xxl pt-[60px] lg:pt-[100px] xl:flex-row xl:pt-[80px] xl:gap-x-6"
  //   >
  //     <div
  //       className="relative w-full xl:w-[45%] xxl:w-[40%]"
  //     >
  //       <TextSection
  //         categoryIndex={categoryIndex}
  //         setCategoryIndex={setCategoryIndex}
  //         categoriesNumber={categoriesNumber}
  //       />
  //     </div>
  //     <div className="flex justify-center w-full xl:hidden">
  //       <NavSection
  //         categoryIndex={categoryIndex}
  //         setCategoryIndex={setCategoryIndex}
  //         categoriesNumber={categoriesNumber}
  //       />
  //     </div>
  //     <div
  //       className="w-full xl:w-[55%] xxl:w-[60%] h-[340px] xs:h-[440px]"
  //     >
  //       <GraphicSection categoryIndex={categoryIndex} isPreviewOpen={false} />
  //     </div>
  //   </div>
  // );
};

export default Section_1;
