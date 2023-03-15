import React from 'react';
import { corpoColors } from '../../../../../data/_data';
import CategoriesCounter from '../../../../multipagesComponents/counters/categoriesCounter/CategoriesCounter';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
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
    <div className="flex justify-between w-[80%] xs:max-w-[300px] lg:max-w-[500px] xl:w-full xl:max-w-[80%] ">
      <ArrowButton
        buttonStyle="flex items-center justify-start  focus:outline-none disable pointer-events-auto "
        //___border border-greyShade2
        onClickHandler={prevCategory}
      >
        <ChevronLeftIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={1.2}
        />
      </ArrowButton>
      <div className="fc flex-col gap-y-2">
        <SmallPseudoHeader
          text="Kategorie produktów"
          hasBox={false}
          hasVerticalOrnament={false}
          textStyle="header-link-label text-grey text-center leading-none"
        />
        <CategoriesCounter
          key={categoryIndex}
          currentCategoryIndex={categoryIndex}
          digitStyle="header-link-label text-grey"
          digitContainerStyle="fc w-[20px]"
        />
      </div>
      <ArrowButton
        buttonStyle="flex items-center justify-start focus:outline-none disable pointer-events-auto "
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
