import React from 'react';
/**Components**/
import RoadPrompt from './roadPrompt/RoadPrompt';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Hook Staff*/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
/**Basic Data**/
import { corpoColors, linksToInstantContactData } from '../../../../data/_data';

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

  /**JSX**/
  return (
    <AnimatePresence>
      {mountingCondition && (
        <motion.div
          datat-component="MobileContactPanel__container"
          key={isMobileMenuOpen.toString()}
          className={`fixed fc bottom-0 w-screen h-[60px] z-[550] bg-dark`}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="w-full h-[50px]"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: '100%', transition: { duration: 1 } }}
          >
            <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr] gap-[0.125rem]">
              <div
                className="fc"
                //___p-1
              >
                <motion.div
                  className="fc aspect-square h-full border"
                  whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
                >
                  <a
                    href={linksToInstantContactData.mail}
                    className="fc w-full h-full no-sparkling"
                  >
                    <EnvelopeIcon className="h-[40px] w-[40px] text-grey" />
                  </a>
                </motion.div>
              </div>
              <div className="fc ">
                <RoadPrompt setRoadPrompt={setRoadPrompt} />
              </div>
              <div className="fc ">
                <motion.div
                  className="fc aspect-square h-full border"
                  whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
                >
                  <a
                    href={linksToInstantContactData.mobile}
                    className="fc w-full h-full no-sparkling"
                  >
                    <PhoneIcon className="h-[40px] w-[40px] text-grey" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileContactPanel;
