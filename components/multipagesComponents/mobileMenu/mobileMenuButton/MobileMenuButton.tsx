import React, { Dispatch, SetStateAction } from 'react';
/**Components**/
import ArrowButton from '../../../_basicComponents/buttons/arrowButton/ArrowButton';
import HamburgerIcon from '../../../SVG/icons/HamburgerIcon';
import XMarkIcon from '../../../SVG/icons/XmarkIcon';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';

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
      <div
        data-component="MobileMenuButton__container"
        className={` fc lg:hidden fixed w-screen top-0 left-0 right-0 h-[50px] z-[600] bg-transparent pointer-events-none`}
      >
        <div className="flex items-center justify-end h-full w-full inner-px-md-xl-xxl ">
          {mobileMenuState ? (
            <ArrowButton
              onClickHandler={() => mobileMenuOpener(prev => !prev)}
              buttonStyle="relative fc w-6 h-6 focus:outline-none disable group "
            >
              <XMarkIcon />
            </ArrowButton>
          ) : (
            <ArrowButton
              onClickHandler={() => mobileMenuOpener(prev => !prev)}
              buttonStyle="relative fc w-6 h-6 focus:outline-none disable group "
            >
              <HamburgerIcon />
            </ArrowButton>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default MobileMenuButton;

// <motion.button
//   onClick={() => mobileMenuOpener(prev => !prev)}
//   className="fc origin-center w-6 no-sparkling pointer-events-auto"
//   //   animate={{
//   //     rotateX: isClicked ? 180 : 0,
//   //     // scale: isClicked ? [0, 0, 1] : [0, 0, 1],
//   //     transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
//   //   }}
// >
//
// </motion.button>
// <motion.button
//   onClick={() => mobileMenuOpener(prev => !prev)}
//   className="fc origin-center w-6 no-sparkling pointer-events-auto"
//   //   animate={{
//   //     rotateX: isClicked ? 180 : 0,
//   //     // scale: isClicked ? [0, 0, 1] : [0, 0, 1],
//   //     transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
//   //   }}
// >
//   <HamburgerIcon />
// </motion.button>
