import React from 'react';
/**Components**/
import ProductDescription from './productDescription/ProductDescription';
import PseudoHero from './pseudoHero/PseudoHero';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  initial: { x: '-110%', transition: { duration: 0.6, ease: 'easeInOut' } },
  animate: { x: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

/**----------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  slideNumber: number;
}> = ({ isProductDescriptionOpen, slideNumber }) => {
  /**Switch**/

  const createComponent = (props: boolean) => {
    switch (props) {
      case true:
        return <ProductDescription />;
      case false:
        return <PseudoHero slideNumber={slideNumber} />;
    }
  };
  /**JSX**/
  return (
    <div
      data-component="TextSection-Slide1__container"
      className="relative w-full h-full overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={Number(isProductDescriptionOpen)}
          className="flex w-full h-full"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
          // initial={{ x: '-110%' }}
          // animate={{ x: 0 }}
          // exit={{ x: '-110% ' }}
          // transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {createComponent(isProductDescriptionOpen)}
        </motion.div>
      </AnimatePresence>
    </div>
    // <div className="flex justify-center flex-col px-[2%] md:px-[60px] w-full max-w-[80%] sm:max-w-[1000px] h-full ">
    //   <h1 className=" text-light text-left  text-[3rem]  leading-[3rem] md:text-[4rem] md:leading-[4rem]  xl:text-[5rem]  xl:leading-[5rem]">
    //     Twój nowy projekt
    //   </h1>
    //   <div className="overflow-hidden">
    //     <motion.p
    //       className="text-[1rem] md:text-[1.5rem] text-grey text-left tracking-[0.2rem]  "
    //       variants={variants}
    //       initial="initial"
    //       animate="animate"
    //     >
    //       potrzebuje optymalnego wsparcia technicznego.{' '}
    //       <span className="text-light"> Jesteśmy gotowi je zapewnić.</span>
    //     </motion.p>
    //   </div>
    // </div>
  );
};

export default TextSection;
