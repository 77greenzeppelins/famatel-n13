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
      variants={variants}
      initial="initial"
      animate="animate"
      className="w-full max-w-[800px] xxl:max-w-[1400px] h-full disable "
      onAnimationComplete={() => setSniperIsMounted(true)}
    >
      <SquareImageHolder
        imageData={imgOFirmiePage[1].image}
        refDivStyle="flex justify-end items-end w-full h-full "
        squareDivStyle="relative overflow-hidden"
      >
        {sniperIsMounted && (
          <motion.div
            className="absolute bottom-[15%] right-[20%] h-[65%] w-[65%]"
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
