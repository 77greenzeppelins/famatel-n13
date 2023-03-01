import React from 'react';
/**Components*/
// import LinkToCategory from './linkToCategory/LinkToCategory';
import CategoriesCounter from '../../../../multipagesComponents/counters/categoriesCounter/CategoriesCounter';
// import PreviewButton from './previewButton/PreviewButton';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**Basic Data**/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import NavSection from '../navSection/NavSection';

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
    <div className="relative flex gap-x-4 w-full h-full lg:flex-col  overflow-hidden ">
      <div className="flex justify-center w-full h-full flex-col gap-8 ">
        <div className="flex gap-x-4 w-full h-[40px] ">
          <SmallPseudoHeader
            text="Kategorie produktów"
            hasBox={true}
            hasVerticalOrnament={false}
          />
        </div>
        <NavSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
        <div
          className="flex items-start max-w-[750px] h-[120px] sm:h-[120px] md:h-[160px] xl:h-[240px] disable-soft "
          //___leading-8 xxl:leading-[2.75rem]
        >
          <H1AnimatedPresence
            uniqueKey={categoryIndex}
            text={catalogStructureData[categoryIndex].mainCategoryName}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] font-bold tracking-[2px] leading-tight"
            // variantH="h2"
          />
        </div>
      </div>
      {/* <NavSection
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        categoriesNumber={categoriesNumber}
      /> */}
    </div>
  );
};

export default TextSection;
