import React, { Dispatch, SetStateAction } from 'react';
/**Component**/
import ImageSection from './imageSectin/ImageSection';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import OverlayWithGradient from '../../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';

/**-------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSection_2_Open, setIsSection_2_Open }) => {
  /**Hook Section**/
  const [ref, bounds] = useMeasure();
  /**JSX**/
  return (
    <motion.div
      // ref={ref}
      data-component="GraphicSection__container"
      // className={`relative flex justify-end items-center w-[95%] md:w-[90%] md:max-w-[700px] xl:w-full xl:max-w-[950px] xl:h-screen `}
      className={`relative flex justify-end items-center w-full xl:max-w-[950px] xl:h-screen xxl:max-w-1150px] `}
    >
      <ImageSection
        imageData={imgOFirmiePage[1]}
        isSection_2_Open={isSection_2_Open}
        setIsSection_2_Open={setIsSection_2_Open}
      />
      <OverlayWithGradient />
      {/* <div
        ref={ref}
        data-layout="Fake-overlay__for-initial-animation "
        className="absolute block h-full w-full pointer-events-none overflow-hidden"
      >
        <motion.div
          style={{ width: bounds.width && bounds.width * 2 }}
          initial={{ x: '-50%' }}
          animate={{ x: '19%' }}
          transition={{ duration: 2, delay: 0.9 }}
          className="h-full bg-gradient-to-r from-transparent via-dark to-dark"
        />
      </div> */}
    </motion.div>
  );
};

export default GraphicSection;

{
  /* <motion.div
        className="absolute inset-0 w-full h-full bg-dark origin-bottom-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      /> */
}
{
  /* <div className="absolute inset-0 bg-vB" /> */
}

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
