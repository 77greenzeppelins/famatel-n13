import React from 'react';
/**Components**/
import H1Component from '../../../../_basicComponents/componentH1/H1Component';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  open: { opacity: 1, height: 'auto', scaleY: 1 },
  collapsed: { opacity: 0, height: 0, scaleY: 0 },
};

/**-----------------------------------------------------**/
const SectionContent: React.FunctionComponent<{
  headerIndex: number;
  expanded: boolean | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}> = ({ headerIndex, expanded, setExpanded }) => {
  /**...**/
  const isOpen = headerIndex === expanded;
  console.log('headerIndex', headerIndex);
  console.log('expanded', expanded);
  console.log('isOpen', isOpen);

  /**JSX**/
  return (
    <>
      {/* <div className="h-[1000px]">1000px</div> */}
      <button
        className="bg-vB"
        onClick={() => setExpanded(isOpen ? false : headerIndex)}
      >
        <H1Component
          text={['Szybki', 'podgląd', 'kategorii']}
          variantH="custome"
          customeStyle="text-grey text-left text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem] font-bold tracking-[2px] leading-tight"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="w-full bg-vR"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{
              duration: 0.8,
              //   ease: [0.02, 0.02, 0.92, 0.92],
              ease: [0.02, 0.02, 0.02, 0.02],
            }}
            //___[0.04, 0.62, 0.23, 0.98]
          >
            <motion.div
              className="w-full h-[1800px] bg-vB"
              //   variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              //   transition={{ duration: 0.8 }}
            >
              {' '}
              xxxxxxxxxxxxxxx
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
      {/* <motion.section
        className="w-full bg-vR"
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
          scaleY: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <div className="w-full h-[800px] bg-vB"> xxxxxxxxxxxxxxx</div>
      </motion.section> */}
    </>
  );
};

export default SectionContent;
