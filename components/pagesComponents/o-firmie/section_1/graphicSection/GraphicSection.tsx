import React, { Dispatch, SetStateAction } from 'react';
/**Component**/
import ImageSection from './imageSectin/ImageSection';
import AnimatedButton from './animatedButton/AnimatedButton';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**-------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  productDescriptionOpener: Dispatch<SetStateAction<boolean>>;
}> = ({ productDescriptionOpener, isProductDescriptionOpen }) => {
  /**JSX**/
  return (
    <motion.div
      data-component="GraphicSection__container"
      className={`relative flex justify-end items-center w-[95%] md:w-[90%] md:max-w-[700px] xl:w-full xl:max-w-[950px] xl:h-screen `}
    >
      <ImageSection imageData={imgOFirmiePage[1]}>
        <AnimatedButton
          onClick={() => {
            productDescriptionOpener(prev => !prev);
          }}
          sniperColor={'border-grey'}
        ></AnimatedButton>
      </ImageSection>
      <motion.div
        className="absolute inset-0 w-full h-full bg-dark origin-bottom-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      />
      {/* <div className="absolute inset-0 bg-vB" /> */}
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
