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
          className="fixed left-0 right-0 top-[50px] bottom-0 z-[500] bg-dark"
          initial={{ opacity: 0.9, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.9, x: '100%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <p className="text-grey text-2xl">{isMobileMenuOpen.toString()}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
