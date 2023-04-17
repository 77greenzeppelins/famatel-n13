import React from 'react';
import { corpoColors } from '../../../../../data/_data';
import NumbersDisplayer from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ChevronLeftIcon from '../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../SVG/icons/ChevronRightIcon';
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

const NavSection_0: React.FC<{
  //   setCategoryIndex;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**...**/
  const min = 0;
  const max = categoriesNumber - 1;
  /**OnClick Handlers*/
  const nextCategory = () => {
    setCategoryIndex(Math.min(categoryIndex + 1, max));
  };
  const prevCategory = () => {
    setCategoryIndex(Math.max(categoryIndex - 1, min));
  };
  /**JSX**/
  return (
    <div className="flex justify-between w-[80%] xs:max-w-[300px] lg:max-w-[500px] xl:w-full xl:max-w-[80%] ">
      <ArrowButton
        buttonStyle="flex items-center justify-start focus:outline-none disable pointer-events-auto "
        //___border border-greyShade2
        onClickHandler={prevCategory}
      >
        <ChevronLeftIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={categoryIndex !== min ? 1.2 : 1}
          strokeColorWhileHover={
            categoryIndex !== min ? corpoColors.orange : corpoColors.grey
          }
        />
      </ArrowButton>
      <div className="fc flex-col gap-y-2">
        <SmallPseudoHeader
          text="Kategorie produktów"
          hasBox={false}
          hasVerticalOrnament={false}
          textStyle="header-link-label text-grey text-center leading-none"
        />
        <NumbersDisplayer
          currentCategoryIndex={categoryIndex}
          digitStyle="header-link-label text-grey"
          digitContainerStyle="fc w-[20px]"
          countedStaff={catalogStructureData.length}
        />
      </div>
      <ArrowButton
        buttonStyle="flex items-center justify-start focus:outline-none disable pointer-events-auto "
        onClickHandler={nextCategory}
      >
        <ChevronRightIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={categoryIndex !== max ? 1.2 : 1}
          strokeColorWhileHover={
            categoryIndex !== max ? corpoColors.orange : corpoColors.grey
          }
        />
      </ArrowButton>
    </div>
  );
};

export default NavSection_0;
