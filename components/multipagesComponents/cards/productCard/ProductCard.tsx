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
  /**JSX**/
  return (
    <div
      id="ProductCard__container"
      className="w-[80%] xs:w-[500px] h-[250px] cursor-pointer group disable"
    >
      <Link href={'./'} scroll={false}>
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
