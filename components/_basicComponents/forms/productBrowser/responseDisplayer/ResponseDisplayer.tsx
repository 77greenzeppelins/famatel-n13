import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

/**Basic Data**/
import { story } from '../../../../../data/_data';
import ProductPageDisplayer from './productPageDisplayer/ProductPageDisplayer';

/**TS**/
interface Props {
  wantedModel: string | null;
  submitCount: number;
}
/**------------------------------**/
const ResponseDisplayer = ({ wantedModel, submitCount }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {submitCount ? (
        <motion.div className="flex flex-col items-center w-full gap-x-10 sm:flex-row ">
          <div className="flex justify-center w-full sm:w-[500px] sm:justify-start">
            <p className="p-medium text-grey">{story.productBrowser.header2}</p>
          </div>
          <div>
            <ProductPageDisplayer wantedModel={wantedModel} />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ResponseDisplayer;
