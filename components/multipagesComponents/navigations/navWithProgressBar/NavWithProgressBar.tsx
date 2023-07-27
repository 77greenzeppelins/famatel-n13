import React from 'react';
/**Components**/
import ChevronLeftIcon from '../../../SVG/icons/ChevronLeftIcon';
import ArrowButton from '../../../_basicComponents/buttons/arrowButton/ArrowButton';
/**BasicData**/
import { corpoColors } from '../../../../data/_data';
import ChevronRightIcon from '../../../SVG/icons/ChevronRightIcon';

/**TS**/
interface Props {
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}

const NavWithProgressBar = ({
  categoryIndex,
  setCategoryIndex,
  categoriesNumber,
}: Props) => {
  /**>>>**/
  const min = 0;
  const max = categoriesNumber - 1;
  /**OnClick Handlers*/
  const nextCategory = () => {
    setCategoryIndex(Math.min(categoryIndex + 1, max));
  };
  const prevCategory = () => {
    setCategoryIndex(Math.max(categoryIndex - 1, min));
  };

  return (
    <div className="items-center justify-between hidden w-full sm:flex gap-x-4">
      <ArrowButton
        buttonStyle="fc w-10 h-10 aspect-square items-center justify-start focus:outline-none disable pointer-events-auto "
        //___border border-greyShade2
        onClickHandler={prevCategory}
        ariaLabel='Przycisk: "Poprzednia Kategoria"'
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
      <div className="w-full fc">
        <div className="w-full h-[1px] bg-grey" />
      </div>
      <ArrowButton
        buttonStyle="fc w-10 h-10 aspect-square items-center justify-start focus:outline-none disable pointer-events-auto "
        onClickHandler={nextCategory}
        ariaLabel='Przycisk: "Następna Kategoria"'
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

export default NavWithProgressBar;
