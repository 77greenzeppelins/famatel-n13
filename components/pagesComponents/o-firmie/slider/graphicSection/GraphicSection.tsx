import React, { Dispatch, SetStateAction, useState } from 'react';
/**Component**/
import ImageSection from './imageSectin/ImageSection';
import AnimatedButton from './animatedButton/AnimatedButton';
import OverlaySection from './overlaySection/OverlaySection';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/*Hook Staff*/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';

/**-------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{
  productDescriptionOpener: Dispatch<SetStateAction<boolean>>;
}> = ({ productDescriptionOpener }) => {
  /**Hook Section**/
  const [ref, { width, height }] = useMeasure();

  const { width: screenWidth, height: screenHeight } = useWindowSize({
    screensNumber: 1,
  });
  /**JSX**/
  return (
    <motion.div
      ref={ref}
      data-component="GraphicSection-slide2__container"
      className="flex justify-end w-[95%] md:w-[90%] xl:w-full h-full "
    >
      <div
        className={`relative`}
        // style={{
        //   width: Math.min(width, screenHeight),
        //   height: Math.min(width, screenHeight),
        // }}
      >
        <ImageSection imageData={imgOFirmiePage[1]} />
        <AnimatedButton
          onClick={() => {
            productDescriptionOpener(prev => !prev);
          }}
        />
        <OverlaySection />
      </div>
    </motion.div>
  );
};

export default GraphicSection;

{
  /* <SquareImageHolder
        imageData={imgOFirmiePage[1]}
        refDivStyle="flex justify-end items-center w-full h-full pb-[60px] md:pt-[30%]  lg:pb-0 lg:pt-[10%]"
        squareDivStyle="relative overflow-hidden"
        hasOverlay={true}
        //
        itemsNumber={16}
        columns={4}
        gridStyle="grid-cols-[repeat(4,_1fr)]"
        delayPerPixel={0.0008}
      >
        <motion.div
          className="absolute bottom-[21%] right-[44%] h-[50%] w-[55%] pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: delayForSniper, duration: 0.9 },
          }}
        >
          <AnimatedButton
            onClick={() => {
              productDescriptionOpener(prev => !prev);
            }}
          />
        </motion.div>
      </SquareImageHolder> */
}
