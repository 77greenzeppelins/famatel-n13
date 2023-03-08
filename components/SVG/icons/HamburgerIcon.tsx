import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
import { corpoColors } from '../../../data/_data';

/***********************************************************************************/
const HamburgerIcon = ({
  containerStyle,
  strokeWidth = 1,
  pathStyle,
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
        className={pathStyle ? pathStyle : 'w-6 h-6'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </motion.svg>
  );
};

export default HamburgerIcon;

/*
useCase__1; with bae icon, i.e. no text label:
<XMarkIcon
containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:rotate-[0.9] ease-in duration-300 scale-[0.75] origin-center"
//___group-hover:rotate-90
/>
*/
/*
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

*/
