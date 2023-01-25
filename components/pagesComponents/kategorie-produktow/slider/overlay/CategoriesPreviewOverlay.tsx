import React, { Dispatch, SetStateAction } from 'react';
/**Compomnents**/
import LinksSection from './linksSection/LinksSection';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
import FullScreenOverlay from '../../../../multipagesComponents/overlays/fullScreenOverlay/FullScreenOverlay';
import CategoriesCounter from '../../../../multipagesComponents/counters/categoriesCounter/CategoriesCounter';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import CategoryPreviewGraphicSection from './categoryPreviewGraphicSection/CategoryPreviewGraphicSection';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

const headerVariants = {
  from: { opacity: 0, x: '-100%' },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 0.7, ease: 'easeIn' },
  },
};

/**-----------------------------------------------------------------**/
const CategoriesPreviewOverlay: React.FunctionComponent<{
  currentCategory: number;
  isPreviewOpen: boolean;
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ currentCategory, isPreviewOpen, setIsPreviewOpen }) => {
  /**JSX**/
  return (
    <FullScreenOverlay
      isPreviewOpen={isPreviewOpen}
      setIsPreviewOpen={setIsPreviewOpen}
      containerStyle="absolute flex flex-col inset-0 bg-dark"
      // setIsPreviewOpen={function (value: React.SetStateAction<boolean>): void {
      //   throw new Error('Function not implemented.');
      // }}
    >
      {/* <div className="absolute w-[110%] h-[110%] backdrop-blur-md backdrop-brightness-50 " /> */}
      <div
        className="relative flex justify-center md:justify-start w-full h-full"
        // className="w-full h-full pb-[60px] overflow-hidden "
      >
        <div className="flex flex-col justify-center gap-10 h-full md:inner-pl-md-lg md:w-[40%]">
          <motion.div
            className="w-full min-h-[30%] xxl:min-h-[35%] pt-4 md:pt-10"
            variants={headerVariants}
          >
            <div className="flex w-full pb-2  md:pb-6">
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
                variantH="h2"
              />
            </div>
          </motion.div>
          <motion.div className="w-full h-full " variants={headerVariants}>
            {/* <div className="flex w-full ">
            <div className="h-auto w-[10px] border-l border-corpo" />
            <p className={`header-link-label text-grey `}>Podkategorie</p>
          </div> */}
            <SmallPseudoHeader text="Podkategorie" />
            <LinksSection
              isPreviewOpen={isPreviewOpen}
              currentCategory={currentCategory}
            />
          </motion.div>
        </div>
        <div className="hidden md:fc w-[60%] h-full px-2">
          <CategoryPreviewGraphicSection categoryIndex={currentCategory} />
        </div>
      </div>
    </FullScreenOverlay>
  );
};

export default CategoriesPreviewOverlay;
