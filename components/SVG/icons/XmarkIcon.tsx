import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { corpoColors } from '../../../data/_data';

/***********************************************************************************/
const XMarkIcon = ({
  containerStyle,
  strokeWidth = 1,
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
      stroke={corpoColors.light}
      className={containerStyle ? containerStyle : 'origin-center'}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'spring',
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      }}
    >
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

/*
useCase__1; with bae icon, i.e. no text label:
<XMarkIcon
containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:rotate-[0.9] ease-in duration-300 scale-[0.75] origin-center"
//___group-hover:rotate-90
/>
*/
