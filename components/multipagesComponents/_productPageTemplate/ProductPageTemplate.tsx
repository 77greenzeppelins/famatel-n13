import React from 'react';
/**Components*/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import {
  IF_ProductCardData,
  IF_CatalogStructureData,
} from '../../../utils/TS/typeScriptStaff';
import NavSection from './navSection/NavSection';

/**---------------------------------**/
const ProductPageTemplate: React.FunctionComponent<{
  productData: IF_ProductCardData;
  catalogStructureData: IF_CatalogStructureData;
}> = ({ catalogStructureData, productData }) => {
  /**...WTF**/
  console.log('catalogStructureData:', catalogStructureData);
  console.log('productData:', productData);

  /**Props destructuring**/
  const {
    mainCategoryName,
    mainCategoryUrl,
    subCategoriesNames,
    subCategoriesUrls,
  } = catalogStructureData;

  //   console.log('subCategoriesNames', subCategoriesNames);
  //   console.log('subCategoriesUrls', subCategoriesUrls);

  /**JSX**/
  return (
    <div
      data-component="SubCategoryPageTemplate__container"
      className="w-screen inner-px-md-lg pt-[60px] bg-dark pb-[10vh]"
    >
      <PageContentLayout>
        <SectionContentLayout>
          <NavSection
            parentCategoryName={mainCategoryName}
            parentCategoryUrl={mainCategoryUrl}
          />
        </SectionContentLayout>
        {/* <SectionContentLayout>
          <SmallPseudoHeader text="Product_Page_Template / part_2" />
        </SectionContentLayout> */}
      </PageContentLayout>

      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default ProductPageTemplate;
