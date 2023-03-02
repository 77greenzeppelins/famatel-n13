import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import SVG_14307_P28 from '../../../../SVG/techDrawings/1_wtyczki-gniazda/SVG_14307_P28';
import CloseButton from './closeButton/CloseButton';
/**HardCodedData**/
const links = [
  { l1: 'Kategoria', l2: 'Przemysłowe wtyczki i gniazda' },
  { l1: 'Podkategoria', l2: 'Przenośne' },
  { l1: 'Model', l2: '14307' },
];
/**-------------------------------------------------------**/
const ProductDescription: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  productDescriptionOpener: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isProductDescriptionOpen, productDescriptionOpener }) => {
  /**JSX**/
  return (
    <AnimatePresence>
      {isProductDescriptionOpen && (
        <motion.div
          className="absolute inset-0 px-[2%] xxs:px-[6%] md:px-[60px] xl:px-0 xl:pr-[80px] xxl:pr-[100px] xl:pt-[70px] bg-dark "
          //___mix of inner-pr-md-xl-xxl & inner-px-md-xl-xxl
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="relative flex justify-center flex-col xl:flex-col  gap-y-2 w-full h-full  mt-[24px] xs:mt-[80px] md:mt-[60px] lg:mt-[180px]  xl:items-start xl:justify-center xl:mt-0 ">
            {/* <div className="absolute top-0 right-0 w-full h-0 xs:h-[80px] lg:h-[180px] bg-dark xl:h-0" /> */}
            <div className="absolute top-0 right-0 fc w-6 h-6 xl:relative xl:flex xl:justify-end xl:w-full">
              <CloseButton
                productDescriptionOpener={productDescriptionOpener}
                buttonStyle="relative fc focus:outline-none disable pointer-events-auto group"
              />
            </div>
            <div className=" flex flex-col justify-center items-start gap-y-8 w-full ">
              {links.map(({ l1, l2 }, i) => (
                <div
                  key={i}
                  className={`${i === 1 && 'hidden xxs:flex flex-col'}`}
                >
                  <SmallPseudoHeader
                    text={l1}
                    hasBox={true}
                    hasVerticalOrnament={false}
                  />
                  <SmallPseudoHeader
                    text={l2}
                    hasBox={true}
                    hasVerticalOrnament={false}
                    boxStyle="h-[10px] md:h-[14px] aspect-square bg-transparent"
                    textStyle="text-[0.625rem] xxs:text-[1rem] xs:text-[1.5rem] md:text-[1.5rem] text-light"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-start bg-dark w-full max-w-[700px] xl:max-w-full">
              <SVG_14307_P28 />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDescription;
