import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import RozdzielniceModuloweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/9.2_rozdzielnice-modulowe/RozdzielniceModuloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import {
  rozdzielniceModuloweSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_2_modulowe';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const RozdzielniceModuloweProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      //___data about product => mainly its url that is used to identify data in array
      productCardsData={productCardsData}
      //___data for navSection => data about category
      categoryName={
        catalogStructureData[
          mainCategoriesSummaryData.rozdzielniceModulowe.categoryIndex
        ].mainCategoryName
      }
      categoryUrl={
        catalogStructureData[
          mainCategoriesSummaryData.rozdzielniceModulowe.categoryIndex
        ].mainCategoryUrl
      }
      //___data for navSection => data about subCategory
      subCategoryName={rozdzielniceModuloweSubCategoryData.subCategoryName}
      subCategoryUrl={rozdzielniceModuloweSubCategoryData.subCategoryUrl}
    >
      <RozdzielniceModuloweContent productCardsData={productCardsData} />
    </ProductPageTemplate>
  );
};

RozdzielniceModuloweProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default RozdzielniceModuloweProductPage;
