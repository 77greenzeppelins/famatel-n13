import React from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import ProductDescription from '../section_1/productDescription/ProductDescription';
import TextForEntry from './TextForEntry/TextForEntry';

/**---------------------------------------------**/
const Section_2: React.FunctionComponent<{
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSection_2_Open, setIsSection_2_Open }) => {
  /**JSX**/
  return (
    <AnimatePresence>
      {isSection_2_Open && (
        <motion.div className="flex flex-col ">
          <div className="hidden md:flex w-full md:h-[8vh] h-[14vh] bg-dark" />
          <TextForEntry />
          <div className="flex w-full d:h-[8vh] h-[14vh] bg-dark" />
          <ProductDescription
            isProductDescriptionOpen={isSection_2_Open}
            productDescriptionOpener={setIsSection_2_Open}
          />
          <div className="h-screen bg-dark" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Section_2;