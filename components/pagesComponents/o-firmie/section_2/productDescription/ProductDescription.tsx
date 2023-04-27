import React from 'react';
/**Components**/
import CatalogNavPanel from '../../../../multipagesComponents/navigations/catalogNavPanel/CatalogNavPanel';
import SVG_14307_d from '../../../../SVG/techDrawings/0_dark/SVG_14307_d';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
/** */
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import { smallPseudoHeaders } from '../../../../../data/_data';

/**-------------------------------------------------------**/
const ProductDescription: React.FC = () => {
  /**...**/

  /**JSX**/
  return (
    <motion.div
      data-component="ProductDescription__container"
      className="bg-dark"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <div className="flex flex-col gap-y-8 xl:flex-row-reverse xl:gap-y-0 xl:gap-x-8 xxl:gap-x-20 inner-px-md-xl-xxl">
        <div className=" flex flex-col justify-center items-start gap-y-8 w-full xl:w-[50%] ">
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
          <SVG_14307_d />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDescription;
