import React, { useRef } from 'react';
/**Components**/
import SvgWordMap from '../../../../SVG/maps/SvgWordMap';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';

/**-----------------------**/
const WordMap = () => {
  const constraintsRef = useRef(null);
  /**...**/
  const { width } = useWindowSize({ screensNumber: 1 });
  const dragCondition = width <= 768;

  /**JSX**/
  return (
    <motion.div
      //  ref={constraintsRef}
      className="fc w-full overflow-hidden"
    >
      <motion.div
        ref={constraintsRef}
        // drag="x"
        drag={dragCondition ? 'x' : false}
        className="w-full min-w-[800px]"
        //translate-x-[-25%]
        // dragConstraints={{ left: -400, right: 0 }}
        dragSnapToOrigin={true}
        dragElastic={0.9}
        dragMomentum={true}
      >
        <SvgWordMap containerStyle="w-full" />
      </motion.div>
    </motion.div>
  );
};

export default WordMap;
