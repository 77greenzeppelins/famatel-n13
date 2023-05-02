import React from 'react';
/** */
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';
/**HardCoded Staff*/
const spanDefaultStyle = ` text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight group-hover:text-light ease-in duration-[0.4s] delay-[0.1s] flex items-center w-fit disable-soft px-4`;
const paragraphDefaultStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';

/**TS**/
interface Props {
  uniqueKey: number; // for instance: category index
  textsArray: string[];
  customeVariants?: {};
  spanStyle?: string;
}

/*
used in: various types of links
*/
/**---------------------------**/
const AnimatedParagraph = ({
  uniqueKey,
  textsArray,
  customeVariants,
  spanStyle,
}: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={uniqueKey}
        variants={customeVariants ? customeVariants : opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
        className={spanStyle ? spanStyle : paragraphDefaultStyle}
      >
        {textsArray[uniqueKey]}
      </motion.p>
    </AnimatePresence>
  );
};

export default AnimatedParagraph;
