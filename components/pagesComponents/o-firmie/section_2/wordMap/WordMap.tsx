import React from 'react';
/**Components**/
import SvgWordMap from '../../../../SVG/maps/SvgWordMap';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';

/**-----------------------**/
const WordMap = () => {
  /**...**/
  const { width } = useWindowSize({ screensNumber: 1 });
  const dragCondition = width <= 540;
  /**JSX**/
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        drag={dragCondition ? 'x' : false}
        className="w-full min-w-[800px]"
        dragConstraints={{ left: -400, right: 0 }}
      >
        <SvgWordMap containerStyle="w-full" />
      </motion.div>
    </div>
  );
};

export default WordMap;
