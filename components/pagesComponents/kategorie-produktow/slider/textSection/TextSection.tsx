import React from 'react';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { mainCategories } from '../../../../../data/_data';

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  const counterStyle = ` text-grey text-center ${
    isLandscape ? 'text-[1rem] xs:text-[2rem] sx:text-[3rem] ' : 'text-[2rem] '
  } `;

  const categoryNameStyle = ` text-light text-left ${
    isLandscape
      ? 'text-[1rem]  '
      : 'text-[1.5rem] xs:text-[2rem] sx:text-[3rem] '
  } `;

  console.log('isLandscape:', isLandscape);
  /**JSX**/
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentCategory}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`absolute fc h-full w-full ${
            isLandscape ? 'inner-pl-md-lg py-[5%]' : 'inner-px-md-lg py-[5%]'
          }`}
        >
          <div
            className="flex h-full w-full flex-col gap-6 leading-none  px-2 py-2"
            //__border border-greyShade2
          >
            <div
            //  className="flex w-full inner-px-md-lg leading-none"
            >
              <div className="flex w-full border-b border-greyShade1 ">
                <motion.p
                  className={`${counterStyle} w-[40px]`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >{`${currentCategory + 1 < 10 ? '0' : ''}${
                  currentCategory + 1
                } `}</motion.p>
                <p className={`${counterStyle} w-[50px]`}>/</p>
                <p className={`${counterStyle} w-[40px]`}>
                  {mainCategories.length - 1}
                </p>
              </div>
            </div>
            <motion.div
              className="flex  w-full "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="h-full w-[2px] border-l-2 border-corpo pr-2" />
              <p className={categoryNameStyle}>
                {mainCategories[currentCategory].fullName}
              </p>
            </motion.div>
            <motion.div
              className="flex  w-full "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="h-full w-[2px] border-l-2 border-corpo pr-2" />
              <p className={categoryNameStyle}>Zobacz szczegóły</p>
            </motion.div>
            <motion.div
              className="flex  w-full "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="h-full w-[2px] border-l-2 border-corpo pr-2" />
              <p className={categoryNameStyle}>Szybki podgląd</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSection;
