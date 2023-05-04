import React from 'react';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { catalogStructureData } from '../../../../../../data/_catalogStructure_data';

/**--------------------------------**/
const SubCategoriesModule: React.FC<{ categoryIndex: number }> = ({
  categoryIndex,
}) => {
  /** Data Processing step__1 **/
  const subCategoriesNamesArray = catalogStructureData.map(
    item => item.subCategoriesNames
  );

  /** Data Processing step__2 **/
  const currentCategoriesParagraph = subCategoriesNamesArray[categoryIndex].map(
    (str, j) => (
      <motion.span
        key={`${j}`}
        variants={opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
      >
        {`${str} \u00A0${
          j < subCategoriesNamesArray[categoryIndex].length - 1 ? ' | ' : ''
        }\u00A0\u00A0`}
      </motion.span>
    )
  );

  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      <motion.p
        className="p-small text-left text-grey"
        key={categoryIndex}
        variants={opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
      >
        {currentCategoriesParagraph}
      </motion.p>
    </AnimatePresence>
  );
};

export default SubCategoriesModule;

// const subCategorieStringsArray = subCategoriesNamesArray.map((subArray, i) => (
//   <AnimatePresence key={i}>
//     {subArray.map((str, j) => (
//       <motion.span
//         key={`${i}-${j}`}
//         variants={opacityScaleYVariants}
//         initial="from"
//         animate="to"
//         exit="exit"
//       >
//         {`${str}\u00A0\u00A0${
//           j < subArray.length - 1 ? ' | ' : ''
//         }\u00A0\u00A0`}
//       </motion.span>
//     ))}
//   </AnimatePresence>
// ));
