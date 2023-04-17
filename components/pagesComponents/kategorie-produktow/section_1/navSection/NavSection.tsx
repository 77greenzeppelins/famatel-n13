import React from 'react';
import Link from 'next/link';
/**Components**/
import NumbersDisplayer from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import AnimatedLink from './animatedLink/AnimatedLink';

/**HardCoded Style*/
const textStyle =
  'text-corpo text-center text-[1.75rem] xxs:text-[2.75rem] xs4xx:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-[2px] leading-tight';

/**--------------------------**/
const NavSection: React.FC<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**JSX**/
  return (
    <div className="relative flex w-full">
      <div className="flex flex-col items-center w-full ">
        <div className="fc w-5/12">
          <NumbersDisplayer
            currentCategoryIndex={categoryIndex}
            digitStyle={textStyle}
            digitContainerStyle="fc xxs:w-[66px] xs4xx:w-[80px]"
            countedStaff={catalogStructureData.length}
          />
        </div>
        <div className=" w-7/12">
          <AnimatedLink
            linkHref={catalogStructureData[categoryIndex].mainCategoryUrl}
            linkLabel={catalogStructureData[categoryIndex].mainCategoryName}
            ariaLabel={`Link do kategorii: ${catalogStructureData[categoryIndex].mainCategoryName}`}
          />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 ">
        <ButtonsPanel
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
    </div>
  );
};

export default NavSection;
