import React, { ReactElement, useState } from 'react';
/**Hook Staff**/
import { useRouter } from 'next/router';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
/**BasicData**/
import {
  splitedPathParts,
  mainCategoriesSummaryData,
} from '../../../../../data/_data';
import {
  obudowyPusteSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const ObudowyPusteProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  const router = useRouter();
  //   const test1 = productCardsData[0];
  //   const test1_path = productCardsData[0].path;
  //   const splitedPath = test1_path.split('/');
  console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/
  const productData = () => {
    let productSpecification: any | IF_ProductCardData;
    productCardsData.map((productData, index) => {
      const productPath = productData.path.split('/');

      if (router.query.model === productPath[splitedPathParts.product]) {
        productSpecification = productData;
      }
    });
    return productSpecification;
  };

  /**JSX**/
  return (
    <ProductPageTemplate
      catalogStructureData={
        catalogStructureData[
          mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
        ]
      }
      obudowyPusteSubCategoryData={obudowyPusteSubCategoryData}
      //   productData={productData()}
    />
  );
};

ObudowyPusteProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default ObudowyPusteProductPage;
