import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaSchukoTablicoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.4_wtyczki-gniazda-schuko-tablicowe/WtyczkiGniazdaSchukoTablicoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  wtyczkiGniazdaSchukoTablicowe_SubCategory_data,
  wtyczkiGniazdaSchukoTablicowe_productCards_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_data ';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const WtyczkiGniazdaSchukoTablicoweProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={wtyczkiGniazdaSchukoTablicowe_productCards_data}
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
        wtyczkiGniazdaSchukoTablicowe_SubCategory_data.subCategoryName
      }
      subCategoryUrl={
        wtyczkiGniazdaSchukoTablicowe_SubCategory_data.subCategoryUrl
      }
    >
      <WtyczkiGniazdaSchukoTablicoweContent
        productCardsData={wtyczkiGniazdaSchukoTablicowe_productCards_data}
      />
    </ProductPageTemplate>
  );
};

WtyczkiGniazdaSchukoTablicoweProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <>
      <Head>
        <title>
          Osprzęt elektryczny tablicowy jednofazowy | Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny tablicowy jednofazowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego tablicowego jednofazowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego tablicowego jednofazowego marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default WtyczkiGniazdaSchukoTablicoweProductPage;
