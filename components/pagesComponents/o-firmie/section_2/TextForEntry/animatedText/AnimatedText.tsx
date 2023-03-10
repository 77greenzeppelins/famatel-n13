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
  //   console.log('......AnimatedText / componentIsInView', componentIsInView);
  /**JSX**/
  return (
    <motion.p
      // ref={ref}
      className="text-light text-center text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem] xxl:text-[3.5rem] font-bold tracking-[2px] leading-tight"
      animate={{
        opacity: componentIsInView ? 1 : 0,
        scale: componentIsInView ? 1 : 0.9,
      }}
      transition={{
        duration: 0.6,
        delay: 0,
        // type: 'spring',
        // bounce: 0.4,
        // duration: 0.8,
      }}
    >
      {story.s1[0]}
    </motion.p>
  );
};

export default AnimatedText;
