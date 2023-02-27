import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

const MobileMenuOverlay: React.FunctionComponent<{
  mobileMenuOpener: Dispatch<SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}> = ({ isMobileMenuOpen, mobileMenuOpener }) => {
  const router = useRouter();
  //
  useEffect(() => {
    return () => {
      mobileMenuOpener(false);
    };
  }, [mobileMenuOpener, router.asPath]);
  /**JSX*/
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key={isMobileMenuOpen.toString()}
          // data-layout="wrapper_for_DropDownMenuHolder"
          className="fixed left-0 right-0 top-[50px] bottom-[10vh] -z-[5] bg-vB"
          // animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          animate={{ scaleX: isMobileMenuOpen ? 100 : 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="w-full h-full " />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
