import Head from 'next/head';
import React, { ReactElement } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import AdapteryPrzemysloweWielokrotneContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/3.2_adaptery-przemuslowe-wielokrotne/AdapteryPrzemysloweWielokrotneContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  adapteryPrzemysloweWielokrotne_SubCategory_data,
  adapteryPrzemysloweWielokrotne_productCards_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const AdapterWielokrotnyPrzemyslowyProductPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={adapteryPrzemysloweWielokrotne_productCards_data}
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
      //___data for <ProductPageNavPanel> => data about subCategory
      subCategoryName={
        adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryName
      }
      subCategoryUrl={
        adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl
      }
    >
      <AdapteryPrzemysloweWielokrotneContent
        productCardsData={adapteryPrzemysloweWielokrotne_productCards_data}
      />
    </ProductPageTemplate>
  );
};

AdapterWielokrotnyPrzemyslowyProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <>
      <Head>
        <title>Adapter wielokrotny przemysłowy | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adapter wielokrotny przemysłowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna adaptera wielokrotnego przemysłowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna adaptera wielokrotnego przemysłowego marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default AdapterWielokrotnyPrzemyslowyProductPage;
