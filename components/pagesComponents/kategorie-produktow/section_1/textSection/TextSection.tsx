import React from 'react';
/**Components*/
import NavSection from '../navSection/NavSection';
import LinkWithTextAndIcon from '../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
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
      className=" flex flex-col items-center justify-center w-full h-full xl:h-full  gap-8 md:gap-10 xl:gap-8"
      //___pt-[40px] lg:pt-[60px] xl:pt-0
    >
      <div className="hidden xl:flex justify-center w-full ">
        <NavSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
      <div
        className="flex items-center max-w-[750px] h-[120px] sm:h-[120px] md:h-[160px] xl:h-[240px] disable-soft md:pb-[40px] xl:pb-0"
        //___leading-8 xxl:leading-[2.75rem]
      >
        <H1AnimatedPresence
          uniqueKey={categoryIndex}
          text={catalogStructureData[categoryIndex].mainCategoryName}
          variantH="custome"
          customeStyle="text-light text-center text-[1rem] xxs:text-[2rem] xs:text-[2.5rem] sm:text-[2.75rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3rem] font-bold tracking-[2px] leading-tight"
          // variantH="h2"
        />
      </div>

      <div
        className="absolute bottom-0 h-10"
        //___inset-x-0
      >
        <LinkWithTextAndIcon
          linkHref={catalogStructureData[categoryIndex].mainCategoryUrl}
          pLabel={'Poznaj szczegóły kategori'}
          aStyle="fc gap-4 h-full border border-greyShade1 hover:border-corpo ease-in duration-[0.4s] delay-[0.1s] bg-transparent focus:outline-none group pr-2 py-1 px-4"
          //___for <SmallPseudoHeader>
          hasBox={false}
          hasVerticalOrnament={false}
        />
      </div>
    </div>
  );
};

export default TextSection;
