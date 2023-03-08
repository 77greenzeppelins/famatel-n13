import React, { useEffect } from 'react';
/**Components**/
import RoadPrompt from './roadPrompt/RoadPrompt';
import PseudoButton from './pseudoButton/PseudoButton';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Hook Staff*/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Basic Data**/
import { linksToInstantContactData } from '../../../../data/_data';

/**-------------------------------------------------------**/
const MobileContactPanel: React.FunctionComponent<{
  setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  maxW: number;
  minH: number;
}> = ({ setRoadPrompt, isMobileMenuOpen, maxW, minH }) => {
  /**Hook Section**/
  const { width, height } = useWindowSize({ screensNumber: 1 });
  /**Mounting Condition**/
  const mountingCondition = isMobileMenuOpen && width < maxW && height > minH;

  // useEffect(() => {
  //   mountingCondition && console.log('.............MobileContactPanel');
  // }, [isMobileMenuOpen]);

  /**JSX**/
  return (
    <AnimatePresence>
      {mountingCondition && (
        <motion.div
          datat-component="MobileContactPanel__container"
          key={isMobileMenuOpen.toString()}
          className={`fixed fc bottom-0 w-screen h-[80px] z-[550] bg-dark`}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="w-full h-[50px]"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: '100%', transition: { duration: 0.4 } }}
          >
            <div className="w-full h-full grid grid-cols-[3fr_5fr_3fr] gap-[0.125rem]">
              <div className="fc">
                <PseudoButton>
                  <a
                    href={linksToInstantContactData.mail}
                    className="fc w-full h-full no-sparkling"
                  >
                    <EnvelopeIcon className="h-[40px] w-[40px] text-grey" />
                  </a>
                </PseudoButton>
              </div>
              <div className="fc">
                <PseudoButton diveStyle="fc flex-col h-full border-[0.5px] border-greyShade1">
                  <RoadPrompt setRoadPrompt={setRoadPrompt} />
                  <div className="px-2">
                    <p className="p-small text-grey">Wskazówki dojazdu</p>
                  </div>
                </PseudoButton>
              </div>
              <div className="fc ">
                <PseudoButton>
                  <a
                    href={linksToInstantContactData.mobile}
                    className="fc w-full h-full no-sparkling"
                  >
                    <PhoneIcon className="h-[40px] w-[40px] text-grey" />
                  </a>
                </PseudoButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileContactPanel;
