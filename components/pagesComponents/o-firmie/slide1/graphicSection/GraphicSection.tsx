import React from 'react';
/**Component**/
import SquareImageHolder from '../../../../multipagesComponents/imageHolder/SquareImageHolder';
import AnimatedButton from './animatedButton/AnimatedButton';
/**Image Staff**/
import { imgOFirmiePage } from '../../../../../public/images/oFirmiePage/imgOFirmiePage';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
const variants = {
  initial: { x: '-100%', y: '-20%' },
  animate: { x: 0, y: 0, transition: { duration: 1.2 } },
};

/**----------------------------------------------------------------------**/
const GraphicSection = () => {
  /**JSX**/
  return (
    <motion.div
      className="w-full h-full disable"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <SquareImageHolder
        imageData={imgOFirmiePage[0].image}
        refDivStyle="flex justify-start items-end w-full h-full "
        squareDivStyle="relative overflow-hidden"
      >
        <div className="absolute top-[20%] left-[30%] h-[65%] w-[65%]">
          <AnimatedButton
            onClick={() => {
              console.log('...........AnimatedButton / GraphicSection');
            }}
          />
        </div>
      </SquareImageHolder>
    </motion.div>
  );
};

export default GraphicSection;

/*
//___staff for "Tracking the cursor"
//___0
import { motion, useMotionValue, useTransform } from 'framer-motion';
//___1
<motion.div className="absolute inset-0" onMouseMove={handleMouse} />
 <motion.div
        className="w-full h-full"
        initial={{ x: '-100%' }}
        animate={{
          x: 0,
          transition: { duration: 1.8 },
        }}
        style={{ rotateX: rotateX }}
      >
//___2
  // const x = useMotionValue(10);
  // const y = useMotionValue(10);

  // function handleMouse(e: MouseEvent) {
    // e.preventDefault();
    // x.set(e.clientX);
    // y.set(e.clientY);
    // x.set(e.clientY + e.clientX);
  // }

  // const rotateX = useTransform(x, [0, 2000], [50, -50]);
  // const rotateX = useTransform(y, [0, 1000], [10, -10]);
  // const rotateY = useTransform(x, [0, 1000], [-10, 10]);
*/
