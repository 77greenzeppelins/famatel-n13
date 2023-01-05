import React from 'react';
/**Components*/
import TextLinkWithArrow from '../../../../_basicComponents/links/textLinkWithArrow/TextLinkWithArrow';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};
/**Basic Data**/
import { mainCategories } from '../../../../../data/_data';
import TextButtonWithListIcon from '../../../../_basicComponents/buttons/textButtonWithListIcon/TextButtonWithListIcon';

/**--------------------------------------------------------------------------------**/
const TextSection: React.FunctionComponent<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  const counterStyle = ` text-grey text-center ${
    isLandscape
      ? 'text-[1rem] xs:text-[2rem] sx:text-[3rem] '
      : 'text-[1.5rem] '
  } `;

  const categoryNameStyle = ` text-light text-left ${
    isLandscape
      ? 'text-[1rem] lg:text-[2rem] xxl:text-[3rem] tracking-widest'
      : 'text-[1.5rem] xs:text-[2rem] sx:text-[3rem] tracking-widest'
  }`;
  const categoryNameContainerStyle = `${
    isLandscape
      ? 'h-[2rem] lg:h-[4.6rem] xxl:h-[6rem]  '
      : 'h-[3rem] xs:h-[4rem] sx:h-[6rem] '
  }`;
  const buttonLabelStyle = ` text-light text-left ${
    isLandscape
      ? 'text-[1rem] tracking-widest'
      : 'text-[1.5rem] xs:text-[2rem] sx:text-[3rem] '
  }`;

  // console.log('isLandscape:', isLandscape);
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
            className="flex justify-center gap-2 w-full h-full flex-col leading-none  px-2 py-2 "
            //__border border-greyShade2
          >
            <div
              className="flex"
              style={{ width: 'fit-content' }}
              //___border border-greyShade1
            >
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

            <motion.div
              className="flex items-center w-full h-[30%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div
                className={`${categoryNameContainerStyle} flex items-center`}
              >
                <div className="h-full w-[2px] border-l-2 border-corpo pr-2" />
                <p className={categoryNameStyle}>
                  {mainCategories[currentCategory].fullName}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex w-full "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <TextLinkWithArrow
                linkHref={mainCategories[currentCategory].url}
                containerStyle="rounded-sm border border-grey"
                aStyle="fc focus:outline-none h-[40px] overflow-hidden disable"
                ariaLabel={'Link do strony: "Zobacz szczegóły"'}
                label="Zobacz szczegóły"
              />
            </motion.div>

            <motion.div
              className="flex w-full "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <TextButtonWithListIcon
                containerStyle="rounded-sm border border-grey"
                buttonStyle="fc focus:outline-none h-[40px] overflow-hidden disable"
                ariaLabel={'Przycisk: "Szybki podgląd"'}
                label="Szybki podgląd"
              />
              {/* <div className="fc rounded-sm border border-grey focus:outline-none h-[40px] overflow-hidden disable">
                <p className={buttonLabelStyle}>Szybki podgląd</p>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSection;
