import React from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
import { story } from '../../../../../data/_data';

/**TS**/
type Props = {
  componentIsInView?: boolean;
  text?: string;
};

/**-------------------------------------------**/
const AnimatedText: React.FC<Props> = ({ componentIsInView = false, text }) => {
  /**JSX**/
  return (
    <div className="width-full">
      <motion.p
        data-component="AnimatedText__p"
        className="text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem]   xxl:text-[2.25rem] tracking-[2px] leading-tight"
        animate={{
          opacity: componentIsInView ? 1 : 0,
          scale: componentIsInView ? 1 : 0.9,
        }}
        transition={{
          duration: 0.6,
          delay: 0,
        }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default AnimatedText;
