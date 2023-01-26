import React from 'react';
/**Hook Section**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data*/
// import { mainCategories } from '../../../../data/_data';

import { catalogStructureData } from '../../../../data/_catalogStructure_data';

/**----------------------------------------**/
const CategoriesCounter: React.FunctionComponent<{
  currentCategoryIndex: number;
  digitStyle?: string;
  digitContainerStyle?: string;
}> = ({ currentCategoryIndex, digitStyle, digitContainerStyle }) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  /**Basic Data**/
  const digitContainerDefaultStyle = `w-[40px] `;
  const digitDefaultStyle = `  ${
    isLandscape
      ? 'text-[1rem] xs:text-[2rem] sx:text-[3rem] '
      : 'text-[1.5rem] '
  } text-grey text-center`;

  /**JSX**/
  return (
    <div className="flex w-full disable">
      <div
        className={`${digitContainerStyle} ? ${digitContainerStyle} : ${digitContainerDefaultStyle}`}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentCategoryIndex}
            className={digitStyle ? digitStyle : digitDefaultStyle}
            // initial={{ scaleY: 0 }}
            // animate={{ scaleY: 1, transition: { delay: 0.0, duration: 0.4 } }}
            // exit={{
            //   scaleY: 0,
            //   transition: { duration: 0.4 },
            // }}

            variants={opacityScaleYVariants}
            initial="from"
            animate="to"
            exit="exit"
          >{`${currentCategoryIndex + 1 < 10 ? '0' : ''}${
            currentCategoryIndex + 1
          } `}</motion.p>
        </AnimatePresence>
      </div>
      <div
        className={
          digitContainerStyle ? digitContainerStyle : digitContainerDefaultStyle
        }
      >
        <p className={digitStyle ? digitStyle : digitDefaultStyle}>/</p>
      </div>
      <div
        className={
          digitContainerStyle ? digitContainerStyle : digitContainerDefaultStyle
        }
      >
        <p className={digitStyle ? digitStyle : digitDefaultStyle}>
          {catalogStructureData.length - 1}
        </p>
      </div>
    </div>
  );
};

export default CategoriesCounter;
