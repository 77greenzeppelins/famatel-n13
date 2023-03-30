import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithTextAndIcon from '../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
import SVG_14307_P28 from '../../../../SVG/techDrawings/1_wtyczki-gniazda/SVG_14307_P28';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/** */
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import CatalogNavPanel from '../../../../multipagesComponents/navigations/catalogNavPanel/CatalogNavPanel';
import { smallPseudoHeaders } from '../../../../../data/_data';
/**HardCodedData**/
const links = [
  {
    l1: 'Kategoria',
    l2: 'Przemysłowe wtyczki i gniazda',
    linkHref: catalogStructureData[0].mainCategoryUrl,
  },
  {
    l1: 'Podkategoria',
    l2: 'Przenośne',
    linkHref: catalogStructureData[0].subCategoriesUrls[0],
  },
  {
    l1: 'Model',
    l2: '14307',
    linkHref: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip67-125A`,
  },
];
/**-------------------------------------------------------**/
const ProductDescription: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  productDescriptionOpener: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isProductDescriptionOpen, productDescriptionOpener }) => {
  /**...**/

  /**JSX**/
  return (
    <AnimatePresence>
      {isProductDescriptionOpen && (
        <motion.div
          data-component="ProductDescription__container"
          // className="absolute inset-0 px-[2%] xxs:px-[6%] md:px-[60px] xl:px-0 xl:pr-[80px] xxl:pr-[100px] xl:pt-[70px] bg-dark "
          //___mix of inner-pr-md-xl-xxl & inner-px-md-xl-xxl
          className="bg-dark"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div
            className="flex flex-col gap-y-8 xl:flex-row-reverse xl:gap-y-0 xl:gap-x-8 xxl:gap-x-20 inner-px-md-xl-xxl"
            // className="relative flex justify-center flex-col xl:flex-col  gap-y-2 w-full h-full  mt-[40px] xs:mt-[80px] md:mt-[60px] lg:mt-[180px]  xl:items-start xl:justify-center xl:mt-0 "
          >
            {/* <div className="absolute right-0 w-6 h-6 -top-6 xs:top-0 fc xl:relative xl:flex xl:justify-end xl:w-full">
              <CloseButton
                productDescriptionOpener={productDescriptionOpener}
                buttonStyle="relative fc focus:outline-none disable pointer-events-auto group"
              />
            </div> */}
            <div className=" flex flex-col justify-center items-start gap-y-8 w-full xl:w-[50%] ">
              {/* {links.map(({ l1, l2, linkHref }, i) => (
                <div
                  key={i}
                  className={`${
                    i === 1
                      ? 'hidden xxs:flex flex-col group'
                      : 'xxs:flex flex-col group'
                  }`}
                >
                  <SmallPseudoHeader
                    text={l1}
                    hasBox={true}
                    hasVerticalOrnament={false}
                  />
                  <LinkWithTextAndIcon
                    linkHref={linkHref}
                    pLabel={l2}
                    // mainContainerStyle="w-[90%]"
                    aStyle="fc gap-4 h-full  bg-transparent focus:outline-none "
                    hasBox={true}
                    hasVerticalOrnament={false}
                    pStyle="flex items-center h-full p-medium text-grey group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]"
                  />
                </div>
              ))} */}

              <CatalogNavPanel
                // key={index}
                linkHeaders={[smallPseudoHeaders.n1, smallPseudoHeaders.n2]}
                linkNames={['Przemysłowe wtyczki i gniazda', 'Przenośne']}
                linkUrls={[
                  catalogStructureData[0].subCategoriesUrls[0],
                  catalogStructureData[0].mainCategoryUrl,
                ]}
                bottomHeader={smallPseudoHeaders.n3}
                bottomName={'14307'}
                bottomUrl={`${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip67-125A`}
              />
            </div>
            <div className="flex justify-start bg-dark w-full max-w-[700px] lg:max-w-[1000px] xl:max-w-full">
              <SVG_14307_P28 />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDescription;
