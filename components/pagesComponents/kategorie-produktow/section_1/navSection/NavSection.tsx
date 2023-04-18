import React from 'react';
import Link from 'next/link';
/**Components**/
import NumbersDisplayer from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import LinkWithSpanAndIcon from '../../../../_basicComponents/links/linkWithSpanAndIcon/LinkWithSpanAndIcon';

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
      <div className="flex flex-col w-full xs:items-center ">
        <div
          className="pl-4 xs:pl-0"
          // className="w-5/12 fc"
        >
          <NumbersDisplayer
            currentCategoryIndex={categoryIndex}
            digitStyle={textStyle}
            digitContainerStyle="fc xxs:w-[66px] xs4xx:w-[80px]"
            countedStaff={catalogStructureData.length}
          />
        </div>
        <div
          className="pl-6 xs:pl-0 w-[76%]"
          // className="w-7/12 "
        >
          <LinkWithSpanAndIcon
            uniqueKeyToAnimate={
              catalogStructureData[categoryIndex].mainCategoryUrl
            }
            linkHref={catalogStructureData[categoryIndex].mainCategoryUrl}
            linkLabel={catalogStructureData[categoryIndex].mainCategoryName}
            ariaLabel={`Link do kategorii: ${catalogStructureData[categoryIndex].mainCategoryName}`}
            linkStyle="relative flex flex-col items-start xs:items-center xs:justify-center w-full group"
            //___h-full xl:h-full
            spanStyle="text-grey text-left xs:text-center text-[1.25rem] xs:text-[1.5rem]  xs:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight flex items-center w-fit max-w-[750px] h-[72px] lg:h-[60px] disable-soft"
            //___error maker: group-hover:text-light ease-in" ???
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
