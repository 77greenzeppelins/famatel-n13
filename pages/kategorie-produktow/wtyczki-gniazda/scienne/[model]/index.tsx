import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaScienneContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.3_wtyczki-gniazda-scienne/WtyczkiGniazdaScienneContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

import {
  wtyczkiGniazdaScienne_productCards_data,
  wtyczkiGniazdaScienne_SubCategory_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_3_scienne_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const WtyczkiGniazdaScienneProductPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={wtyczkiGniazdaScienne_productCards_data}
      //___data for navSection => data about category
      categoryName={
        catalogStructureData[
          mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
        ].mainCategoryName
      }
      categoryUrl={
        catalogStructureData[
          mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
        ].mainCategoryUrl
      }
      //___data for navSection => data about subCategory
      subCategoryName={wtyczkiGniazdaScienne_SubCategory_data.subCategoryName}
      subCategoryUrl={wtyczkiGniazdaScienne_SubCategory_data.subCategoryUrl}
    >
      <WtyczkiGniazdaScienneContent
        productCardsData={wtyczkiGniazdaScienne_productCards_data}
      />
    </ProductPageTemplate>
  );
};

WtyczkiGniazdaScienneProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default WtyczkiGniazdaScienneProductPage;
