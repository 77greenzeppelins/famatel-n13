import React, { ReactNode } from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components*/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import ProductPageNavPanel from './productPageNavPanel/ProductPageNavPanel';
/**TS**/
import {
  IF_ProductCardData,
  // IF_CatalogStructureData,
} from '../../../utils/TS/typeScriptStaff';
import { splitedPathParts } from '../../../data/_data';

/**---------------------------------**/
const ProductPageTemplate: React.FunctionComponent<{
  categoryName: string;
  categoryUrl: string;
  subCategoryName: string;
  subCategoryUrl: string;
  productCardsData: IF_ProductCardData[];
  children: ReactNode;
}> = ({
  categoryName,
  categoryUrl,
  subCategoryName,
  subCategoryUrl,
  productCardsData,
  children,
}) => {
  /**Router Section**/
  const router = useRouter();

  /**JSX**/
  return (
    <div
      data-component="ProductPageTemplate__container"
      className="w-screen min-h-screen inner-px-md-lg pt-[60px] bg-dark pb-[10vh] "
    >
      <PageContentLayout>
        {/* <SectionContentLayout> */}
        {productCardsData.map((productData, index) => {
          const productPath = productData.path.split('/');
          const productName = productData.model
            ? productData.model
            : productData.altName;
          const productPathPivotalPart = productPath[splitedPathParts.product];
          if (router.query.model === productPathPivotalPart) {
            // console.log('ProductPageTemplate________________');
            return (
              <ProductPageNavPanel
                key={index}
                categoryName={categoryName}
                categoryUrl={categoryUrl}
                subCategoryName={subCategoryName}
                subCategoryUrl={subCategoryUrl}
                productName={productName}
              />
            );
          }
        })}
        {children}
      </PageContentLayout>

      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default ProductPageTemplate;

// <ProductPageContent
//   key={index}
//   categoryName={categoryName}
//   categoryUrl={categoryUrl}
//   subCategoryName={subCategoryName}
//   subCategoryUrl={subCategoryUrl}
//   productName={productName}
// >
//   {children}
// </ProductPageContent>

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
