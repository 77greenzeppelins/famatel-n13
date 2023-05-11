import React from 'react';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';

/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
const lessThen640Variant = {
  from: { y: '200px', opacity: 0 },
  to: (isInView: boolean) => ({
    y: isInView ? 0 : '200px',
    opacity: 1,
    transition: { delay: 0, duration: 0.6 },
  }),
  exit: { y: '200px', opacity: 1, transition: { delay: 0.1, duration: 0.6 } },
};
const moreThen640Variant = {
  from: { x: '200px', opacity: 0 },
  to: (isInView: boolean) => ({
    x: isInView ? 0 : '200px',
    opacity: 1,
    transition: { delay: 0, duration: 0.6 },
  }),
  exit: { x: '200px', opacity: 1, transition: { delay: 0.1, duration: 0.6 } },
};

/**HardCodedStaff*/
const smValue = 640; //___main layout setter
const lessThen640Style = 'border-t border-l border-r';
const moreThen640Style = 'border-t border-l border-b';

/**TS**/
interface Props {
  isInView: boolean;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}

/**----------------------------------------**/
const FixedNavSection: React.FC<Props> = ({
  isInView,
  categoryIndex,
  setCategoryIndex,
  categoriesNumber,
}) => {
  /**Staff for responsive layout**/
  const { width } = useWindowSize({ screensNumber: 1 });
  const layoutCondition = width >= smValue;
  /**JSX**/
  // console.log('isInView:', isInView);
  return (
    <AnimatePresence mode="wait" initial={true} custom={isInView}>
      {isInView && (
        <motion.div className="fixed fc w-full h-[68px] sm:h-full sm:w-[80px] right-0 bottom-0">
          <motion.div
            className={`fc w-[90%] h-full sm:w-full sm:h-[260px] bg-dark ${
              layoutCondition ? moreThen640Style : lessThen640Style
            } border-corpo py-6`}
            key={isInView.toString()}
            custom={isInView}
            variants={layoutCondition ? moreThen640Variant : lessThen640Variant}
            initial="from"
            animate="to"
            exit="exit"
          >
            <ButtonsPanel
              categoryIndex={categoryIndex}
              setCategoryIndex={setCategoryIndex}
              categoriesNumber={categoriesNumber}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedNavSection;
