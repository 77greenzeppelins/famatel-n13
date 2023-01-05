import React from 'react';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import useMeasure from 'react-use-measure';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import SquareImageHolder from '../../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Basic Data**/
import { mainCategories } from '../../../../../data/_data';
import { imgKategorieProduktowPage } from '../../../../../public/images/kategorieProduktowPage/imgKategorieProduktowPage';
const slideSide = 200;
const cellSize = 'w-[250px] h-[250px]';

/**Direct Child**/
const SlidesOfLine = ({ slidesNumber }: { slidesNumber: number }) => {
  // if (!slidesNumber) return;

  return (
    <>
      {Array.from({ length: slidesNumber }).map((_, i) => {
        return (
          <div
            key={i}
            className="flex flex-col w-[200px]  h-[200px] border"
            // className="w-[250px]  h-[250px] border"
            // className={`w-[${slideSide}px]  h-[${slideSide}px] border`}
            // className={`${cellSize} border`}
          >
            <p className="fc flex-col w-full h-full text-corpo">
              <span>{`n: ${slidesNumber}`}</span>
              <span>{`i: ${i}`}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};
/**--------------------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  /**Hook Section / just tell me what device's orientation is... **/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  /**Hook Section / just count container of "sliding" images... **/
  const [ref, { width, height }] = useMeasure();
  const slidersLines = height > 400 ? 2 : 1;

  /**Some Handler**/
  const createLineOfSlides = () => {
    if (!width || !height) return;
    const minNumberOfSlides = Math.trunc(width / slideSide);
    // console.log('minNumberOfSlides:', minNumberOfSlides);
    /**Handlers map()**/
    const createContent = Array.from({ length: slidersLines }).map((_, i) => {
      return (
        <motion.div
          data-layout="lineOfSlides"
          key={i}
          className="flex"
          drag="x"
          dragConstraints={
            isLandscape ? { left: 0, right: 0 } : { left: 0, right: 0 }
          }
          dragSnapToOrigin={false}
          dragElastic={0.9}
          dragMomentum={true}
        >
          <SlidesOfLine slidesNumber={minNumberOfSlides + 4} />
        </motion.div>
      );
    });
    /**Handlers JSX**/
    return (
      <div className="flex flex-col justify-center items-center   gap-4  ">
        {createContent}
      </div>
    );
  };

  /**JSX**/
  return (
    <div
      className="relative w-full h-full "
      //__overflow-hidden
    >
      <AnimatePresence initial={false}>
        <motion.div key={currentCategory} className="absolute fc inset-0 ">
          <div
            className={`h-full w-full disable ${
              isLandscape ? 'inner-pr-md-lg' : 'inner-px-md-lg'
            }`}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="fc flex-col h-full w-full border-t border-b border-greyShade1 overflow-hidden"
              //__overflow-hidden
            >
              {createLineOfSlides()}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GraphicSection;

//      <motion.p className="fc w-full h-full text-grey text-[0.75rem] flex flex-col">
//   <span>{`w: ${Math.trunc(width)}`}</span>
//   <span>{` h: ${Math.trunc(height)}`}</span>
//   <span>{`n: ${minNumberOfSlides}`}</span>
//   <span>{`cat: ${currentCategory + 1}`}</span>
// </motion.p>

// const containerHeight = isLandscape ? height : height / 2;
// const containerWidth = isLandscape ? width / 2 : width;
// const slideWidth =
//   containerWidth >= containerHeight ? containerHeight : containerWidth;

// const slideHeight =
//   containerHeight >= containerWidth ? containerWidth : containerHeight;
// /**/
