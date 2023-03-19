import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';

/**------------------------------------------------------------------**/
const NamesDisplayer: React.FC<{
  names: (string | undefined)[];
  index: number;
  containerStyle?: string;
  labelName?: string;
  textStyle?: string;
}> = ({ names, index, containerStyle, labelName, textStyle }) => {
  /**JSX**/
  return (
    <div
      className={
        containerStyle ? containerStyle : 'flex justify-between w-[140px]'
      }
    >
      {labelName ? (
        <div>
          <p className={textStyle ? textStyle : 'header-link-label text-grey'}>
            {labelName}
          </p>
        </div>
      ) : null}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className={
            textStyle ? textStyle : 'header-link-label text-grey disable-soft'
          }
          variants={opacityScaleYVariants}
          initial="from"
          animate="to"
          exit="exit"
        >
          {names[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default NamesDisplayer;

/*
<AnimatePresence mode="wait">
          <motion.p
            key={currentCategoryIndex}
            className={digitStyle ? digitStyle : digitDefaultStyle}
            variants={opacityScaleYVariants}
            initial="from"
            animate="to"
            exit="exit"
          >{`${currentCategoryIndex + 1 < 10 ? '0' : ''}${
            currentCategoryIndex + 1
          } `}</motion.p>
        </AnimatePresence>

*/
