import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
/**Componenst**/
import MobileNavLink from './mobileNavLink/MobileNavLink';
import RoadPromptSection from './roadPromptSection/RoadPromptSection';
/**Hooks staff**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import useMeasure from 'react-use-measure';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data*/
import { mainPages } from '../../../../data/_data';

/**Hardcoded Staff**/
const mountingConditionValue = 1024;
const minHeight = 500;

/**-----------------------------------------------------**/
const MobileMenuOverlay: React.FunctionComponent<{
  mobileMenuOpener: Dispatch<SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  roadPrompt: boolean;
}> = ({ isMobileMenuOpen, mobileMenuOpener, setRoadPrompt, roadPrompt }) => {
  /**UseRouter sectioin**/
  const router = useRouter();

  /**UseWindowSize sectioin**/
  const { width } = useWindowSize({ screensNumber: 1 });

  /*Condition
  why: it allows to close <MobileMenuOverlay> when screen width changes; 
  solved bug: without this ifstatement when user opens <MobileMenuOverlay> and inreases the width menu don't close even though "closeButton" disappears 
  */
  const mountingCondition = width >= mountingConditionValue;
  if (mountingCondition) {
    mobileMenuOpener(false);
  }

  /*
  why: when user changes page <MobileMenuOverlay> should be automatically closed
  */
  useEffect(() => {
    return () => {
      mobileMenuOpener(false);
    };
  }, [mobileMenuOpener, router.asPath]);

  /*
  why: when user closes <MobileMenuOverlay> road prompt should return to its initial "position" showing links
  */
  useEffect(() => {
    !isMobileMenuOpen && setRoadPrompt(false);
  }, [isMobileMenuOpen, setRoadPrompt]);

  /*
  why: in case of device rotating or height less then 500px
  */
  const [ref, { height }] = useMeasure();

  /**JSX*/
  return (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <motion.div
          ref={ref}
          data-component="MobileMenuOverlay__container"
          key={isMobileMenuOpen.toString()}
          className={`fixed left-0 right-0 top-0 bottom-0 z-[500] `}
          initial={{ x: '100%' }}
          animate={{
            x: 0,
            transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
          }}
          exit={{
            opacity: 0.9,
            x: '100%',
            transition: { duration: 0.8, delay: 1, ease: 'easeOut' },
          }}
        >
          <div className="relative fc w-full h-full bg-dark inner-px-md-xl-xxl">
            <ul className="flex w-full flex-col gap-[10px] ">
              {mainPages.map(({ arrayIndex, label, url }, i) => {
                return (
                  <MobileNavLink
                    key={arrayIndex}
                    uniqueKey={arrayIndex}
                    url={url}
                    label={label}
                    isLast={arrayIndex === mainPages.length}
                    isSimple={height < minHeight}
                  ></MobileNavLink>
                );
              })}
            </ul>
            <RoadPromptSection roadPrompt={roadPrompt} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
