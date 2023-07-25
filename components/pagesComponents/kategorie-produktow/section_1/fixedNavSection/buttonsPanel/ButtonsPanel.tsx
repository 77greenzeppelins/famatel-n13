import React from 'react';
import { catalogStructureData } from '../../../../../../data/_catalogStructure_data';
import { corpoColors } from '../../../../../../data/_data';
import ChevronLeftIcon from '../../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../../SVG/icons/ChevronRightIcon';
import ArrowButton from '../../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import LinkWithSpanAndIcon from '../../../../../_basicComponents/links/linkWithSpanAndIcon/LinkWithSpanAndIcon';

interface Props {
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}

/**-------------------------------------**/
const ButtonsPanel: React.FC<Props> = ({
  categoryIndex,
  setCategoryIndex,
  categoriesNumber,
}) => {
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
    <div
      role="group" //Indicates that the element contains a set of related elements, in this case, a set of buttons.
      data-component="ButtonsPanel__container"
      className="flex flex-row items-center justify-between w-full h-full px-6 lg:flex-col lg:justify-between lg:px-0 "
    >
      <ArrowButton
        buttonStyle="fc w-10 h-10 items-center justify-start focus:outline-none disable pointer-events-auto border border-greyShade2"
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
      <div className="block lg:hidden">
        <LinkWithSpanAndIcon
          uniqueKeyToAnimate={''} //___empty means no animation in <span>
          linkHref={catalogStructureData[categoryIndex].mainCategoryUrl}
          linkLabel={'Szczegóły kategorii'}
          ariaLabel={`Link do strony: Kategorie Produktów`}
          linkStyle="fc gap-x-4 group px-4 py-1 bg-corpo rounded-sm"
          spanStyle={`p-small text-dark font-bold group-hover:text-light group-hover:font-normal  ease-in duration-[0.4s] delay-[0.1s] `}
          //text-[0.75rem]  lg:text-[1rem] tracking-[2px] leading-tight
          iconStyle="fc h-4 w-4  aspect-square stroke-dark group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
        />
      </div>

      <ArrowButton
        buttonStyle="fc w-10 h-10 items-center justify-start focus:outline-none disable pointer-events-auto border border-greyShade2"
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

export default ButtonsPanel;
