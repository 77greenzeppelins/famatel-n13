import React from 'react';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**HardCoded Data**/
const svgMaxHeight = 'max-h-[540px]';

/**TS**/
import { IF_ReactFC } from '../../../../../../../utils/TS/typeScriptStaff';

/**------------------------**/
const SlideWithSvg: React.FC<IF_ReactFC> = ({ Component }) => {
  return (
    <motion.li
      className="absolute fc w-full h-full "
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.2, duration: 0.4 },
      }}
      exit={{
        opacity: 0,
        scale: 1,
      }}
    >
      <Component className={`w-[80%] aspect-square ${svgMaxHeight}`} />
    </motion.li>
  );
};

export default SlideWithSvg;
