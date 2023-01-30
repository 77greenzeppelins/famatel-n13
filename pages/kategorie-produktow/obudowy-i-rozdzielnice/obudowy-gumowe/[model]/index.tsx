import React, { ReactElement, useState } from 'react';
/**Hook Staff**/
// import { useRouter } from 'next/router';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

import {
  rozdzielniceGumoweSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_3_gumowe';

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
      productCardsData={productCardsData}
      //___data for navSection => data about category
      categoryName={
        catalogStructureData[
          mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
        ].mainCategoryName
      }
      categoryUrl={
        catalogStructureData[
          mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
        ].mainCategoryUrl
      }
      //___data for navSection => data about subCategory
      subCategoryName={rozdzielniceGumoweSubCategoryData.subCategoryName}
      subCategoryUrl={rozdzielniceGumoweSubCategoryData.subCategoryUrl}
    >
      <div className="fc w-screen h-[50vh]">ObudowyGumoweProductPage</div>
    </ProductPageTemplate>
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
