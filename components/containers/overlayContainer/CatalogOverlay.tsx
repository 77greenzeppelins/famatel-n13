import React from 'react';
/**GlobalState Steff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../globalState/globalState';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import ProduktyDropDownMenu from '../../layouts/rootLayout/header/dropDownMenus/allMenus/produktyDropDownMenu/ProduktyDropDownMenu';

const CatalogOverlay = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);
  /**JSX*/
  return (
    <AnimatePresence mode="wait">
      {snap.isCatalogOpen && (
        <motion.div
          data-component="MobileMenuOverlay__container"
          key={snap.isCatalogOpen.toString()}
          className="fixed left-0 right-0 top-0 bottom-0 z-[490] bg-grey"
          initial={{ x: '100%' }}
          animate={{
            x: 0,
            transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
          }}
          exit={{
            opacity: 0.9,
            x: '100%',
            transition: { duration: 0.8, delay: 1, ease: 'easeOut' },
          }}
        >
          <div className="relative fc w-full h-full bg-grey inner-px-md-xl-xxl">
            <ProduktyDropDownMenu />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
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
