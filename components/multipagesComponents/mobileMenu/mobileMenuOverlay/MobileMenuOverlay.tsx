import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { mainPages } from '../../../../data/_data';
import MobileNavLink from './mobileNavLink/MobileNavLink';

const MobileMenuOverlay: React.FunctionComponent<{
  mobileMenuOpener: Dispatch<SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  roadPrompt: boolean;
}> = ({ isMobileMenuOpen, mobileMenuOpener, setRoadPrompt, roadPrompt }) => {
  const router = useRouter();
  //
  useEffect(() => {
    return () => {
      mobileMenuOpener(false);
    };
  }, [mobileMenuOpener, router.asPath]);

  useEffect(() => {
    !isMobileMenuOpen && setRoadPrompt(false);
  }, [isMobileMenuOpen, setRoadPrompt]);
  /**JSX*/
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key={isMobileMenuOpen.toString()}
          // data-layout="wrapper_for_DropDownMenuHolder"
          className="fixed left-0 right-0 top-[50px] bottom-0 z-[500] bg-dark"
          initial={{
            //  opacity: 0.9,
            x: '100%',
          }}
          animate={{
            // opacity: 1,
            x: 0,
          }}
          exit={{ opacity: 0.9, x: '100%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative fc w-full h-full ">
            <ul className="flex flex-col">
              {mainPages.map(({ arrayIndex, label, url }, i) => {
                //___I don't want to duplicate "produkty"
                return arrayIndex === 1 ? null : (
                  <MobileNavLink
                    key={arrayIndex}
                    uniqueKey={arrayIndex}
                    url={url}
                    label={label}
                    // hasDropDownMenu={''}
                  ></MobileNavLink>
                );
              })}
            </ul>
          </div>
          <motion.div
            className="absolute inset-0"
            animate={{ x: roadPrompt ? 0 : '100%' }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="fc w-full h-full bg-greyShade2"> </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
