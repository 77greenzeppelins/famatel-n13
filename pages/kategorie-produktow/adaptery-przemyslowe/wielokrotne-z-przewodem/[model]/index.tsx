import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import AdapteryPrzemysloweWielokrotneKabelContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/3.3_adaptery-przemyslowe-wielokrotne-kabel/AdapteryPrzemysloweWielokrotneKabelContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  adapteryPrzemysloweWielokrotneKabel_SubCategory_data,
  adapteryPrzemysloweWielokrotneKabel_productCards_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_3_wielokrotne-z-kablem_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const AdapterZPrzewodemProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={adapteryPrzemysloweWielokrotneKabel_productCards_data}
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
        adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryName
      }
      subCategoryUrl={
        adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryUrl
      }
    >
      <AdapteryPrzemysloweWielokrotneKabelContent
        productCardsData={adapteryPrzemysloweWielokrotneKabel_productCards_data}
      />
    </ProductPageTemplate>
  );
};

AdapterZPrzewodemProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <>
      <Head>
        <title>Adapter przemysłowy z przewodem | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adapter przemysłowy z przewodem &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna adaptera przemysłowego z przewodem marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna adaptera przemysłowego z przewodem marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default AdapterZPrzewodemProductPage;
