import React, { Dispatch, SetStateAction, useState } from 'react';
/**Component**/
import SquareHolder from '../../../../multipagesComponents/holders/squareHolder/SquareHolder';
import ImageSection from './imageSectin/ImageSection';
import AnimatedButton from './animatedButton/AnimatedButton';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import OverlaySection from './overlaySection/OverlaySection';

/**-------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{
  productDescriptionOpener: Dispatch<SetStateAction<boolean>>;
}> = ({ productDescriptionOpener }) => {
  /**JSX**/
  return (
    <motion.div
      data-component="GraphicSection-slide2__container"
      // variants={variants}
      // initial="initial"
      // animate="animate"
      className="w-full max-w-[800px] xxl:max-w-[1400px] h-full disable"
      // onAnimationComplete={() => setSniperIsMounted(true)}
    >
      <SquareHolder
        refDivStyle="flex justify-end items-center w-full h-full pb-[60px] md:pt-[30%]  lg:pb-0 lg:pt-[10%]"
        squareDivStyle="relative overflow-hidden"
      >
        <ImageSection imageData={imgOFirmiePage[1]} />
        <AnimatedButton
          onClick={() => {
            productDescriptionOpener(prev => !prev);
          }}
        />
        <OverlaySection />
      </SquareHolder>
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
