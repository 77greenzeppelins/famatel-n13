import React from 'react';
/**Components**/
import ProductDescription from './productDescription/ProductDescription';
import PseudoHero from './pseudoHero/PseudoHero';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';

/**---------------------------------------------------------**/
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
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={Number(isProductDescriptionOpen)}
          initial={{ x: '110%' }}
          animate={{ x: 0 }}
          exit={{ x: '110% ' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {createComponent(isProductDescriptionOpen)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSection;
