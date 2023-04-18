import React from 'react';
/** */
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';
/**HardCoded Staff*/
const h1DefaultStyle = ` text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight group-hover:text-light ease-in duration-[0.4s] delay-[0.1s] flex items-center w-fit max-w-[750px] h-[72px] lg:h-[60px] disable-soft px-4`;

/**TS**/
interface Props {
  uniqueKey: number | string;
  label: string;
  customeVariants?: {};
  spanStyle?: string;
}

const AnimatedSpanHeader = ({
  uniqueKey,
  label,
  customeVariants,
  spanStyle,
}: Props) => {
  return (
    <AnimatePresence
      //  initial={true}
      mode="wait"
    >
      <motion.span
        key={uniqueKey}
        variants={customeVariants ? customeVariants : opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
        className={spanStyle ? spanStyle : h1DefaultStyle}
      >
        {label}
      </motion.span>
    </AnimatePresence>
  );
};

export default AnimatedSpanHeader;
