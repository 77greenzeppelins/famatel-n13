import { motion } from 'framer-motion';
import React from 'react';
import { story } from '../../../../../../data/_data';

/*
  type Props = {
    value?: boolean;
  };

  const ChildComponent: React.FC<Props> = ({ value = false }) => {
    // Use the `value` prop in the child component
    return (
      <div className="text-corpo text-2xl">
        The value is: {value ? 'true' : 'false'}
      </div>
    );
  };


*/
type Props = {
  value?: boolean;
};

/**-------------------------------------------**/
const AnimatedText: React.FC<Props> = ({ value = false }) => {
  console.log('......AnimatedText / value', value);
  /**JSX**/
  return (
    <motion.p
      // ref={ref}
      className="text-light text-center text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem] xxl:text-[3.5rem] font-bold tracking-[2px] leading-tight"
      animate={{ opacity: value ? 1 : 0, scale: value ? 1 : 0.9 }}
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
