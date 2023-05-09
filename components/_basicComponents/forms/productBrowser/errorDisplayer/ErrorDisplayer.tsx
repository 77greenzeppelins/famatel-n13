import React from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';

/**TS**/
interface Props {
  mountingCondition?: boolean | string;
  errorText?: string;
}
/**-------------------------------------------------------**/
const ErrorDisplayer = ({ mountingCondition, errorText }: Props) => {
  /**..**/
  console.log('mountingCondition', mountingCondition);
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {mountingCondition ? (
        <motion.div
          key={errorText}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-left p-regular text-corpo">{errorText}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ErrorDisplayer;
