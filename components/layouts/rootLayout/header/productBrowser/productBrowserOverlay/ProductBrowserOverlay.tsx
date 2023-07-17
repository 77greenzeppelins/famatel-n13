import React, { useEffect } from 'react';
/**GlobalState Steff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../../../../globalState/globalState';
/**Componrnts**/
import ProductBrowser from '../../../../../_basicComponents/forms/productBrowser/ProductBrowser';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { overlayContainerVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
import ProductBrowserByFormik from '../../../../../_basicComponents/forms/productBrowser/ProductBrowserByFormik';
/**BasicData*/
import { corpoStandards } from '../../../../../../data/_data';

/**Tailwind**/
// const basicTextStyle =
//   ' text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300 ';
// const normalCardTextStyle = `text-grey ${basicTextStyle}`;
// const specialCardTextStyle = `text-greyShade2 ${basicTextStyle}`;
// const largeTextStyle =
//   'text-greyShade2 text-1xl sm:text-2xl xl:text-3xl tracking-[0.09rem]';

/**TS**/
interface State {
  isHovered: boolean;
}

/**-----------------------------*/
const ProductBrowserOverlay = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);

  /**It allowes to close dropdownMenu when url changes**/
  const router = useRouter();
  useEffect(() => {
    return () => {
      globalState.isProductBrowserOpened = false;
    };
  }, [router.asPath]);

  /**JSX*/
  return (
    <AnimatePresence mode="wait">
      {snap.isProductBrowserOpened && (
        <motion.div
          data-layout="ProductBrowserOverlay__container"
          className={`fixed flex justify-center left-0 right-0 bottom-[1px] pointer-events-none ${corpoStandards.popUpsStyle}`}
          key={snap.isCatalogOpened.toString()}
          variants={overlayContainerVariants}
          animate="animate"
          initial="initial"
          exit="initial"
        >
          <div className="w-screen min-h-screen pointer-events-auto ">
            <div className="w-[100vw] h-full fc">
              <ProductBrowser />
              {/* <ProductBrowserByFormik /> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductBrowserOverlay;
