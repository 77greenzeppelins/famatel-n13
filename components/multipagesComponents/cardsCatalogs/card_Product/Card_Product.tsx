import Link from 'next/link';
import React from 'react';
/**Components**/
import CardGraphicSection from '../__cardGraphicSection/CardGraphicSection';
import ProductCardTextSection from './textSection/ProductCardTextSection';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';
import CardFrame from '../__cardFrame/CardFrame';

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
    path,
  } = productCardData;

  /**JSX**/
  return (
    <div
      id="ProductCard__container"
      className="relative h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling"
    >
      <Link
        className="relative block z-10 w-full h-full"
        role="link"
        href={path}
        scroll={false}
        aria-label={`Karta produktu: ${model}`}
      />
      <div
        className="absolute inset-0 z-5"
        role="region"
        aria-label={`Tekstowo-graficzna zawartość karty produktu: ${model}`}
      >
        <CardFrame>
          <div className="flex h-full w-full">
            <div className=" fc w-[50%]  xs:w-[50%] md:max-w-[240px] h-full ">
              <CardGraphicSection
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
        </CardFrame>
      </div>
    </div>
  );
  // return (
  //   <GridItemCardLayout linkHref={productCardData.path}>
  //     <div className="flex h-full">
  //       <div className=" fc w-[50%]  xs:w-[50%] md:max-w-[240px] h-full ">
  //         <CardGraphicSection imageData={imageData} productIndex={arrayIndex} />
  //       </div>
  //       <div className=" w-[50%] h-full">
  //         <ProductCardTextSection
  //           textIcons={textIcons}
  //           productName={productName}
  //           type={type}
  //           collection={collection}
  //           model={model}
  //         />
  //       </div>
  //     </div>
  //     {/* <ProductCardContent productCardData={productCardData} /> */}
  //   </GridItemCardLayout>
  // );
};

export default Card_Product;

{
  /* 
  <div
  id="ProductCard__container"
  className="h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling"
>
  <Link href={linkHref} scroll={false}>
    <CardFrame>
      <div className="w-full h-full">{children}</div>
    </CardFrame>
  
  </Link>
</div>
 */
}
