import React from 'react';
import Link from 'next/link';
/**Components*/
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
// const variants = {
//   initial: { y: '-100%' },
//   animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
// };
/**BasicData*/
//___<button> style, optimised for "iconStyle"
const aDefaultStyle = 'fc h-[40px] ';

/**-----------------------------------------------**/
const TextButtonWithListIcon: React.FunctionComponent<{
  ariaLabel: string;
  label: string;
  containerStyle?: string;
  buttonStyle?: string;
  //   children: ReactNode;
  variants?: {
    initial: {
      y: string;
    };
    animate: {
      y: number;
      transition: {
        ease: string;
        duration: number;
      };
    };
  };
}> = ({ ariaLabel, containerStyle, buttonStyle, variants, label }) => {
  /**JSX**/
  return (
    <div className={containerStyle ? containerStyle : 'rounded-sm'}>
      <motion.button
        aria-label={ariaLabel}
        className={`${
          buttonStyle ? buttonStyle : aDefaultStyle
        } disable focus:outline-none overflow-hidden`}
        whileHover={{ x: '3%' }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.p
          className="fc h-full text-light text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.875rem] tracking-widest uppercase pointer-events-auto cursor-pointer px-4 z-[10] whitespace-nowrap"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {label}
        </motion.p>

        <motion.div
          className="fc h-full aspect-square pointer-events-auto cursor-pointer z-[5]"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <ArrowLongRightIcon
            containerStyle="fc h-full aspect-1 "
            pathStyle="stroke-light scale-[0.75] origin-left"
          />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default TextButtonWithListIcon;
