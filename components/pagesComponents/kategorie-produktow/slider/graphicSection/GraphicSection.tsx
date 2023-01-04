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
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute fc inset-0 "
        >
          <div
            className={`h-full w-full disable ${
              isLandscape ? 'inner-pr-md-lg' : 'inner-px-md-lg'
            }`}
          >
            <div className="fc w-full h-full bg-light">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {currentCategory}
              </motion.p>
            </div>
            {/* <SquareImageHolder
              imageData={imgKategorieProduktowPage[currentCategory].image}
              refDivStyle="flex justify-end items-end w-full h-full "
              squareDivStyle="relative overflow-hidden"
            ></SquareImageHolder> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GraphicSection;
