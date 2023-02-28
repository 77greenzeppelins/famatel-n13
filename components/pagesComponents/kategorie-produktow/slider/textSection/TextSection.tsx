import React, { Dispatch, SetStateAction } from 'react';
/**Components*/
import LinkToCategory from './linkToCategory/LinkToCategory';
import CategoriesCounter from '../../../../multipagesComponents/counters/categoriesCounter/CategoriesCounter';
import PreviewButton from './previewButton/PreviewButton';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**Basic Data**/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  currentCategory: number;
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ currentCategory, setIsPreviewOpen }) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div className="relative w-full h-full overflow-hidden ">
      <div
        className={`absolute flex  h-full w-full ${
          isLandscape
            ? 'inner-pl-md-lg py-[5%] items-center'
            : 'inner-px-md-lg py-[5%]'
        }`}
      >
        <div
        //  className="flex justify-center gap-4 md:gap-10 w-full h-full flex-col  px-2 py-2"
        >
          <div className="flex flex-col gap-4  ">
            <div className="flex gap-x-4 w-full  h-[40px]">
              <SmallPseudoHeader
                text="Kategoria produktów"
                // containerStyle="pr-10"
              />

              <CategoriesCounter
                key={currentCategory}
                currentCategoryIndex={currentCategory}
                digitStyle="header-link-label text-grey"
                digitContainerStyle="fc w-[20px]"
              />
            </div>
            <div
              className="flex items-center max-w-[750px] h-full disable-soft"
              //___leading-8 xxl:leading-[2.75rem]
            >
              <H1AnimatedPresence
                uniqueKey={currentCategory}
                text={catalogStructureData[currentCategory].mainCategoryName}
                // variantH="h2"
              />
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
            className="flex flex-col gap-2 lg:gap-4"
            style={{ width: 'fit-content' }}
          >
            <div className="flex w-full ">
              <LinkToCategory currentCategory={currentCategory} />
            </div>

            <div className="flex w-full ">
              <PreviewButton setIsPreviewOpen={setIsPreviewOpen} />
            </div>
          </div> */
}

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
