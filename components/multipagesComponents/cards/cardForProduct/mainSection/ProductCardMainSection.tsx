import React from 'react';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';
import ProductCardImageSection from './imageSection/ProductCardImageSection';
// import LinkWithTextAndIcon from '../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';

/**------------------------------------------------------------**/
const ProductCardMainSection: React.FunctionComponent<{
  productId: string;
  productName: string | string[];
  textIcons: string[];
  imageData: IF_ImgStaticData;
}> = ({ productId, productName, textIcons, imageData }) => {
  /**JSX**/
  return (
    <div className="flex h-full ">
      <div className="fc w-[40%] h-full">
        <ProductCardImageSection imageData={imageData} />
      </div>
      <div className="flex flex-col justify-center gap-10 w-[60%] h-full p-1">
        <div
          className="flex justify-evenly gap-2 flex-wrap"
          //___flex-wrap
        >
          {textIcons.map((textIcon, i) => (
            <div
              key={i}
              className="fc border border-light py-1 px-3 rounded-sm"
            >
              <p className="text-light text-center opacity-70 group-hover:opacity-100 ease-in duration-300 header-link-label">
                {textIcon}
              </p>
            </div>
          ))}
        </div>
        <div>
          {Array.isArray(productName) ? (
            productName.map((line, index) => (
              <p
                key={index}
                className="text-light text-center opacity-70 group-hover:opacity-100 ease-in duration-300 header-link-label"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-light text-center opacity-70 group-hover:opacity-100 ease-in duration-300 header-link-label">
              {productName}
            </p>
          )}
        </div>
        {/* <div>
          <LinkWithTextAndIcon
            linkHref={''}
            pLabel={'Specyfikacja techniczna'}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProductCardMainSection;
