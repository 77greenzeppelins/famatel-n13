import React from 'react';
/** */
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';

const h1DefaultStyle = `text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight group-hover:text-light ease-in duration-[0.4s] delay-[0.1s] flex items-center w-fit max-w-[750px] h-[72px] lg:h-[60px] disable-soft px-4`;

interface Props {
  uniqueKey: number;
  label: string;
  customeVariants?: {};
  pStyle?: string;
}

const AnimatedPHeader = ({
  uniqueKey,
  label,
  customeVariants,
  pStyle,
}: Props) => {
  return (
    <AnimatePresence
      //  initial={true}
      mode="wait"
    >
      <motion.p
        key={uniqueKey}
        // className=" disable-soft xl:w-[90%] xxl:w-[70%] xxxl:w-[55%]"
        variants={customeVariants ? customeVariants : opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
        className={pStyle ? pStyle : h1DefaultStyle}
      >
        {label}
      </motion.p>
    </AnimatePresence>
  );
};

export default AnimatedPHeader;
