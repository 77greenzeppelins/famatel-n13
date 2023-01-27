import React, { ReactElement } from 'react';
/**Hook Staff**/
import { useRouter } from 'next/router';
/**Components**/
// import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
/**BasicData**/
import {
  splitedPathParts,
  mainCategoriesSummaryData,
} from '../../../../../data/_data';
import { productCardsData } from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import { NextPageWithLayout } from '../../../../_app';
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';

/**--------------------------------------**/
const ObudowyPusteProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  const router = useRouter();
  //   const test1 = productCardsData[0];
  //   const test1_path = productCardsData[0].path;
  //   const splitedPath = test1_path.split('/');
  //   console.log('splitedPath:', splitedPath);
  /**...**/
  //   const productData = () => {
  //     let productSpecification: any | IF_ProductCardData;
  //     // let productSpecification: IF_ProductCardData = {};
  //     productCardsData.map(productData => {
  //       const productPath = productData.path.split('/');

  //       if (router.query.model === productPath[splitedPathParts.product]) {
  //         console.log(
  //           'router.query.model === productPath[4]:',
  //           router.query.model === productPath[4]
  //         );
  //         productSpecification = productData;
  //       }
  //     });
  //     return productSpecification;
  //   };

  const productData = () => {
    return productCardsData.map(productData => {
      const productPath = productData.path.split('/');

      if (router.query.model === productPath[splitedPathParts.product]) {
        console.log(
          'router.query.model === productPath[4]:',
          router.query.model === productPath[4]
        );
        return productData;
      }
    });
  };

  //   console.log(
  //     'catalogStructureData:',
  //     catalogStructureData[
  //       mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
  //     ]
  //   );

  /**JSX**/
  return (
    // <div className="fc w-scree h-screen bg-dark ">
    //   <p className="text-grey">ObudowyPusteProductPage</p>
    // </div>
    <ProductPageTemplate
      //   productData={productData()}
      catalogStructureData={
        catalogStructureData[
          mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
        ]
      }
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
