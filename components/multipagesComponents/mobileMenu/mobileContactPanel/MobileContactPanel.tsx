import React from 'react';
//___
import { MapPinIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import { corpoColors } from '../../../../data/_data';

/**-------------------------------------------------------**/
const MobileContactPanel: React.FunctionComponent<{
  isMobileMenuOpen: boolean;
  maxW: number;
  minH: number;
}> = ({ isMobileMenuOpen, maxW, minH }) => {
  const { width, height } = useWindowSize({ screensNumber: 1 });

  const mountingCondition = isMobileMenuOpen && width < maxW && height > minH;

  /**JSX**/
  return (
    <AnimatePresence>
      {mountingCondition && (
        <motion.div
          key={isMobileMenuOpen.toString()}
          // data-layout="wrapper_for_DropDownMenuHolder"
          className="fc fixed bottom-0 w-screen h-[100px] z-[500]"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            //   className="absolute bottom-0 p-y-1 w-full h-[20%] "
            className="w-full h-full"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: '100%', transition: { duration: 1 } }}
          >
            <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr] gap-[0.125rem]">
              <div className="fc w-full h-full p-1">
                <motion.div
                  className="fc w-full h-full border"
                  whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
                >
                  <a
                    href="mailto:77greenzeppelins@gmail.com"
                    className="fc w-full h-full no-sparkling"
                  >
                    <EnvelopeIcon className="h-[50px] w-[50px] text-grey" />
                  </a>
                </motion.div>
              </div>
              <div className="fc p-1 bg-corpo">
                <div className="" />
                {/* <MapOpener>
                  <MapPinIcon className="h-[50px] w-[50px] text-dark" />
                </MapOpener> */}
              </div>
              <div className="fc w-full h-full p-1">
                <motion.div
                  className="fc w-full h-full border"
                  whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
                >
                  <a
                    href="tel:798-905-558"
                    className="fc w-full h-full no-sparkling"
                  >
                    <PhoneIcon className="h-[50px] w-[50px] text-grey" />
                  </a>
                </motion.div>
              </div>
              {/* <div className="fc p-1">
                <div className="bg-corpo" />
                <MapOpener>
                  <MapPinIcon className="h-[50px] w-[50px] text-dark" />
                </MapOpener>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileContactPanel;
