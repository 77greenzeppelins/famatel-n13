import { motion } from 'framer-motion';
import React from 'react';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';

/**HardCodedStaff*/
const smValue = 640; //___main layout setter

/**TS**/
interface Props {
  isInView: boolean;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}

const FixedNavSection: React.FC<Props> = ({
  isInView,
  categoryIndex,
  setCategoryIndex,
  categoriesNumber,
}) => {
  const { width } = useWindowSize({ screensNumber: 1 });
  /**JSX**/
  return (
    <motion.div
      className="fixed fc w-full h-[68px] sm:h-full sm:w-[80px] right-0 bottom-0 "
      animate={{
        x: isInView ? 0 : '200px',

        // x: isInView && width > smValue ? 0 : '200px',
        // y: isInView && width < smValue ? 0 : '200px',
        opacity: isInView ? 1 : 0,
      }}
      transition={{ delay: 0.1, duration: 0.4 }}
      // style={{
      //   transform: isInView ? 'none' : 'translateX(200px)',
      //   opacity: isInView ? 1 : 0,
      //   transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) ',
      // }}
    >
      <div className="fc w-[90%] h-full sm:w-full sm:h-[260px]  bg-dark border border-corpo py-6">
        {' '}
        <ButtonsPanel
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />{' '}
      </div>
    </motion.div>
  );
};

export default FixedNavSection;
