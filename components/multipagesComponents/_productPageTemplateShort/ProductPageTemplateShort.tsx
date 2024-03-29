import React, { ReactNode } from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components*/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import CatalogNavPanel from '../navigations/catalogNavPanel/CatalogNavPanel';
/**Basic Data*/
import { smallPseudoHeaders, splitedPathParts } from '../../../data/_data';
/**TS**/
import { IF_ProductCardData } from '../../../utils/TS/typeScriptStaff';

/*
is used in: [model] | <SubcategoryNamePage>
*/
/**---------------------------------**/
const ProductPageTemplateShort: React.FunctionComponent<{
  categoryName: string;
  categoryUrl: string;
  productCardsData: IF_ProductCardData[];
  children: ReactNode;
}> = ({ categoryName, categoryUrl, productCardsData, children }) => {
  /**Router Section**/
  const router = useRouter();

  /**JSX**/
  return (
    <div
      data-component="ProductPageTemplate__container"
      className="w-full min-h-screen inner-px-md-lg pt-[60px] bg-dark"
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
            return (
              <CatalogNavPanel
                key={index}
                linkHeaders={[smallPseudoHeaders.n1]}
                linkNames={[categoryName]}
                linkUrls={[categoryUrl]}
                bottomHeader={smallPseudoHeaders.n2}
                bottomName={productName}
              />
            );
          }
        })}
        {children}
      </PageContentLayout>
    </div>
  );
};

export default ProductPageTemplateShort;

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
