import React from 'react';
/**Components*/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import {
  IF_ProductCardData,
  IF_CatalogStructureData,
} from '../../../utils/TS/typeScriptStaff';

/**---------------------------------**/
const ProductPageTemplate: React.FunctionComponent<{
  productData: IF_ProductCardData;
  catalogStructureData: IF_CatalogStructureData;
}> = ({ productData, catalogStructureData }) => {
  /**...WTF**/
  console.log('catalogStructureData:', catalogStructureData);
  // if
  /**Props destructuring**/
  const { arrayIndex, path, imageData, type, collection, model } = productData;

  /**JSX**/
  return (
    <div
      data-component="SubCategoryPageTemplate__container"
      className="w-screen inner-px-md-lg pt-[60px] bg-dark pb-[10vh]"
    >
      <PageContentLayout>
        <SectionContentLayout>
          <SmallPseudoHeader
            text={`Product_Page_Template / ${productData?.model}  `}
          />
        </SectionContentLayout>
        <SectionContentLayout>
          <SmallPseudoHeader text="Product_Page_Template / part_2" />
        </SectionContentLayout>
      </PageContentLayout>

      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default ProductPageTemplate;
