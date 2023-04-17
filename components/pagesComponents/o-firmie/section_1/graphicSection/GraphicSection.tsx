import React from 'react';
/**Component**/
import ImageSection from './imageSectin/ImageSection';
import OverlayWithGradient from '../../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**-------------------------------------------------------------------**/
const GraphicSection = () => {
  /**JSX**/
  return (
    <motion.div
      data-component="GraphicSection__container"
      className="relative flex justify-end items-center w-full lg:max-w-[850px] xl:max-w-[780px] xxxl:max-w-[900px] "
      //___xl:h-screen
    >
      <ImageSection imageData={imgOFirmiePage[0]} />
      <OverlayWithGradient />
    </motion.div>
  );
};

export default GraphicSection;
