import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { tailwindStyles } from '../../../../../../../data/_styleData';
import { opacityScaleYVariants } from '../../../../../../../utils/framerMotion/framerMotionUtils';
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
  return (
    <div className="flex flex-col">
      <AnimatePresence
        //  initial={true}
        mode="wait"
      >
        <motion.div
          key={slideNumber}
          className=" disable "
          variants={opacityScaleYVariants}
          initial="from"
          animate="to"
          exit="exit"
        >
          <H1Component text={labels[slideNumber].l1} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence
        //  initial={true}
        mode="wait"
      >
        <motion.div
          key={slideNumber}
          className=" disable "
          variants={opacityScaleYVariants}
          initial="from"
          animate="to"
          exit="exit"
        >
          <H1Component text={labels[slideNumber].l2} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainText;
