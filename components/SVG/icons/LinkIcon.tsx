import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { corpoColors } from '../../../data/_data';

/***********************************************************************************/
const LinkIcon = ({
  className,
  strokeWidth = 1.5,
}: {
  strokeWidth?: number;
  className: string;
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={corpoColors.light}
      className={className}
      // onHoverStart={e => { fill:'#9b59b6'}}
      // onHoverEnd={e => {}}
      whileHover={{ scale: 1.05, stroke: '#e6530f' }}
      transition={{
        default: { type: 'spring', stiffness: 400, damping: 10 },
        stroke: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </motion.svg>
  );
};

export default LinkIcon;
