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

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  //   setCategoryIndex;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ categoryIndex, setCategoryIndex }) => {
  /**Hook Section**/
  //   const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex justify-center gap-4 md:gap-10 w-full h-full flex-col py-2 ">
        <div className="flex flex-col gap-4  ">
          <div className="flex gap-x-4 w-full h-[40px]">
            <SmallPseudoHeader
              text="Kategoria produktów"
              // containerStyle="pr-10"
            />

            <CategoriesCounter
              key={categoryIndex}
              currentCategoryIndex={categoryIndex}
              digitStyle="header-link-label text-grey"
              digitContainerStyle="fc w-[20px]"
            />
          </div>
          <div
            className="flex items-center max-w-[750px] h-full disable-soft"
            //___leading-8 xxl:leading-[2.75rem]
          >
            <H1AnimatedPresence
              uniqueKey={categoryIndex}
              text={catalogStructureData[categoryIndex].mainCategoryName}
              // variantH="h2"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TextSection;
