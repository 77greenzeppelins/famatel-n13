import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { corpoColors } from '../../../data/_data';

/***********************************************************************************/
const ChevronDownIcon = ({
  className,
  strokeWidth = 1.5,
  strokeColor,
}: {
  strokeWidth?: number;
  strokeColor?: string;
  className?: string;
}) => {
  return (
    <motion.svg
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor ? strokeColor : corpoColors.light}
      className={className ? className : 'w-6 h-6'}
      whileHover={{ scale: 1.05, stroke: '#e6530f' }}
      transition={{
        default: { type: 'spring', stiffness: 400, damping: 10 },
        stroke: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        // d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </motion.svg>
  );
};

export default ChevronDownIcon;

{
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     strokeWidth={1.5}
  //     stroke="currentColor"
  //     className="w-6 h-6"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
  //     />
  //   </svg>;
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   fill="none"
  //   viewBox="0 0 24 24"
  //   strokeWidth={1.5}
  //   stroke="currentColor"
  //   className="w-6 h-6"
  // >
  //   <path
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
  //   />
  // </svg>;
}
