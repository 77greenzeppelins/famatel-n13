import React from 'react';
/**Components**/
import ModuleModelNumber from './module1/ModuleModelNumber';
import ProductDescription from './productDescription/ProductDescription';
import ModuleYearsNumber from './module2/ModuleYearsNumber';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import ModuleCatNumber from './module3/ModuleCatNumber';
import WordMap from './wordMap/WordMap';
import ModuleCountriesNumber from './module2.2/ModuleCountriesNumber';
import ModuleBusinessNumber from './module2.4/ModuleBusinessNumber';

/**---------------------------------------------**/
const Section_2: React.FunctionComponent<{
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSection_2_Open, setIsSection_2_Open }) => {
  /**JSX**/
  return (
    <AnimatePresence>
      {isSection_2_Open && (
        <>
          <div className="hidden md:flex w-full md:h-[8vh] h-[14vh] bg-dark" />
          <motion.div className="flex flex-col gap-y-20 ">
            <ModuleModelNumber />
            <ProductDescription
              isProductDescriptionOpen={isSection_2_Open}
              productDescriptionOpener={setIsSection_2_Open}
            />
            <ModuleYearsNumber />
            <ModuleCountriesNumber />
            <ModuleBusinessNumber />
            <WordMap />
            <ModuleCatNumber />
            <div className="h-[10vh] bg-dark" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Section_2;
