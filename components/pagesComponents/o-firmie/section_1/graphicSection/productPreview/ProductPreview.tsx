import React from 'react';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';

const ProductPreview: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
}> = ({ isProductDescriptionOpen }) => {
  //   console.log(
  //     'ProductPreview / isProductDescriptionOpen',
  //     isProductDescriptionOpen
  //   );
  return (
    <AnimatePresence>
      {isProductDescriptionOpen && (
        <motion.div
          className="absolute inset-0 backdrop-grayscale-100 "
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductPreview;
