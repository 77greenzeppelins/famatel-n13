import React from 'react';
import Link from 'next/link';
/**Components**/
import NumbersDisplayer from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer';
import TextSection from '../textSection/TextSection';
import ButtonsPanel from './ButtonsPanel';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
/**HardCoded Style*/
const textStyle =
  // 'text-corpo text-center text-[1.25rem] xs:text-[1.5rem]  lg:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight';
  'text-corpo text-center text-[1.75rem] xxs:text-[2.75rem] xs4xx:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-[2px] leading-tight';

/**--------------------------**/
const NavSection: React.FC<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**...**/
  // const min = 0;
  // const max = categoriesNumber - 1;
  /**OnClick Handlers*/
  // const nextCategory = () => {
  //   setCategoryIndex(Math.min(categoryIndex + 1, max));
  // };
  // const prevCategory = () => {
  //   setCategoryIndex(Math.max(categoryIndex - 1, min));
  // };
  /**JSX**/
  return (
    <div
      //  className="flex justify-between w-[80%] xs:max-w-[300px] lg:max-w-[500px] xl:w-full xl:max-w-[80%] "
      className="relative flex w-full"
    >
      <div className="flex flex-col items-center w-full ">
        <div className="fc w-5/12">
          <NumbersDisplayer
            currentCategoryIndex={categoryIndex}
            digitStyle={textStyle}
            // digitContainerStyle="fc w-[60px]"
            digitContainerStyle="fc xxs:w-[66px] xs4xx:w-[80px]"
            countedStaff={catalogStructureData.length}
          />
        </div>
        <div className=" w-7/12">
          <Link
            href={catalogStructureData[categoryIndex].mainCategoryUrl}
            scroll={false}
          >
            <TextSection
              categoryIndex={categoryIndex}
              setCategoryIndex={setCategoryIndex}
              categoriesNumber={categoriesNumber}
            />
          </Link>
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
