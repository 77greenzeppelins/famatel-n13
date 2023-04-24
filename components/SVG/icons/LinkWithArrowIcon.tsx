import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data*/
// import { corpoColors } from '../../../data/_data';

/***********************************************************************************/
const LinkWithArrowIcon = ({
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
      role="ikonka"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      // strokeWidth={strokeWidth ? strokeWidth : 1.5}
      className={containerStyle}
    >
      <path
        className={pathStyle}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </motion.svg>
  );
};

export default LinkWithArrowIcon;

/* 
//___why not? shows description when hovered...
<title>Link SVG Icon</title> 

*/
