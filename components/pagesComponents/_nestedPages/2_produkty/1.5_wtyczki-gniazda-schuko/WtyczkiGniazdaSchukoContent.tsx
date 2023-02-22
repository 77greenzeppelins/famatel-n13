import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SectionWithImages from '../_sectionWithImages/SectionWithImages';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import CatalogTable from './catalogTable/CatalogTable';
import CatalogTable2 from './catalogTable/CatalogTable2';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  wtyczkiGniazdaSchuko_catalog_data,
  wtyczkiGniazdaSchuko_catalog_2_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_5_jednofazowe_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import { productPagesSectionContentLayout } from '../../../../../utils/tailwindStyles';

/**----------------------------------------**/
const WtyczkiGniazdaSchukoContent: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**Router Section**/
  const router = useRouter();
  /**JSX**/
  return (
    <>
      {productCardsData.map((productData, index) => {
        const productPath = productData.path.split('/');
        const productPathPivotalPart = productPath[splitedPathParts.product];
        const productImage = productData.imageData;
        const catalogData = wtyczkiGniazdaSchuko_catalog_data[index];
        const catalogData2 = wtyczkiGniazdaSchuko_catalog_2_data[index];

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              {/* <SectionContentLayout></SectionContentLayout> */}
              <SectionContentLayout divStyle={productPagesSectionContentLayout}>
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%] ">
                  <SectionWithTable label={smallPseudoHeaders.l1}>
                    <CatalogTable catalogData={catalogData} />
                    <CatalogTable2 catalogData={catalogData2} />
                  </SectionWithTable>
                </div>
                <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto lg:min-h-[400px]">
                  <SectionWithImages imageData={productImage} />
                </div>
              </SectionContentLayout>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaSchukoContent;
