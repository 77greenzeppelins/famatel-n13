import React, { ReactNode } from 'react';
/**Components**/
import PageContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import NavSection from './navSection/NavSection';
/**TS**/
import {
  IF_CatalogStructureData,
  IF_ProductCardData,
} from '../../../../utils/TS/typeScriptStaff';

/**----------------------------------**/
const ProductPageContent: React.FunctionComponent<{
  catalogStructureData: IF_CatalogStructureData;
  obudowyPusteSubCategoryData: {
    subCategoryName: string;
    subCategoryUrl: string;
  };
  productData: IF_ProductCardData;
  children: ReactNode;
}> = ({
  catalogStructureData,
  obudowyPusteSubCategoryData,
  productData,
  children,
}) => {
  /**JSX**/
  return (
    <PageContentLayout>
      <SectionContentLayout>
        <NavSection
          parentCategoryName={catalogStructureData.mainCategoryName}
          parentCategoryUrl={catalogStructureData.mainCategoryUrl}
          subCategoryName={obudowyPusteSubCategoryData.subCategoryName}
          subCategoryUrl={obudowyPusteSubCategoryData.subCategoryUrl}
          productName={productData.model}
        />
      </SectionContentLayout>
      {children}
    </PageContentLayout>
  );
};

export default ProductPageContent;
