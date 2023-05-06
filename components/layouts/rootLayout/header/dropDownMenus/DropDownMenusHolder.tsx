import React from 'react';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { overlayContainerVariants } from '../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { dropDownMenusArray } from './_dropDownMenusHolder_data';

/*******************************************************************************/
const DropDownMenusHolder = ({
  isHovered,
  label,
  hasDropDownMenu,
}: {
  isHovered: boolean;
  label: string;
  hasDropDownMenu: boolean;
}) => {
  /**JSX**/
  return (
    <>
      <AnimatePresence mode="wait">
        {isHovered && hasDropDownMenu && (
          /*
          linkState.condition
          this condition can be moved to "if (linkState.label === id)"...
          */
          <motion.div
            id="DropDownMenusHolder__container"
            key={label}
            className="fc w-screen h-screen bg-dark pointer-events-auto"
            variants={overlayContainerVariants}
            animate="animate"
            initial="initial"
            exit="initial"
          >
            {/* {dropDownMenusArray.map(({ id, Component }) => {
              if (label === id) {
                return (
                  <React.Fragment key={id}>
                    <div className={`w-[98%] h-[80%] xl:h-[90%] fc bg-dark`}>
                      <Component />
                    </div>
                  </React.Fragment>
                );
              }
            })} */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropDownMenusHolder;
