import React from 'react';
/**Components*/
import LinkWithTextAndIcon from '../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**Basic Data**/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import ArrowLongRightIcon from '../../../../SVG/icons/ArrowLongRightIcon';

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
      data-component="TextAndIconSection__container"
      className=" flex flex-col items-center justify-center w-full h-full xl:h-full group"
      //___pt-[40px] lg:pt-[60px] xl:pt-0
    >
      <div
        className="flex items-center w-fit max-w-[750px] h-[72px] lg:h-[60px] disable-soft px-4 "
        //___leading-8 xxl:leading-[2.75rem]
      >
        <H1AnimatedPresence
          uniqueKey={categoryIndex}
          text={catalogStructureData[categoryIndex].mainCategoryName}
          variantH="custome"
          // customeStyle="text-grey text-center text-[1rem] xxs:text-[2rem] xs:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem] font-bold tracking-[2px] leading-tight"
          customeStyle="text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]"
          // variantH="h2"
        />
      </div>

      <div className="h-6 w-6">
        <ArrowLongRightIcon containerStyle="fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-greyShade1 group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0" />
      </div>
    </div>
  );
};

export default TextSection;
