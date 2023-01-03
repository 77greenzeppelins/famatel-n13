import React from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { mainCategories } from '../../../../../data/_data';

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  /**JSX**/
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute fc inset-0"
        >
          <p className="text-light text-3xl">
            {mainCategories[currentCategory].fullName}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSection;
