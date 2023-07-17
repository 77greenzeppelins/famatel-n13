import React, { Dispatch, SetStateAction, useEffect } from 'react';
/**Components**/
import ArrowButton from '../../../_basicComponents/buttons/arrowButton/ArrowButton';
import HamburgerIcon from '../../../SVG/icons/HamburgerIcon';
import XMarkIcon from '../../../SVG/icons/XmarkIcon';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { headerVariants } from '../../../../utils/framerMotion/framerMotionUtils';
import { corpoColors } from '../../../../data/_data';

/**-------------------------------------------------------**/
const MobileMenuButton: React.FunctionComponent<{
  mobileMenuOpener: Dispatch<SetStateAction<boolean>>;
  mobileMenuState: boolean;
}> = ({ mobileMenuOpener, mobileMenuState }) => {
  /**...**/
  useEffect(() => {
    //___Access the document.body.style object via window
    const bodyStyle = window.document.body.style;
    mobileMenuState
      ? (bodyStyle.overflow = 'hidden')
      : (bodyStyle.overflow = 'auto');
  }, [mobileMenuState]);

  /**JSX**/
  return (
    <AnimatePresence>
      <aside
        data-component="MobileMenuButton__container"
        className={` fc lg:hidden fixed w-screen top-0 left-0 right-0 h-[64px] lg:h-[78px] z-[600] bg-transparent pointer-events-none`}
      >
        <motion.div
          className="flex items-center justify-end w-full h-full inner-px-md-xl-xxl"
          variants={headerVariants}
          initial="from"
          animate="to"
        >
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
              <HamburgerIcon strokeColor={corpoColors.dark} strokeWidth={1.5} />
            </ArrowButton>
          )}
        </motion.div>
      </aside>
    </AnimatePresence>
  );
};

export default MobileMenuButton;

// <motion.button
//   onClick={() => mobileMenuOpener(prev => !prev)}
//   className="w-6 origin-center pointer-events-auto fc no-sparkling"
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
//   className="w-6 origin-center pointer-events-auto fc no-sparkling"
//   //   animate={{
//   //     rotateX: isClicked ? 180 : 0,
//   //     // scale: isClicked ? [0, 0, 1] : [0, 0, 1],
//   //     transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
//   //   }}
// >
//   <HamburgerIcon />
// </motion.button>
