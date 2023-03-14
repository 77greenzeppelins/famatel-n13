import React from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
import { story } from '../../../../../../data/_data';

/**TS**/
type Props = {
  componentIsInView?: boolean;
};

/**-------------------------------------------**/
const AnimatedText: React.FC<Props> = ({ componentIsInView = false }) => {
  /**JSX**/
  return (
    <motion.p
      className="text-light text-center text-[1rem] xs:text-[1.5rem]  md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] xxl:text-[3rem] tracking-[2px] leading-tight"
      animate={{
        opacity: componentIsInView ? 1 : 0,
        scale: componentIsInView ? 1 : 0.9,
      }}
      transition={{
        duration: 0.6,
        delay: 0,
      }}
    >
      {story.s1[0]}
    </motion.p>
  );
};

export default AnimatedText;
