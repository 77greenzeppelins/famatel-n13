import React, { useRef, useState } from 'react';
/**Components**/
import CounterSection from './counterSection/CounterSection';
import DescriptionSection from './descriptionSection/DescriptionSection';
import DraggableSlider from './graphicSection/draggableSlider/DraggableSlider';
import FixedNavSection from './fixedNavSection/FixedNavSection';
/**Hooks**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { useInView } from 'framer-motion';
/**Basic Data*/
import { catalogStructureData } from '../../../../data/_catalogStructure_data';

/**HardCodedStaff*/
/**--------------------------------------------------**/
const Section_2 = () => {
  /**References*/
  const viewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(viewRef);
  /**Section State*/
  const [categoryIndex, setCategoryIndex] = useState(0);
  /**...**/
  const { width } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div
      data-component="Section_2"
      className="relative w-full flex flex-col gap-y-20 pb-[20px] md:pb-[60px] "
    >
      <div className="flex flex-col w-full gap-12 inner-px-md-xl-xxl">
        <div className="flex w-full ">
          <CounterSection
            ref={viewRef}
            categoryIndex={categoryIndex}
            setCategoryIndex={setCategoryIndex}
            categoriesNumber={catalogStructureData.length}
          />
        </div>
        <div className="flex w-full lg:w-[80%] m-auto">
          <DescriptionSection categoryIndex={categoryIndex} />
        </div>
      </div>

      <div className="relative fc flex-col w-full max-w-[2000px] overflow-hidden">
        <DraggableSlider
          width={width}
          currentCategory={categoryIndex}
          arrayOrder={1} //___specifief if read array from first or the last item
        />
      </div>
      <FixedNavSection
        isInView={isInView}
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        categoriesNumber={catalogStructureData.length}
      />
    </div>
  );
};

export default Section_2;
