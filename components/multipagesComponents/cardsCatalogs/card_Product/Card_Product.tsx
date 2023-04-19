import Link from 'next/link';
import React from 'react';
/**Components**/
import GridItemCardLayout from '../_gridItemCardLayout/GridItemCardLayout';
import CardGraphicSection from '../__cardGraphicSection/CardGraphicSection';
import ProductCardTextSection from './textSection/ProductCardTextSection';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

/**---------------------------------------------------**/
const Card_Product: React.FunctionComponent<{
  productCardData: IF_ProductCardData;
}> = ({ productCardData }) => {
  const {
    imageData,
    arrayIndex,
    textIcons,
    productName,
    type,
    collection,
    model,
  } = productCardData;

  /**JSX**/
  return (
    <GridItemCardLayout linkHref={productCardData.path}>
      <div className="flex h-full">
        <div className=" fc w-[50%]  xs:w-[50%] md:max-w-[240px] h-full ">
          <CardGraphicSection imageData={imageData} productIndex={arrayIndex} />
        </div>
        <div className=" w-[50%] h-full">
          <ProductCardTextSection
            textIcons={textIcons}
            productName={productName}
            type={type}
            collection={collection}
            model={model}
          />
        </div>
      </div>
      {/* <ProductCardContent productCardData={productCardData} /> */}
    </GridItemCardLayout>
  );
};

export default Card_Product;
