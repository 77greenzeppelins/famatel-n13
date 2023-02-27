/*Components*/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
/*FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
/*Basic Data*/

/******************************************************************************/
const Header = () => {
  /**Hook Section*/
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**JSX*/
  return (
    <header
      data-component="Header__container"
      className={`fixed w-screen top-0 left-0 right-0 h-[50px] z-[500] `}
    >
      <div className="h-full w-full inner-px-md-lg z-[10]">
        <div className="relative w-full h-full">
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-full border-b border-greyShade1"
            initial={{ width: '0%', opacity: 0 }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          />

          <motion.div
            className="flex items-center justify-between w-full h-full"
            initial={{ y: '-100%' }}
            animate={{ y: 0, transition: { duration: 0.8 } }}
          >
            <div className="origin-left h-full flex items-center  pb-1">
              <HeaderLogoLink />
            </div>
            <div className="flex items-center justify-end h-full w-full ">
              <NavForMainPages
                mobileMenuOpener={setIsMobileMenuOpen}
                mobileMenuState={isMobileMenuOpen}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key={isMobileMenuOpen.toString()}
            data-layout="wrapper_for_DropDownMenuHolder"
            className="fixed left-0 right-0 top-[50px] bottom-[10vh] -z-[5]"
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          >
            <div className="w-full h-full bg-vY" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
