import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import GniazdaBlokadaTablicoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/2.1_gniazda-blokada-tablicowe/GniazdaBlokadaTablicoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  gniazdaBlokadaAkcesoria_SubCategory_data,
  gniazdaBlokadaAkcesoria_productCards_data,
} from '../../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_4_akcesoria_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const GniazdaBlokadaAkcesoriaProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={gniazdaBlokadaAkcesoria_productCards_data}
      //___data for navSection => data about category
      categoryName={
        catalogStructureData[
          mainCategoriesSummaryData.gniazdaBlokada.categoryIndex
        ].mainCategoryName
      }
      categoryUrl={
        catalogStructureData[
          mainCategoriesSummaryData.gniazdaBlokada.categoryIndex
        ].mainCategoryUrl
      }
      //___data for navSection => data about subCategory
      subCategoryName={gniazdaBlokadaAkcesoria_SubCategory_data.subCategoryName}
      subCategoryUrl={gniazdaBlokadaAkcesoria_SubCategory_data.subCategoryUrl}
    >
      <GniazdaBlokadaTablicoweContent
        productCardsData={gniazdaBlokadaAkcesoria_productCards_data}
      />
    </ProductPageTemplate>
  );
};

GniazdaBlokadaAkcesoriaProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default GniazdaBlokadaAkcesoriaProductPage;
