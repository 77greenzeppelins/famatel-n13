import React, { Dispatch, ReactNode, SetStateAction } from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import {
  overlayClosebuttonVariants,
  overlayVariants,
} from '../../../../utils/framerMotion/framerMotionUtils';
// import CloseButton from '../../../pagesComponents/kategorie-produktow/slider/overlay/closeButton/CloseButton';
/**Basic Data**/
const defaultContainerStyle =
  'absolute flex flex-col inset-0 inner-px-md-lg pb-[60px] bg-dark';
const defaultButtonContainerStyle =
  'absolute fc bottom-0 left-0 right-0 h-[60px] pb-2';
/**------------------------------------------------------**/
const FullScreenOverlay: React.FunctionComponent<{
  currentCategory?: number;
  isPreviewOpen: boolean;
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  //___
  containerStyle?: string;
  buttonContainerStyle?: string;
}> = ({
  isPreviewOpen,
  setIsPreviewOpen,
  currentCategory,
  children,
  containerStyle,
  buttonContainerStyle,
}) => {
  /**JSX**/
  return (
    <AnimatePresence initial={true}>
      {isPreviewOpen && (
        <motion.div
          data-component="FullScreenOverlay__container"
          key={Number(isPreviewOpen)}
          className={containerStyle ? containerStyle : defaultContainerStyle}
          variants={overlayVariants}
          initial="from"
          animate="to"
          exit="exit"
        >
          {children}
          <motion.div
            className={
              buttonContainerStyle
                ? buttonContainerStyle
                : defaultButtonContainerStyle
            }
            variants={overlayClosebuttonVariants}
          >
            {/* <CloseButton setIsPreviewOpen={setIsPreviewOpen} /> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenOverlay;
