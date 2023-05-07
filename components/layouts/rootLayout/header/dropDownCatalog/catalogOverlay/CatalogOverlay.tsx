import React, { useEffect, useState } from 'react';
/**GlobalState Steff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../../../../globalState/globalState';
/**Componrnts**/
import Card_Basic from '../../../../../multipagesComponents/cardsCatalogs/card_Basic/Card_Basic';
import SpecialCard from './specialCard/SpecialCard';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { overlayContainerVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
import { catalogStructureData } from '../../../../../../data/_catalogStructure_data';

/**Tailwind**/
const basicTextStyle =
  ' text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300 ';
const normalCardTextStyle = `text-grey ${basicTextStyle}`;
const specialCardTextStyle = `text-greyShade2 ${basicTextStyle}`;

const largeTextStyle =
  'text-greyShade2 text-1xl sm:text-2xl xl:text-3xl tracking-[0.09rem]';

/**TS**/
interface State {
  isHovered: boolean;
}

/**-----------------------------*/
const CatalogOverlay = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);

  /**It allowes to close dropdownMenu when url changes**/
  const router = useRouter();
  useEffect(() => {
    return () => {
      globalState.isCatalogOpened = false;
    };
  }, [router.asPath]);

  /**JSX*/
  return (
    <AnimatePresence mode="wait">
      {snap.isCatalogOpened && (
        <motion.div
          data-layout="wrapper_for_ProduktyDropDownMenu"
          className="fixed flex justify-center left-0 right-0 top-[50px] bottom-[1px] pointer-events-none "
          key={snap.isCatalogOpened.toString()}
          variants={overlayContainerVariants}
          animate="animate"
          initial="initial"
          exit="initial"
        >
          <div
            data-component="ProduktyDropDownMenu__container"
            className="fc w-screen h-screen bg-dark pointer-events-auto"
          >
            <div className={`w-[98%] h-[80%] xl:h-[90%] fc bg-dark`}>
              <div
                data-layout="ProduktyDropDownMenu__griddedContainer"
                className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-[100vw] h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
                //___place-items-stretch
                //className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-full h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
              >
                {catalogStructureData.map(
                  ({
                    mainCategoryIndex,
                    mainCategoryName,
                    mainCategoryUrl,
                    mainCategoryImage,
                  }) => (
                    <Card_Basic
                      key={mainCategoryIndex}
                      url={mainCategoryUrl}
                      imageData={mainCategoryImage}
                      arrayIndex={mainCategoryIndex}
                      label={mainCategoryName}
                      heightMattersCondition={true}
                      textStyle={normalCardTextStyle}
                    />
                  )
                )}

                <div className="col-start-2 xs:col-start-3 col-span-full ">
                  <SpecialCard
                    mediumTextStyle={specialCardTextStyle}
                    largeTextStyle={largeTextStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatalogOverlay;
