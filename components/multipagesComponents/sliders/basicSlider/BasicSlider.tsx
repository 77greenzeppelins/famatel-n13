import React from 'react';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  from: { opacity: 0, scale: 0.95 },
  to: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: {
    opacity: 0.5,
    // scale: 0.95,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
};

/**-----------------------------------**/
const BasicSlider: React.FunctionComponent<{
  imagesArray: { ci: number; Component: React.FunctionComponent<{}> }[];
  categoryIndex: number;
  initialBool?: boolean;
  mainContainerStyle?: string;
  imageContainerStyle?: string;
}> = ({
  imagesArray,
  categoryIndex,
  initialBool = true,
  mainContainerStyle,
  imageContainerStyle,
}) => {
  /**JSX**/
  return (
    <div className={mainContainerStyle ? mainContainerStyle : 'w-full h-full'}>
      <AnimatePresence initial={initialBool} mode="wait">
        {imagesArray.map(({ ci, Component }, index) => {
          if (ci === categoryIndex) {
            return (
              <motion.div
                className={
                  imageContainerStyle ? imageContainerStyle : 'fc w-full h-full'
                }
                key={categoryIndex}
                variants={variants}
                initial="from"
                animate="to"
                exit="exit"
              >
                <Component />
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
    </div>
  );
};

export default BasicSlider;
