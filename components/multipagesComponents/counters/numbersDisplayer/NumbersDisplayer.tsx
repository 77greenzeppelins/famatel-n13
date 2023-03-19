import React from 'react';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';
/**HardCoded Data*/
const digitContainerDefaultStyle = `w-[40px] `;
const digitDefaultStyle = 'text-[1.5rem] text-grey text-cente';

/**-------------------------------------------------**/
const NumbersDisplayer: React.FunctionComponent<{
  currentCategoryIndex: number;
  countedStaff: number;
  digitStyle?: string;
  digitContainerStyle?: string;
}> = ({
  currentCategoryIndex,
  countedStaff,
  digitStyle,
  digitContainerStyle,
}) => {
  /**...*/
  const conditionForAdditionalZero =
    countedStaff > 9 && currentCategoryIndex + 1 < 10;
  /**JSX**/
  return (
    <div className="flex disable">
      <div
        className={`${digitContainerStyle} ? ${digitContainerStyle} : ${digitContainerDefaultStyle}`}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentCategoryIndex}
            className={digitStyle ? digitStyle : digitDefaultStyle}
            variants={opacityScaleYVariants}
            initial="from"
            animate="to"
            exit="exit"
          >{`${conditionForAdditionalZero ? '0' : ''}${
            currentCategoryIndex + 1
          } `}</motion.p>
        </AnimatePresence>
      </div>
      <div
        className={
          digitContainerStyle ? digitContainerStyle : digitContainerDefaultStyle
        }
      >
        <p className={digitStyle ? digitStyle : digitDefaultStyle}>/</p>
      </div>
      <div
        className={
          digitContainerStyle ? digitContainerStyle : digitContainerDefaultStyle
        }
      >
        <p className={digitStyle ? digitStyle : digitDefaultStyle}>
          {countedStaff}
        </p>
      </div>
    </div>
  );
};

export default NumbersDisplayer;
