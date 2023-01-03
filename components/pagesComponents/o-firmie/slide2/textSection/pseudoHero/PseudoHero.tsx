import React from 'react';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { tailwindStyles } from '../../../../../../data/_styleData';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};

/**----------------------------------------------------------------------------------**/
/**
 * __remark__1: initial={false} from <TextSection>'s "AnimatePresence" cancels "initial" in <motion.h1>
 * __remark__1: using <AnimatePresence initial={true}> we can preserve / restore "initial" in <motion.h1>
 */
const PseudoHero: React.FunctionComponent<{ slideNumber: number }> = ({
  slideNumber,
}) => {
  /**JSX**/
  return (
    <AnimatePresence initial={true}>
      {slideNumber === 0 && (
        <div className="flex flex-col justify-end items-start md:justify-center lg:justify-center inner-px sm:inner-px-md pt-[62px]  lg:pb-0 w-full h-full">
          <div className="flex justify-start items-end lg:pb-0 z-[10] ">
            <div className=" overflow-hidden">
              <motion.h1
                className=" tracking-[0.25rem] disable "
                variants={variants}
                initial="initial"
                animate="animate"
              >
                <span
                  className={`text-light text-left ${tailwindStyles.pseudoHeroH1Sizes}`}
                >
                  Elektryka
                </span>{' '}
                <br />
                <span
                  //  className=" text-light text-right text-[2rem]  leading-[2rem] sm:text-[3rem]  sm:leading-[3rem] lg:text-[3.6rem]  lg:leading-[3.6rem] xl:text-[4rem]  xl:leading-[5rem]"
                  className={`text-light text-left ${tailwindStyles.pseudoHeroH1Sizes}`}
                >
                  przemysłowa
                </span>
              </motion.h1>
            </div>
          </div>
          <div className="flex  justify-end pt-6 z-[1] ">
            <div className="overflow-hidden">
              <motion.p
                // className="text-[1rem] text-dark text-right leading-[2rem] uppercase bg-corpo px-4 py-1 rounded-sm disable"
                // className="text-[0.75rem] xxs:text-[1rem] md:text-[1.5rem] text-dark text-left xxs:tracking-[0.2rem] bg-corpo px-4 py-1 rounded-sm disable"
                className="text-light text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.875rem] tracking-widest uppercase bg-corpo px-4 py-1 rounded-sm disable pointer-events-auto cursor-pointer"
                variants={variants}
                initial="initial"
                animate="animate"
              >
                Zobacz pełną ofertę
              </motion.p>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PseudoHero;
