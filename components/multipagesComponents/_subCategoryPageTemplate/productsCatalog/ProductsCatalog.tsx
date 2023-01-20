import React from 'react';
/**Components**/
import ProductCard from '../../cards/productCard/ProductCard';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

/**-----------------------------------------------------------**/
const ProductsCatalog: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**JSX**/
  return (
    <div className="flex flex-wrap gap-6 w-full  ">
      {productCardsData.map((productCardData, index) => (
        <ProductCard key={index} productCardData={productCardData} />
      ))}
    </div>
  );
};

export default ProductsCatalog;
