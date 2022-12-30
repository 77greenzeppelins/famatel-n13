import React from 'react';
/**Hook Staf**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};

/**---------------------------------------------------------**/
const TextSection = () => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div className="flex flex-col justify-end sm:justify-start  px-[2%] md:px-[60px] sm:pb-16 w-full h-full ">
      <div className="flex sm:h-[50%] justify-end items-end  lg:pb-0 z-[10] ">
        <div className=" overflow-hidden">
          <motion.h1
            className=" text-right uppercase disable"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <span className=" text-light text-right text-[3rem]  leading-[3rem] sm:text-[4rem]  sm:leading-[4rem]  xl:text-[6rem]  xl:leading-[6rem]">
              Elektryka
            </span>{' '}
            <br />
            <span className=" text-light text-right text-[2rem]  leading-[2rem] sm:text-[3rem]  sm:leading-[3rem] xl:text-[4rem]  xl:leading-[5rem]">
              Przemysłowa
            </span>
          </motion.h1>
        </div>
      </div>
      <div className="flex sm:h-[50%] justify-end pt-6 z-[1] ">
        <div className="overflow-hidden">
          <motion.p
            className="text-[1rem] text-dark text-right leading-[2rem] uppercase bg-corpo px-4 py-1 rounded-sm disable"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            Zobacz pełną ofertę
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
