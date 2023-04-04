import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaPrzenosneContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.1_wtyczki-gniazda-przenosne/WtyczkiGniazdaPrzenosneContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  wtyczkiGniazdaPrzenosne_SubCategory_data,
  productCardsData,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const WtyczkiGniazdaPrzenosneProductPage: NextPageWithLayout = () => {
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
      subCategoryName={wtyczkiGniazdaPrzenosne_SubCategory_data.subCategoryName}
      subCategoryUrl={wtyczkiGniazdaPrzenosne_SubCategory_data.subCategoryUrl}
    >
      <WtyczkiGniazdaPrzenosneContent productCardsData={productCardsData} />
    </ProductPageTemplate>
  );
};

WtyczkiGniazdaPrzenosneProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny przenośny | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny przenośny &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego przenośnego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego przenośnego marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default WtyczkiGniazdaPrzenosneProductPage;
