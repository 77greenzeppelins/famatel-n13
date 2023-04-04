import React from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/

/**TS**/
type Props = {
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
  text?: string;
};

/**-------------------------------------------**/
const AnimatedText: React.FC<Props> = ({
  componentIsInView = false,
  transitionDuration = 0.6,
  transitionDelay = 0.4,
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
        duration: transitionDuration,
        delay: transitionDelay,
      }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
