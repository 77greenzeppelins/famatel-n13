import React from 'react';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import ProductCardGraphicSection from './graphicSection/ProductCardGraphicSection';
import ProductCardTextSection from './textSection/ProductCardTextSection';
// import LinkWithTextAndIcon from '../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';

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
      <div className=" fc w-[50%] max-w-[200px] xs:max-w-[210px] md:max-w-[240px] h-full ">
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
