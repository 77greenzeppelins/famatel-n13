import React from 'react';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { duration: 0.8 } },
};

/**---------------------------------------------------------**/
const TextSection = () => {
  return (
    <>
      <div className="flex h-[50%] justify-end items-end bg-dark pb-6 z-[10] ">
        <div className=" overflow-hidden">
          <motion.h1
            className=" text-right uppercase disable"
            variants={variants}
            initial="initial"
            animate="animate"
            //   initial={{ y: '-100%' }}
            //   animate={{ y: 0, transition: { duration: 0.8 } }}
          >
            <span className="text-[6rem] text-right leading-[7rem]">
              Elektryka
            </span>{' '}
            <br />
            <span className="text-[4rem] text-right leading-[5rem]">
              Przemysłowa
            </span>
          </motion.h1>
        </div>
      </div>
      <div className="flex h-[50%] justify-end  bg-dark pt-6 z-[1]">
        <div className=" overflow-hidden">
          <motion.p
            className="text-[2rem] text-grey text-right leading-[2rem] disable"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            Zobacz pełną ofertę
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default TextSection;
