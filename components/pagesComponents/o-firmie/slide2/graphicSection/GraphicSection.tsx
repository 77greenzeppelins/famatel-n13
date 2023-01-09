import React, { Dispatch, SetStateAction, useState } from 'react';
/**Component**/
import SquareImageHolder from '../../../../multipagesComponents/imageHolder/SquareImageHolder';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import AnimatedButton from '../../slide1/graphicSection/animatedButton/AnimatedButton';
const variants = {
  initial: { x: '100%', y: '-20%' },
  animate: { x: 0, y: 0, transition: { ease: 'circOut', duration: 1.2 } },
};

const GraphicSection: React.FunctionComponent<{
  productDescriptionOpener: Dispatch<SetStateAction<boolean>>;
}> = ({ productDescriptionOpener }) => {
  /**Local State*/
  const [sniperIsMounted, setSniperIsMounted] = useState(false);
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
      <SquareImageHolder
        imageData={imgOFirmiePage[1].image}
        refDivStyle="flex justify-end items-center w-full h-full pb-[60px] md:pt-[30%]  lg:pb-0 lg:pt-[10%]"
        squareDivStyle="relative overflow-hidden"
        hasOverlay={true}
        //
        itemsNumber={16}
        columns={4}
        gridStyle="grid-cols-[repeat(4,_1fr)]"
        delayPerPixel={0.0008}
      >
        {sniperIsMounted && (
          <motion.div
            className="absolute bottom-[16%] right-[38%] h-[55%] w-[50%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.9 } }}
          >
            <AnimatedButton
              onClick={() => {
                productDescriptionOpener(prev => !prev);
              }}
            />
          </motion.div>
        )}
      </SquareImageHolder>
    </motion.div>
  );
};

export default GraphicSection;
