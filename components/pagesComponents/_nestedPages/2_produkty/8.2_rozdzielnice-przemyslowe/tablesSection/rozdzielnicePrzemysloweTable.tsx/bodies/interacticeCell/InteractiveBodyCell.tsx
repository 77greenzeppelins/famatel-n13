import React, { useEffect } from 'react';
/*Framer Motion Staff*/
import { motion } from 'framer-motion';
import { corpoColors } from '../../../../../../../../../data/_data';
/*TS*/
interface ICell {
  label: string;
  index: number;
  activeIndex: number;
  bodyLabelStyle: string;
  setCurrentLineIndex: React.Dispatch<React.SetStateAction<number>>;
}

/*********************************************************************************/
const InteractiveBodyCell = ({
  label,
  index,
  activeIndex,
  bodyLabelStyle,
  setCurrentLineIndex,
}: ICell) => {
  const variants = {
    initial: { backgroundColor: corpoColors.greyTint2 },
    hoverd: { backgroundColor: corpoColors.light },
  };
  /*
  ...JSX
  */
  return (
    <motion.div
      className="relative ] px-2 py-2"
      onHoverStart={() => setCurrentLineIndex(index)}
      onHoverEnd={() => setCurrentLineIndex(77)}
    >
      <motion.div
        className="absolute inset-0 bg-greyTint2"
        animate={activeIndex === index ? 'hoverd' : 'initial'}
        variants={variants}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
      <p className={`${bodyLabelStyle} relative text-center`}>
        <span>{label}</span>
      </p>
    </motion.div>
  );
};

export default InteractiveBodyCell;
