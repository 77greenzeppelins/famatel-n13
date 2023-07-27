import React, { useRef, useState } from 'react';
/**Components**/
import NavWithProgressBar from '../../../multipagesComponents/navigations/navWithProgressBar/NavWithProgressBar';
import LinkAsContainer from '../../../_basicComponents/links/linkAsContainer/LinkAsContainer';
import AnimatedLabel from '../../../multipagesComponents/pseudoHeaders/animatedLabel/AnimatedLabel';
import CounterSection from './counterSection/CounterSection';
import DescriptionSection from './descriptionSection/DescriptionSection';
import DraggableSlider from './graphicSection/draggableSlider/DraggableSlider';
import FixedNavSection from './fixedNavSection/FixedNavSection';
/**Hooks**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { useInView } from 'framer-motion';
import { simpleOpacityVariants } from '../../../../utils/framerMotion/framerMotionUtils';
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
      <div className="flex flex-col w-full  lg:min-h-[90vh] inner-px-md-xl-xxl">
        <div className="flex w-full ">
          <CounterSection
            ref={viewRef}
            categoryIndex={categoryIndex}
            setCategoryIndex={setCategoryIndex}
            categoriesNumber={catalogStructureData.length}
          />
        </div>
        <div className="flex w-full sm:w-[80%] m-auto">
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
      <div className=" inner-px-md-xl-xxl w-full lg:w-[60%] m-auto">
        <NavWithProgressBar
          setCategoryIndex={setCategoryIndex}
          categoryIndex={categoryIndex}
          categoriesNumber={catalogStructureData.length}
        />
      </div>
      <div className="mx-auto -mt-20 sm:mt-0 inner-px-md-xl-xxl">
        <LinkAsContainer
          linkHref={catalogStructureData[categoryIndex].mainCategoryUrl}
          ariaLabel={`Link do kategorii: ${catalogStructureData[categoryIndex].mainCategoryName}`}
          linkStyle="flex items-center w-fit px-4 py-2 rounded-sm bg-corpo group "
        >
          <AnimatedLabel
            customeVariants={simpleOpacityVariants}
            uniqueKey={categoryIndex}
            label="Szczegóły kategorii"
            hasIcon={true}
            textStyle="text-dark font-bold header-link-label group-hover:text-light group-hover:font-normal ease-in duration-[0.4s] delay-[0.1s]"
            iconStyle="fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-dark group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
          />
        </LinkAsContainer>
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
