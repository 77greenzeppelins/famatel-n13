import React from 'react';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import SquareImageHolder from '../../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Basic Data**/
import { mainCategories } from '../../../../../data/_data';
import { imgKategorieProduktowPage } from '../../../../../public/images/kategorieProduktowPage/imgKategorieProduktowPage';

/**--------------------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute fc inset-0 "
        >
          <motion.div
            className={`h-full w-full disable ${
              isLandscape
                ? 'pr-[2%] xxs:pr-[6%] md:pr-[60px] lg:pr-[100px]'
                : 'inner-px-md-lg'
            }`}
            //___w-full max-w-[800px] xxl:max-w-[1200px] h-full
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            // variants={variants}
            // initial="initial"
            // animate="animate"

            // onAnimationComplete={() => setSniperIsMounted(true)}
          >
            <div className="fc w-full h-full bg-light">{currentCategory}</div>
            {/* <SquareImageHolder
              imageData={imgKategorieProduktowPage[currentCategory].image}
              refDivStyle="flex justify-end items-end w-full h-full "
              squareDivStyle="relative overflow-hidden"
            ></SquareImageHolder> */}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GraphicSection;
