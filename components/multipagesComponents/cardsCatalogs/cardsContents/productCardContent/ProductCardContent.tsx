import React from 'react';
/**Components**/
import ProductCardGraphicSection from './graphicSection/ProductCardGraphicSection';
import ProductCardTextSection from './textSection/ProductCardTextSection';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**------------------------------------------------------------**/
const ProductCardContent: React.FunctionComponent<{
  productCardData: IF_ProductCardData;
}> = ({ productCardData }) => {
  /**...*/
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
    <div className="flex h-full ">
      <div className=" fc w-[50%]  xs:w-[50%] md:max-w-[240px] h-full ">
        <ProductCardGraphicSection
          imageData={imageData}
          productIndex={arrayIndex}
        />
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
  );
};

export default ProductCardContent;
