import React from 'react';
/**Components**/
import LinkToKategorieProduktów from './linkToKategorieProduktow/LinkToKategorieProduktów';
import MainText from './linkToKategorieProduktow/mainText/MainText';
/**Hoof Staff**/
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';

import { textSectionChildrenVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};
/**Basic Data**/
import { tailwindStyles } from '../../../../../../data/_styleData';

/**----------------------------------------------------------------------------------**/
/**
 * __remark__1: initial={false} from <TextSection>'s "AnimatePresence" cancels "initial" in <motion.h1>
 * __remark__1: using <AnimatePresence initial={true}> we can preserve / restore "initial" in <motion.h1>
 */
const TextSectionContent: React.FunctionComponent<{ slideNumber: number }> = ({
  slideNumber,
}) => {
  /**Hook For Special Case*/
  const { height } = useWindowSize({ screensNumber: 1 });
  const layoutCondition = height < 550;
  /**JSX**/
  return (
    // <AnimatePresence initial={true}>
    //   {slideNumber === 0 && (
    <div
      className={`flex flex-col justify-end items-start md:justify-center ${
        layoutCondition ? 'md:pb-0 lg:pb-0' : 'md:pb-[50%] lg:pb-[20%] xl:pb-0'
      }  w-full h-full`}
    >
      <motion.div
        className="flex justify-start items-end lg:pb-0"
        // className="w-[45%] h-[20%] bg-corpo"
        variants={textSectionChildrenVariants}
      >
        <MainText slideNumber={slideNumber} />
        {/* <div className=" overflow-hidden">
          <motion.h1
            className=" tracking-[0.125rem] leading-tight disable "
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
              // className={`text-light text-left ${tailwindStyles.pseudoHeroH1Sizes}`}
              className={`text-light text-left text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text-[3.5rem]`}
            >
              przemysłowa
            </span>
          </motion.h1>
        </div> */}
      </motion.div>
      <motion.div className="fc pt-6" variants={textSectionChildrenVariants}>
        <LinkToKategorieProduktów />
      </motion.div>
    </div>
    //   )}
    // </AnimatePresence>
  );
};

export default TextSectionContent;
