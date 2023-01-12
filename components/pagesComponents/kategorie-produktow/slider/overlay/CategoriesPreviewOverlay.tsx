import React, { Dispatch, SetStateAction } from 'react';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import CloseButton from './closeButton/CloseButton';
import LinksSection from './linksSection/LinksSection';

const overlayVariants = {
  from: { y: '100%' },
  to: { y: 0, transition: { delay: 0.0, duration: 0.8, ease: 'easeOut' } },
  exit: {
    y: '100%',
    transition: { delay: 0.4, duration: 0.6, ease: 'easeIn' },
  },
};
const headerVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.2, duration: 0.6, ease: 'easeIn' },
  },
};

const CategoriesPreviewOverlay: React.FunctionComponent<{
  currentCategory: number;
  isPreviewOpen: boolean;
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ currentCategory, isPreviewOpen, setIsPreviewOpen }) => {
  /**JSX**/
  return (
    <AnimatePresence initial={true}>
      {isPreviewOpen && (
        <motion.div
          key={Number(isPreviewOpen)}
          className="absolute inset-0 bg-dark"
          variants={overlayVariants}
          initial="from"
          animate="to"
          exit="exit"
          // initial={{ y: '100%' }}
          // animate={{
          //   y: 0,
          //   transition: { delay: 0.0, duration: 0.8, ease: 'easeOut' },
          // }}
          // exit={{
          //   y: '100%',
          //   transition: { delay: 0.4, duration: 0.6, ease: 'easeIn' },
          // }}
        >
          <motion.div className="relative flex flex-col w-full h-full">
            <div className="w-full h-full pb-[60px]">
              <div className="w-full min-h-[30%] pt-4">
                <motion.div
                  className="flex w-full inner-px-md-lg"
                  variants={headerVariants}
                >
                  <div className="h-auto w-[10px] border-l border-corpo" />
                  <p className={`header-link-label text-grey `}>Kategoria</p>
                </motion.div>
              </div>
              <div className="w-full h-full">
                <motion.div
                  className="flex w-full inner-px-md-lg"
                  variants={headerVariants}
                >
                  <div className="h-auto w-[10px] border-l border-corpo" />
                  <p className={`header-link-label text-grey `}>Podkategorie</p>
                </motion.div>
                <LinksSection
                  isPreviewOpen={isPreviewOpen}
                  currentCategory={currentCategory}
                />
              </div>
            </div>
            <div className="absolute fc bottom-0 left-0 right-0 h-[60px] pb-2">
              <CloseButton setIsPreviewOpen={setIsPreviewOpen} />
            </div>
          </motion.div>
          {/* <div className="flex flex-wrap gap-4 justify-center w-full h-full ">
            {createLinks()}
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategoriesPreviewOverlay;
