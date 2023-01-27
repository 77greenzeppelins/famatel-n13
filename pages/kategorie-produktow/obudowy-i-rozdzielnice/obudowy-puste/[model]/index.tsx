import React, { ReactElement, useState } from 'react';
/**Hook Staff**/
// import { useRouter } from 'next/router';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import {
  obudowyPusteSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const ObudowyPusteProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      //___data about category
      catalogStructureData={
        catalogStructureData[
          mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
        ]
      }
      //___data about subCategory
      obudowyPusteSubCategoryData={obudowyPusteSubCategoryData}
      //___data about product
      productCardsData={productCardsData}
    />
  );
};

ObudowyPusteProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default ObudowyPusteProductPage;
