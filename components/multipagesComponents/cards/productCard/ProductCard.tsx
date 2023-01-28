import Link from 'next/link';
import React from 'react';
/**Components**/
import CardFrame from '../_cardFrame/CardFrame';
import ProductCardMainSection from './mainSection/ProductCardMainSection';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

/**---------------------------------------------------**/
const ProductCard: React.FunctionComponent<{
  productCardData: IF_ProductCardData;
}> = ({ productCardData }) => {
  // console.log('productCardData', productCardData);
  /**JSX**/
  return (
    <div
      id="ProductCard__container"
      className="h-[200px] xs:h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling"
      // className="w-[98%] md:w-[47%] xl:w-[31.5%] xxl:w-[32%] h-[200px] xs:h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling"
    >
      <Link href={productCardData.path} scroll={false}>
        {/* <div className="relative w-full h-full"> */}
        <CardFrame>
          <div className="w-full h-full">
            <ProductCardMainSection productCardData={productCardData} />
          </div>
        </CardFrame>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default ProductCard;
