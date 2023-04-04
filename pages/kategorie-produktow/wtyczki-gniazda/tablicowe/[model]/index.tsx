import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaTablicoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.2_wtyczki-gniazda-tablicowe/WtyczkiGniazdaTablicoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  gniazdaTablicowe_SubCategory_data,
  productCardsData,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_2_tablicowe_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';
import Head from 'next/head';

/**--------------------------------------**/
const GniazdaTablicoweProductPage: NextPageWithLayout = () => {
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
      subCategoryName={gniazdaTablicowe_SubCategory_data.subCategoryName}
      subCategoryUrl={gniazdaTablicowe_SubCategory_data.subCategoryUrl}
    >
      <WtyczkiGniazdaTablicoweContent productCardsData={productCardsData} />
    </ProductPageTemplate>
  );
};

GniazdaTablicoweProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny tablicowy | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny tablicowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego tablicowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego tablicowego marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default GniazdaTablicoweProductPage;
