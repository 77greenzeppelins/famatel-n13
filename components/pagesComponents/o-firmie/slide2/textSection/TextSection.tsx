import React from 'react';
/**Hook Staf**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};

/**----------------------------------------------------------**/
const TextSection = () => {
  return (
    <div className="flex justify-center flex-col px-[2%] md:px-[60px] w-full max-w-[1000px] h-full ">
      <h1 className=" text-light text-left  text-[3rem]  leading-[3rem] md:text-[4rem] md:leading-[4rem]  xl:text-[5rem]  xl:leading-[5rem]">
        Twój nowy projekt
      </h1>
      <div className="overflow-hidden">
        <motion.p
          className="text-[1rem] md:text-[1.5rem] text-grey text-left tracking-[0.25rem]  "
          variants={variants}
          initial="initial"
          animate="animate"
        >
          potrzebuje optymalnego wsparcia technicznego. Jesteśmy gotowi je
          zapewnić.
        </motion.p>
      </div>
    </div>
  );
};

export default TextSection;
