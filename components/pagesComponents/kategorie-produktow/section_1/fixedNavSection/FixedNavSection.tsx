import { motion } from 'framer-motion';
import React from 'react';
import ButtonsPanel from './buttonsPanel/ButtonsPanel';

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
  return (
    <motion.div
      className="fixed fc h-full w-14 sm:w-[80px] right-0 top-0 "
      animate={{ x: isInView ? 0 : '200px', opacity: isInView ? 1 : 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      // style={{
      //   transform: isInView ? 'none' : 'translateX(200px)',
      //   opacity: isInView ? 1 : 0,
      //   transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) ',
      // }}
    >
      <div className="fc h-[260px] w-full bg-dark border-l border-t border-b border-corpo py-6">
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
