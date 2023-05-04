import React from 'react';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';

/**Framer Motion Staff*/
import { motion } from 'framer-motion';
const lessThen640Variant = {
  from: { y: '200px' },
  to: (isInView: boolean) => ({ y: isInView ? 0 : '200px' }),
};
const moreThen640Variant = {
  from: { x: '200px' },
  to: (isInView: boolean) => ({ x: isInView ? 0 : '200px' }),
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
  return (
    <motion.div
      className="fixed fc w-full h-[68px] sm:h-full sm:w-[80px] right-0 bottom-0 "
      custom={isInView}
      variants={layoutCondition ? moreThen640Variant : lessThen640Variant}
      animate="to"
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div
        className={`fc w-[90%] h-full sm:w-full sm:h-[260px] bg-dark ${
          layoutCondition ? moreThen640Style : lessThen640Style
        } border-corpo py-6`}
      >
        <ButtonsPanel
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
    </motion.div>
  );
};

export default FixedNavSection;
