import React, { useEffect, useState } from 'react';
/**GlobalState Steff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../globalState/globalState';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ProduktyDropDownMenu from '../../layouts/rootLayout/header/dropDownCatalog/produktyDropDownMenu/ProduktyDropDownMenu';

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
      setHoverState({ isHovered: false });
      setIsClicked(false);
    };
  }, [router.asPath]);

  /**JSX*/
  return (
    <AnimatePresence mode="wait">
      {snap.isCatalogOpen && (
        <div
          data-layout="wrapper_for_ProduktyDropDownMenu"
          className="fixed flex justify-center left-0 right-0 top-[50px] bottom-[1px] pointer-events-none "
        >
          <ProduktyDropDownMenu
            isHovered={snap.isCatalogOpen}
            hasDropDownMenu={true}
          />
        </div>
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
