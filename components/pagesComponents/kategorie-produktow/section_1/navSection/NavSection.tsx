import React from 'react';
import { corpoColors } from '../../../../../data/_data';
import CategoriesCounter from '../../../../multipagesComponents/counters/categoriesCounter/CategoriesCounter';
import ChevronLeftIcon from '../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../SVG/icons/ChevronRightIcon';
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';

const NavSection: React.FunctionComponent<{
  //   setCategoryIndex;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**OnClick Handlers*/
  const nextCategory = () => {
    setCategoryIndex(Math.min(categoryIndex + 1, categoriesNumber - 1));
  };
  const prevCategory = () => {
    setCategoryIndex(Math.max(categoryIndex - 1, 0));
  };
  /**JSX**/
  return (
    <div
      // className="flex justify-between flex-col lg:flex-row-reverse h-auto w-10 lg:w-full lg:h-10 xl:max-w-[300px]"
      className="flex justify-between w-full xs:max-w-[300px] xl:w-full xl:max-w-[80%]"
    >
      <ArrowButton
        buttonStyle="fc focus:outline-none disable pointer-events-auto w-8 h-8 border border-greyShade2"
        onClickHandler={prevCategory}
      >
        <ChevronLeftIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={1.2}
        />
      </ArrowButton>
      <CategoriesCounter
        key={categoryIndex}
        currentCategoryIndex={categoryIndex}
        digitStyle="header-link-label text-grey"
        digitContainerStyle="fc w-[20px]"
      />
      <ArrowButton
        buttonStyle="fc focus:outline-none disable pointer-events-auto w-8 h-8 border border-greyShade2"
        onClickHandler={nextCategory}
      >
        <ChevronRightIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={1.2}
        />
      </ArrowButton>
    </div>
  );
};

export default NavSection;
