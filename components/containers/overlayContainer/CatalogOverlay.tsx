import React, { useEffect, useState } from 'react';
/**GlobalState Steff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../globalState/globalState';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ProduktyDropDownMenu from '../../layouts/rootLayout/header/dropDownCatalog/produktyDropDownMenu/ProduktyDropDownMenu';
import { overlayContainerVariants } from '../../../utils/framerMotion/framerMotionUtils';
import { catalogStructureData } from '../../../data/_catalogStructure_data';
import Card_Basic from '../../multipagesComponents/cardsCatalogs/card_Basic/Card_Basic';
import SpecialCard from '../../layouts/rootLayout/header/dropDownCatalog/produktyDropDownMenu/specialCard/SpecialCard';

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

  /**useRouter Section*/
  /**why: for style sake;  I want link to be in corpo color and has no border-bottom when user is on its corresponding page */
  const router = useRouter();

  /**Local State mr_1**/
  const [hoverState, setHoverState] = useState<State>({ isHovered: false });
  /**Local State nr_2**/
  const [isClicked, setIsClicked] = useState(false);

  /**It allowes to close dropdownMenu when url changes*/
  useEffect(() => {
    return () => {
      // setHoverState({ isHovered: false });
      // setIsClicked(false);
      globalState.isCatalogOpen = !snap.isCatalogOpen;
    };
  }, [router.asPath, snap.isCatalogOpen]);

  /**JSX*/
  return (
    <AnimatePresence mode="wait">
      {snap.isCatalogOpen && (
        <motion.div
          data-layout="wrapper_for_ProduktyDropDownMenu"
          className="fixed flex justify-center left-0 right-0 top-[50px] bottom-[1px] pointer-events-none "
          key={snap.isCatalogOpen.toString()}
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
  // return (
  //   <AnimatePresence mode="wait">
  //     {snap.isCatalogOpen && (
  //       <motion.div
  //         data-component="MobileMenuOverlay__container"
  //         key={snap.isCatalogOpen.toString()}
  //         className="fixed left-0 right-0 top-0 bottom-0 z-[490] bg-grey"
  //         initial={{ x: '100%' }}
  //         animate={{
  //           x: 0,
  //           transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
  //         }}
  //         exit={{
  //           opacity: 0.9,
  //           x: '100%',
  //           transition: { duration: 0.8, delay: 1, ease: 'easeOut' },
  //         }}
  //       >
  //         <div className="relative fc w-full h-full bg-grey inner-px-md-xl-xxl">
  //           <ProduktyDropDownMenu />
  //         </div>
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // );
  // return (
  //   <AnimatePresence>
  //     {snap.isCatalogOpen ? (
  //       <motion.div
  //         data-component="CatalogOverlay"
  //         className="fixed left-0 right-0 top-[40px] bottom-0 z-[490]  bg-greyShade2"
  //         initial={{ x: '100%' }}
  //         animate={{
  //           x: 0,
  //           transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
  //         }}
  //         exit={{
  //           opacity: 0.9,
  //           x: '100%',
  //           transition: { duration: 0.8, delay: 1, ease: 'easeOut' },
  //         }}
  //       >
  //         <ProduktyDropDownMenu />
  //       </motion.div>
  //     ) : null}
  //   </AnimatePresence>
  // );
};

export default CatalogOverlay;
