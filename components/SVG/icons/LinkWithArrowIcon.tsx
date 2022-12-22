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
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </motion.svg>
  );
};

export default LinkWithArrowIcon;

// onHoverStart={e => {}}
// onHoverEnd={e => {}}
// whileHover={{ scale: 1.05, stroke: corpoColors.dark }}
// transition={{
//   default: { type: 'spring', stiffness: 400, damping: 10 },
//   stroke: { duration: 0.4 },
// }}
// hover:stroke-dark ease-in duration-300

// whileHover={
//   {
//     //  scale: 1.01,
//     // stroke: corpoColors.dark,
//   }
// }
// transition={{
//   // default: { type: 'spring', stiffness: 400, damping: 10 },
//   stroke: { duration: 0.4, ease: 'easeOut' },
// }}
