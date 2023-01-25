import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { tailwindStyles } from '../../../../../../../data/_styleData';
import { opacityScaleYVariants } from '../../../../../../../utils/framerMotion/framerMotionUtils';
import H1AnimatedPresence from '../../../../../../_basicComponents/componentH1/H1AnimatedPresence';
import H1Component from '../../../../../../_basicComponents/componentH1/H1Component';
/**HardCoded Data**/
const labels = [
  { l1: 'Elektryka', l2: 'przemysłowa' },
  { l1: 'Bezpieczeństwo', l2: 'Twoich realizacji' },
  { l1: 'Wesołego', l2: 'Allelujjja' },
];

/**---------------------------------------------------------------------**/
const MainText: React.FunctionComponent<{ slideNumber: number }> = ({
  slideNumber,
}) => {
  /**....**/
  // console.log(Object.keys(labels[0]).length);

  /**JSX**/
  return (
    <div className="flex flex-col">
      {Array.from({ length: Object.keys(labels[0]).length }).map((_, index) => {
        /**...**/
        const labelsArray = Object.values(labels[slideNumber]);
        return (
          <H1AnimatedPresence
            key={index}
            uniqueKey={slideNumber}
            text={labelsArray[index]}
          />
        );
      })}
      {/* <H1AnimatedPresence
        uniqueKey={slideNumber}
        text={labels[slideNumber].l1}
      /> */}
      {/* <H1AnimatedPresence
        uniqueKey={slideNumber}
        text={labels[slideNumber].l2}
      /> */}
    </div>
  );
};

export default MainText;
