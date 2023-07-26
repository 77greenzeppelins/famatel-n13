import React from 'react';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import {
  opacityScaleYVariants,
  simpleOpacityVariants,
} from '../../../../utils/framerMotion/framerMotionUtils';
/**HardCoded Data*/
const largeDigitsContainerDefaultStyle = `flex justify-end xs:min-w-[150px]  xs3xx:min-w-[130px] min-w-[110px] `;
const smalldigitsContainerDefaultStyle = ` pl-2 pt-2`;

const largeTextDefault = 'p-u-large text-grey';
const smallTextDefault = 'p-medium text-grey';

/**-------------------------------------------------**/
const NumbersDisplayer_2: React.FunctionComponent<{
  currentCategoryIndex: number;
  countedStaff: number;
  largeDigitStyle?: string;
  smallDigitStyle?: string;
  digitContainerStyle?: string;
}> = ({
  currentCategoryIndex,
  countedStaff,
  largeDigitStyle,
  smallDigitStyle,
  digitContainerStyle,
}) => {
  /**...*/
  const conditionForAdditionalZero =
    countedStaff > 9 && currentCategoryIndex + 1 < 10;
  /**JSX**/
  return (
    <div className="flex disable w-fit">
      <div
        className={`${digitContainerStyle} ? ${digitContainerStyle} : ${largeDigitsContainerDefaultStyle}`}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentCategoryIndex}
            className={largeDigitStyle ? largeDigitStyle : largeTextDefault}
            // variants={opacityScaleYVariants}
            variants={simpleOpacityVariants}
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
          digitContainerStyle
            ? digitContainerStyle
            : smalldigitsContainerDefaultStyle
        }
      >
        <p className={smallDigitStyle ? smallDigitStyle : smallTextDefault}>
          <span
            className={smallDigitStyle ? smallDigitStyle : smallTextDefault}
          >
            /
          </span>
          <span
            className={smallDigitStyle ? smallDigitStyle : smallTextDefault}
          >
            {countedStaff}
          </span>
        </p>
        {/* <p></p> */}
      </div>
      {/* <div
        className={
          digitContainerStyle ? digitContainerStyle : digitsContainerDefaultStyle
        }
      >
        <p className={smallDigitStyle ? smallDigitStyle : smallTextDefault}>
          {countedStaff}
        </p>
      </div> */}
    </div>
  );
};

export default NumbersDisplayer_2;
