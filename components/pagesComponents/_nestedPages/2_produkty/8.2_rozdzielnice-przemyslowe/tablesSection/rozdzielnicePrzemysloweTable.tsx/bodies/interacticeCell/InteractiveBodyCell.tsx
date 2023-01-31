import React, { useEffect } from 'react';
/*Framer Motion Staff*/
import { motion } from 'framer-motion';
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
    initial: { opacity: 0.85 },
    hoverd: { opacity: 1 },
  };

  //   useEffect(() => {
  //     console.log('index', index);
  //     console.log('index', activeIndex);
  //   }, [index, activeIndex]);
  /*
  ...JSX
  */
  return (
    <motion.div
      className="relative py-[0.3rem] "
      onHoverStart={() => setCurrentLineIndex(index)}
      onHoverEnd={() => setCurrentLineIndex(77)}
    >
      <motion.div
        className="absolute inset-0 bg-light"
        animate={activeIndex === index ? 'hoverd' : 'initial'}
        variants={variants}
      />
      <p className={`${bodyLabelStyle} relative text-center`}>
        <span>{label}</span>
      </p>
    </motion.div>
  );
};

export default InteractiveBodyCell;
