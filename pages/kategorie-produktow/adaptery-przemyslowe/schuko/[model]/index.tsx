import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';

/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  adapteryPrzemysloweSchuko_SubCategory_data,
  adapteryPrzemysloweSchuko_productCards_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_1_schuko_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';
import AdapteryPrzemysloweSchukoContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/3.1_adaptery-przemyslowe-schuko/AdapteryPrzemysloweSchukoContent';

/**--------------------------------------**/
const AdapterSchukoProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={adapteryPrzemysloweSchuko_productCards_data}
      //___data for navSection => data about category
      categoryName={
        catalogStructureData[
          mainCategoriesSummaryData.adapteryPrzemyslowe.categoryIndex
        ].mainCategoryName
      }
      categoryUrl={
        catalogStructureData[
          mainCategoriesSummaryData.adapteryPrzemyslowe.categoryIndex
        ].mainCategoryUrl
      }
      //___data for navSection => data about subCategory
      subCategoryName={
        adapteryPrzemysloweSchuko_SubCategory_data.subCategoryName
      }
      subCategoryUrl={adapteryPrzemysloweSchuko_SubCategory_data.subCategoryUrl}
    >
      <AdapteryPrzemysloweSchukoContent
        productCardsData={adapteryPrzemysloweSchuko_productCards_data}
      />
    </ProductPageTemplate>
  );
};

AdapterSchukoProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>{`${adapteryPrzemysloweSchuko_productCards_data[0].altName} | Famatel Polska`}</title>
        <meta
          property="og:title"
          content={`${adapteryPrzemysloweSchuko_productCards_data[0].altName} &nbsp;|&nbsp; Famatel Polska`}
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów przemysłowych Schuko marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów przemysłowych Schuko marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default AdapterSchukoProductPage;
