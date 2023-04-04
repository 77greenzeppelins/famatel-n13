import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
};

const InViewAnimatedContent: React.FC<Props> = ({
  children,
  componentIsInView = false,
  transitionDuration = 0.6,
  transitionDelay = 0.2,
}) => {
  return (
    <motion.div
      className=" flex flex-col gap-y-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: componentIsInView ? 1 : 0,
        y: componentIsInView ? 0 : '5%',
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
