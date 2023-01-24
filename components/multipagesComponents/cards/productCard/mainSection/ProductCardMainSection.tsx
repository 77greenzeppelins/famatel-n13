import React from 'react';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import ProductCardGraphicSection from './graphicSection/ProductCardGraphicSection';
import ProductCardTextSection from './textSection/ProductCardTextSection';
// import LinkWithTextAndIcon from '../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';

/**------------------------------------------------------------**/
const ProductCardMainSection: React.FunctionComponent<{
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
      <div className=" fc w-[40%] h-full ">
        <ProductCardGraphicSection
          imageData={imageData}
          productIndex={arrayIndex}
        />
      </div>
      <div className=" w-[60%] h-full">
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

export default ProductCardMainSection;
