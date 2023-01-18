import React, { Dispatch, SetStateAction } from 'react';
/**Components*/
import LinkToCategory from './linkToCategory/LinkToCategory';
import CategoriesCounter from '../../../../multipagesComponents/counters/categoriesCounter/CategoriesCounter';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { mainCategories } from '../../../../../data/_data';
import PreviewButton from './previewButton/PreviewButton';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  currentCategory: number;
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ currentCategory, setIsPreviewOpen }) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  const categoryNameStyle = ` text-light text-left ${
    isLandscape
      ? 'text-[1rem] lg:text-[2rem] xxl:text-[3rem] tracking-widest'
      : 'text-[1.5rem] xs:text-[2rem] sx:text-[3rem] tracking-widest'
  }`;
  const categoryNameContainerStyle = `${
    isLandscape
      ? 'h-[2rem] lg:h-[4.6rem] xxl:h-[6rem]  '
      : 'h-[3rem] xs:h-[4rem] sx:h-[6rem] '
  }`;

  /**JSX**/
  return (
    <div className="relative w-full h-full overflow-hidden ">
      <div
        className={`absolute fc h-full w-full ${
          isLandscape ? 'inner-pl-md-lg py-[5%]' : 'inner-px-md-lg py-[5%]'
        }`}
      >
        <div className="flex justify-center gap-4 md:gap-10 w-full h-full flex-col leading-none px-2 py-2 ">
          <div className="flex flex-col gap-4 h-[120px] ">
            <div className="flex w-full pb-1 md:pb-1">
              <SmallPseudoHeader text="Podkategoria" containerStyle="pr-10" />
              {/* <div className="h-auto w-[10px] border-l border-corpo" />
            <p className={`header-link-label text-grey pr-10`}>Kategoria</p> */}
              <CategoriesCounter
                key={currentCategory + 20}
                currentCategoryIndex={currentCategory}
                digitStyle="header-link-label text-grey"
                digitContainerStyle="fc w-[20px]"
              />
            </div>

            <div className="flex items-center max-w-[750px] h-auto leading-8 xxl:leading-[2.75rem] disable ">
              <H1AnimatedPresence
                uniqueKey={currentCategory}
                text={catalogStructureData[currentCategory].mainCategoryName}
                // variantH="h2"
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-2 lg:gap-4"
            style={{ width: 'fit-content' }}
          >
            <div className="flex w-full ">
              <LinkToCategory currentCategory={currentCategory} />
            </div>

            <div className="flex w-full ">
              <PreviewButton setIsPreviewOpen={setIsPreviewOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;

{
  /* <div
            className="flex"
            style={{ width: 'fit-content' }}
            //___border border-greyShade1
          >
            <CategoriesCounter
              key={currentCategory}
              currentCategoryIndex={currentCategory}
            />
          </div> */
}

{
  /* <div className="flex items-center w-full h-auto disable">
            <div className={`${categoryNameContainerStyle} flex items-center`}>
              <div className="h-full w-[2px] border-l-2 border-corpo pr-2" />
              <motion.p
                key={currentCategory}
                className={categoryNameStyle}
                variants={opacityScaleYVariants}
                initial="from"
                animate="to"
              >
                {mainCategories[currentCategory].fullName}
              </motion.p>
            </div>
          </div> */
}
