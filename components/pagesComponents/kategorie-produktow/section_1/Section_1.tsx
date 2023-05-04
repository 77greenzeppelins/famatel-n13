import React, { useRef } from 'react';
/**Components**/
import DescriptionSection from './descriptionSection/DescriptionSection';
import DraggableSlider from './graphicSection/draggableSlider/DraggableSlider';
import FixedNavSection from './fixedNavSection/FixedNavSection';
/**Hooks**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { useInView } from 'framer-motion';
import CounterSection from './counterSection/CounterSection';
// import CounterSection from './counterSection/CounterSection';

/**HardCodedStaff*/
/**--------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**References*/
  const viewRef = useRef<HTMLDivElement>(null!);
  const isInView = useInView(viewRef);
  /**...**/
  const { width } = useWindowSize({ screensNumber: 1 });
  /**JSX**/
  return (
    <div className="relative w-full flex flex-col gap-y-20 pb-[20px] md:pb-[60px] ">
      <div className="relative fc flex-col w-full max-w-[2000px] overflow-hidden">
        <DraggableSlider
          width={width}
          currentCategory={categoryIndex}
          arrayOrder={1} //___specifief if read array from first or the last item
        />
      </div>
      <div className="flex flex-col w-full gap-12">
        <div className="flex justify-center w-full ">
          <CounterSection categoryIndex={categoryIndex} ref={viewRef} />
        </div>
        <DescriptionSection categoryIndex={categoryIndex} />
      </div>
      <FixedNavSection
        isInView={isInView}
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        categoriesNumber={categoriesNumber}
      />
    </div>
  );
};

export default Section_1;
