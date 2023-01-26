import React from 'react';
/**Hook Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
/**BasicData**/
import {
  splitedPathParts,
  mainCategoriesSummaryData,
} from '../../../../../data/_data';
import { productCardsData } from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**--------------------------------------**/
const ObudowyPusteProductPage = () => {
  /**Router Section**/
  const router = useRouter();
  //   const test1 = productCardsData[0];
  //   const test1_path = productCardsData[0].path;
  //   const splitedPath = test1_path.split('/');
  //   console.log('splitedPath:', splitedPath);
  /**...**/
  const productData = () => {
    let productSpecification: any | IF_ProductCardData;
    // let productSpecification: IF_ProductCardData = {};
    productCardsData.map(productData => {
      const productPath = productData.path.split('/');

      if (router.query.model === productPath[splitedPathParts.product]) {
        console.log(
          'router.query.model === productPath[4]:',
          router.query.model === productPath[4]
        );
        productSpecification = productData;
      }
    });
    return productSpecification;
  };

  /**JSX**/
  return (
    <ProductPageTemplate
      productData={productData()}
      //___data to create "navSection"
      catalogStructureData={
        catalogStructureData[
          mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
        ]
      }
    />
  );
};

export default ObudowyPusteProductPage;
