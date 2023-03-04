import React from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import ProductDescription from '../section_1/productDescription/ProductDescription';

const Section_2: React.FunctionComponent<{
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSection_2_Open, setIsSection_2_Open }) => {
  return (
    <AnimatePresence>
      {isSection_2_Open && (
        <motion.div className="min-h-[50vh]">
          <div className="hidden xl:flex w-full h-[10vh]" />
          <ProductDescription
            isProductDescriptionOpen={isSection_2_Open}
            productDescriptionOpener={setIsSection_2_Open}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Section_2;
