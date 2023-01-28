import React from 'react';
/**Components**/
import GridedCatalogLayout from '../../cardsCatalogs/_gridedCatalogLayout/GridedCatalogLayout';
import ProductCard from '../../cardsCatalogs/card_Product/Card_Product';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

/**-----------------------------------------------------------**/
const ProductsCatalog: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**JSX**/
  return (
    <GridedCatalogLayout>
      {productCardsData.map((productCardData, index) => (
        <ProductCard key={index} productCardData={productCardData} />
      ))}
    </GridedCatalogLayout>
  );
};

export default ProductsCatalog;
