import Head from 'next/head';
import React, { ReactElement } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import RozdzielnicePrzemysloweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/8.2_rozdzielnice-przemyslowe/RozdzielnicePrzemysloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  rozdzielnicePrzemysloweSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe';

/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const RozdzielnicePrzemysloweProductPage: NextPageWithLayout = () => {
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
      subCategoryName={rozdzielnicePrzemysloweSubCategoryData.subCategoryName}
      subCategoryUrl={rozdzielnicePrzemysloweSubCategoryData.subCategoryUrl}
    >
      <RozdzielnicePrzemysloweContent productCardsData={productCardsData} />
    </ProductPageTemplate>
  );
};

RozdzielnicePrzemysloweProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <>
      <Head>
        <title>Rozdzielnica przemysłowa | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnica przemysłowa &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna rozdzielnicy przemysłowej marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna rozdzielnicy przemysłowej marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default RozdzielnicePrzemysloweProductPage;
