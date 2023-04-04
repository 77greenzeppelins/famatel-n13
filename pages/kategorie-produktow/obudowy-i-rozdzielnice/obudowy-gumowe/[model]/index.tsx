import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
/**Hook Staff**/
// import { useRouter } from 'next/router';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import ObudowyGumoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/8.3_obudowy-gumowe/ObudowyGumoweContent';
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
      <ObudowyGumoweContent productCardsData={productCardsData} />
    </ProductPageTemplate>
  );
};

ObudowyPusteProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Obudowa gumowa | Famatel Polska</title>
        <meta
          property="og:title"
          content="Obudowa gumowa &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna obudowy gumowej marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna obudowy gumowej marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default ObudowyPusteProductPage;
