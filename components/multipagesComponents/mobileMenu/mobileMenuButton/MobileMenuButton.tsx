import React, { Dispatch, SetStateAction } from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import HamburgerIcon from '../../../SVG/icons/HamburgerIcon';
import XMarkIcon from '../../../SVG/icons/XmarkIcon';

/**---------------------------------**/
const MobileMenuButton: React.FunctionComponent<{
  mobileMenuOpener: Dispatch<SetStateAction<boolean>>;
  mobileMenuState: boolean;
}> = ({ mobileMenuOpener, mobileMenuState }) => {
  /**...**/
  //   const onClickHandler = () => {
  //     mobileMenuOpener(prev => !prev);
  //   };
  /**JSX**/
  return (
    <AnimatePresence>
      {mobileMenuState ? (
        <motion.button
          onClick={() => mobileMenuOpener(prev => !prev)}
          className="fc origin-center w-6 no-sparkling"
          //   animate={{
          //     rotateX: isClicked ? 180 : 0,
          //     // scale: isClicked ? [0, 0, 1] : [0, 0, 1],
          //     transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
          //   }}
        >
          <XMarkIcon />
        </motion.button>
      ) : (
        <motion.button
          onClick={() => mobileMenuOpener(prev => !prev)}
          className="fc origin-center w-6 no-sparkling"
          //   animate={{
          //     rotateX: isClicked ? 180 : 0,
          //     // scale: isClicked ? [0, 0, 1] : [0, 0, 1],
          //     transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
          //   }}
        >
          <HamburgerIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuButton;
