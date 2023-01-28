import Link from 'next/link';
import React from 'react';
/**Components**/
import GridItemCardLayout from '../_gridItemCardLayout/GridItemCardLayout';
import ProductCardContent from '../cardsContents/productCardContent/ProductCardContent';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

/**---------------------------------------------------**/
const Card_Product: React.FunctionComponent<{
  productCardData: IF_ProductCardData;
}> = ({ productCardData }) => {
  /**JSX**/
  return (
    <GridItemCardLayout linkHref={productCardData.path}>
      <ProductCardContent productCardData={productCardData} />
    </GridItemCardLayout>
  );
};

export default Card_Product;
