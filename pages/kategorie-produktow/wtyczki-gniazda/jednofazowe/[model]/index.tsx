import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaSchukoContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.5_wtyczki-gniazda-schuko/WtyczkiGniazdaSchukoContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
// import {
//   wtyczkiGniazdaSchukoTablicowe_SubCategory_data,
//   wtyczkiGniazdaSchukoTablicowe_productCards_data,
// } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_data ';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';
import {
  wtyczkiGniazdaSchuko_SubCategory_data,
  wtyczkiGniazdaSchuko_productCards_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_5_jednofazowe_data';

/**--------------------------------------**/
const WtyczkiGniazdaSchukoProductPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={wtyczkiGniazdaSchuko_productCards_data}
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
      subCategoryName={wtyczkiGniazdaSchuko_SubCategory_data.subCategoryName}
      subCategoryUrl={wtyczkiGniazdaSchuko_SubCategory_data.subCategoryUrl}
    >
      <WtyczkiGniazdaSchukoContent
        productCardsData={wtyczkiGniazdaSchuko_productCards_data}
      />
    </ProductPageTemplate>
  );
};

WtyczkiGniazdaSchukoProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default WtyczkiGniazdaSchukoProductPage;
