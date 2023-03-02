import React from 'react';
/**Components*/
import NavSection from '../navSection/NavSection';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**Basic Data**/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  //   setCategoryIndex;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**Hook Section**/
  //   const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div
      className="flex justify-center w-full xl:h-full flex-col gap-8 md:gap-10 xl:gap-8 "
      //___pt-[40px] lg:pt-[60px] xl:pt-0
    >
      <div className="hidden xl:block">
        <NavSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
      <div className="flex gap-x-4 w-full ">
        <SmallPseudoHeader
          text="Kategorie produktów"
          hasBox={true}
          hasVerticalOrnament={false}
        />
      </div>

      <div
        className="flex items-start max-w-[750px] h-[120px] sm:h-[120px] md:h-[160px] xl:h-[240px] disable-soft "
        //___leading-8 xxl:leading-[2.75rem]
      >
        <H1AnimatedPresence
          uniqueKey={categoryIndex}
          text={catalogStructureData[categoryIndex].mainCategoryName}
          variantH="custome"
          customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] font-bold tracking-[2px] leading-tight"
          // variantH="h2"
        />
      </div>
    </div>
  );
};

export default TextSection;
