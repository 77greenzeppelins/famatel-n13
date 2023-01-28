import React from 'react';
/**Components**/
import ProductCardImageSection from '../imageSection/ProductCardImageSection';
import CardCounter from '../../../_cardCounter/CardCounter';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';

/**------------------------------------------------------------**/
const ProductCardGraphicSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  productIndex: number;
  imageAlt?: string;
}> = ({ imageData, productIndex, imageAlt }) => {
  /**JSX**/
  return (
    <div
      className="relative fc flex-col w-[98%] h-[98%] bg-light rounded-l-sm"
      //___flex items-center
    >
      <ProductCardImageSection imageData={imageData} />
      <div className="absolute top-0 w-full h-[10%]">
        <div className="relative fc w-full h-full ">
          <CardCounter
            arrayIndex={productIndex}
            containerStyle="flex justify-end items-end h-full w-[50%] pr-2 leading-none"
            textStyle="text-dark text-center opacity-70 group-hover:opacity-100 ease-in duration-300 header-link-label"
          />
          <div className="h-full w-[50%] border-l border-dark opacity-40 group-hover:opacity-100 ease-in duration-300" />
        </div>
      </div>
      <div className="absolute bottom-0 fc w-full h-[10%]">
        <div className="h-full w-[1px] border-l border-dark opacity-40 group-hover:opacity-100 ease-in duration-300" />
      </div>
    </div>
  );
};

export default ProductCardGraphicSection;
