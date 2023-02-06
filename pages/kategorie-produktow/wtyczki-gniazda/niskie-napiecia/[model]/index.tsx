import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaNiskieNapieciaContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.6_wtyczki-gniazda-niskie-napiecia/WtyczkiGniazdaNiskieNapieciaContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  productCardsData,
  wtyczkiGniazdaNiskieNapiecia_SubCategory_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const WtyczkiGniazdaNiskieNapięciaProductPage: NextPageWithLayout = () => {
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
          mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
        ].mainCategoryName
      }
      categoryUrl={
        catalogStructureData[
          mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
        ].mainCategoryUrl
      }
      //___data for navSection => data about subCategory
      subCategoryName={
        wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryName
      }
      subCategoryUrl={
        wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl
      }
    >
      <WtyczkiGniazdaNiskieNapieciaContent
        productCardsData={productCardsData}
      />
    </ProductPageTemplate>
  );
};

WtyczkiGniazdaNiskieNapięciaProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default WtyczkiGniazdaNiskieNapięciaProductPage;
