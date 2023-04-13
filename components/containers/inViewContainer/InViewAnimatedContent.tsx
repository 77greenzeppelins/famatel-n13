import React, { ReactNode } from 'react';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**TS**/
type Props = {
  children: ReactNode;
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
  containerStyle?: string;
  yFactor?: string;
};

/**----------------------------------------------**/
const InViewAnimatedContent: React.FC<Props> = ({
  children,
  componentIsInView = false,
  transitionDuration = 0.6,
  transitionDelay = 0.2,
  containerStyle,
  yFactor = '5%',
}) => {
  /**JSX**/
  return (
    <motion.div
      data-component="InViewAnimatedContent__container"
      className={containerStyle ? containerStyle : 'flex flex-col gap-y-10'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: componentIsInView ? 1 : 0,
        y: componentIsInView ? 0 : yFactor,
      }}
      transition={{
        duration: transitionDuration,
        delay: transitionDelay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimatedContent;