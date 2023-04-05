import React from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/

/**TS**/
type Props = {
  componentIsInView?: boolean;
  text?: string;
  animationDuration?: number;
  animationDelay?: number;
};

/**-------------------------------------------**/
const AnimatedText: React.FC<Props> = ({
  componentIsInView = false,
  animationDuration = 0.6,
  animationDelay = 0.4,
  text,
}) => {
  //   console.log('......AnimatedText / componentIsInView', componentIsInView);
  /**JSX**/
  return (
    <motion.p
      // ref={ref}
      className="text-light text-center text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem] xxl:text-[3.5rem] font-bold tracking-[2px] leading-tight"
      initial={{ opacity: 0 }}
      animate={{
        opacity: componentIsInView ? 1 : 0,
        scale: componentIsInView ? 1 : 0.95,
      }}
      transition={{
        duration: animationDuration,
        delay: animationDelay,
      }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
