import Link from 'next/link';
import React from 'react';
/**Components**/
import CardFrame from '../_cardFrame/CardFrame';
import CardCounter from '../_cardCounter/CardCounter';
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
          <div className="w-[10%] h-[80%] ">
            <CardCounter arrayIndex={productCardData.arrayIndex} />
          </div>

          <div className="w-[90%] h-full ">
            <ProductCardMainSection
              productId={productCardData.productId}
              productName={productCardData.productName}
              textIcons={productCardData.textIcons}
              imageData={productCardData.imageData}
              //   heightMattersCondition={heightMattersCondition}
            />
          </div>
        </CardFrame>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default ProductCard;
