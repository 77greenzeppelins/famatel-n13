import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
// import { corpoColors } from '../../../data/_data';

/***********************************************************************************/
const XMarkIcon = ({
  containerStyle,
  strokeWidth = 1.5,
  pathStyle = '',
}: {
  strokeWidth?: number;
  containerStyle?: string;
  pathStyle?: string;
}) => {
  return (
    <motion.svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      // stroke={corpoColors.light}
      className={containerStyle}
      // onHoverStart={e => { fill:'#9b59b6'}}
      // onHoverEnd={e => {}}
    >
      {/* <title>Link SVG Icon</title> */}
      <path
        className={pathStyle}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </motion.svg>
  );
};

export default XMarkIcon;
