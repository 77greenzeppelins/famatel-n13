import React, { ReactNode } from 'react';
/**...**/
import { useRouter } from 'next/router';
/**Components*/
import ProductPageContent from './productPageContent/ProductPageContent';
/**TS**/
import {
  IF_ProductCardData,
  IF_CatalogStructureData,
} from '../../../utils/TS/typeScriptStaff';
import { splitedPathParts } from '../../../data/_data';

/**---------------------------------**/
const ProductPageTemplate: React.FunctionComponent<{
  catalogStructureData: IF_CatalogStructureData;
  obudowyPusteSubCategoryData: {
    subCategoryName: string;
    subCategoryUrl: string;
  };
  productCardsData: IF_ProductCardData[];
  children: ReactNode;
}> = ({
  catalogStructureData,
  obudowyPusteSubCategoryData,
  productCardsData,
  children,
}) => {
  /**...WTF**/
  //   console.log('catalogStructureData:', catalogStructureData);
  //   console.log('productData:', productData);
  const router = useRouter();

  /**Props destructuring**/
  const { mainCategoryName, mainCategoryUrl } = catalogStructureData;

  //   console.log('subCategoriesNames', subCategoriesNames);
  //   console.log('subCategoriesUrls', subCategoriesUrls);

  /**JSX**/
  return (
    <div
      data-component="SubCategoryPageTemplate__container"
      className="w-screen inner-px-md-lg pt-[60px] bg-dark pb-[10vh]"
    >
      {productCardsData.map((productData, index) => {
        const productPath = productData.path.split('/');
        if (router.query.model === productPath[splitedPathParts.product]) {
          return (
            <ProductPageContent
              key={index}
              productData={productData}
              catalogStructureData={catalogStructureData}
              obudowyPusteSubCategoryData={obudowyPusteSubCategoryData}
            >
              {children}
            </ProductPageContent>
          );
        }
      })}

      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default ProductPageTemplate;

// const productData = () => {
//   let productSpecification: any | IF_ProductCardData;
//   productCardsData.map((productData, index) => {
//     const productPath = productData.path.split('/');

//     if (router.query.model === productPath[splitedPathParts.product]) {
//       productSpecification = productData;
//     }
//   });
//   return productSpecification;
// };
