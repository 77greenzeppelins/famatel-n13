import React from 'react';
/**Components**/
import Card_Basic from '../../../../../../multipagesComponents/cardsCatalogs/card_Basic/Card_Basic';
import SpecialCard from './specialCard/SpecialCard';
/**BasicData**/
import { catalogStructureData } from '../../../../../../../data/_catalogStructure_data';
import { AnimatePresence, motion } from 'framer-motion';
import { overlayContainerVariants } from '../../../../../../../utils/framerMotion/framerMotionUtils';
/**Tailwind**/
const basicTextStyle =
  ' text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300 ';
const normalCardTextStyle = `text-grey ${basicTextStyle}`;
const specialCardTextStyle = `text-greyShade2 ${basicTextStyle}`;

const largeTextStyle =
  'text-greyShade2 text-1xl sm:text-2xl xl:text-3xl tracking-[0.09rem]';

/**-------------------------------------------**/

const ProduktyDropDownMenu = ({
  isHovered,
  label,
  hasDropDownMenu,
}: {
  isHovered: boolean;
  label: string;
  hasDropDownMenu: boolean;
}) => {
  /**JSX**/

  return (
    <AnimatePresence mode="wait">
      {isHovered && hasDropDownMenu && (
        /*
          linkState.condition
          this condition can be moved to "if (linkState.label === id)"...
          */
        <motion.div
          id="DropDownMenusHolder__container"
          key={label}
          className="fc w-screen h-screen bg-dark pointer-events-auto"
          variants={overlayContainerVariants}
          animate="animate"
          initial="initial"
          exit="initial"
        >
          <div className={`w-[98%] h-[80%] xl:h-[90%] fc bg-dark`}>
            <div
              id="ProduktyDropDownMenu__griddedContainer"
              className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-[100vw] h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
              //___place-items-stretch
              //className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-full h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
            >
              {catalogStructureData.map(
                ({
                  mainCategoryIndex,
                  mainCategoryName,
                  mainCategoryUrl,
                  mainCategoryImage,
                }) => (
                  <Card_Basic
                    key={mainCategoryIndex}
                    url={mainCategoryUrl}
                    imageData={mainCategoryImage}
                    arrayIndex={mainCategoryIndex}
                    label={mainCategoryName}
                    heightMattersCondition={true}
                    textStyle={normalCardTextStyle}
                  />
                )
              )}

              <div className="col-start-2 xs:col-start-3 col-span-full ">
                <SpecialCard
                  mediumTextStyle={specialCardTextStyle}
                  largeTextStyle={largeTextStyle}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // return (
  //   <div
  //     id="ProduktyDropDownMenu__griddedContainer"
  //     className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-[100vw] h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
  //     //___place-items-stretch
  //     //className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-full h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
  //   >
  //     {catalogStructureData.map(
  //       ({
  //         mainCategoryIndex,
  //         mainCategoryName,
  //         mainCategoryUrl,
  //         mainCategoryImage,
  //       }) => (
  //         <Card_Basic
  //           key={mainCategoryIndex}
  //           url={mainCategoryUrl}
  //           imageData={mainCategoryImage}
  //           arrayIndex={mainCategoryIndex}
  //           label={mainCategoryName}
  //           heightMattersCondition={true}
  //           textStyle={normalCardTextStyle}
  //         />
  //       )
  //     )}

  //     <div className="col-start-2 xs:col-start-3 col-span-full ">
  //       <SpecialCard
  //         mediumTextStyle={specialCardTextStyle}
  //         largeTextStyle={largeTextStyle}
  //       />
  //     </div>
  //   </div>
  // );
  // return (
  //   <div
  //     id="ProduktyDropDownMenu__griddedContainer"
  //     className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-full h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
  //     //___place-items-stretch
  //   >
  //     {catalogStructureData.map(
  //       ({
  //         mainCategoryIndex,
  //         mainCategoryName,
  //         mainCategoryUrl,
  //         mainCategoryImage,
  //       }) => (
  //         <Card_Basic
  //           key={mainCategoryIndex}
  //           url={mainCategoryUrl}
  //           imageData={mainCategoryImage}
  //           arrayIndex={mainCategoryIndex}
  //           label={mainCategoryName}
  //           heightMattersCondition={true}
  //           textStyle={normalCardTextStyle}
  //         />
  //       )
  //     )}

  //     <div className="col-start-2 xs:col-start-3 col-span-full ">
  //       <SpecialCard
  //         mediumTextStyle={specialCardTextStyle}
  //         largeTextStyle={largeTextStyle}
  //       />
  //     </div>
  //   </div>
  // );
};

export default ProduktyDropDownMenu;
