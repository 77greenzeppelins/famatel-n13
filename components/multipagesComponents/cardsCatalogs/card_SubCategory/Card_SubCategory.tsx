import Link from 'next/link';
import React from 'react';
/**Components**/
import GridItemCardLayout from '../_gridItemCardLayout/GridItemCardLayout';
import CardGraphicSection from '../__cardGraphicSection/CardGraphicSection';
import SmallPseudoHeader from '../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';
import CardFrame from '../__cardFrame/CardFrame';

/**HardCoded Staff**/
const textStyle =
  'text-grey text-[0.825rem] xxxl:text-[1rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]';

/**-----------------------------------------------------------**/
const Card_SubCategory: React.FC<IF_Card> = ({
  arrayIndex,
  label,
  url,
  imageData,
}) => {
  /**JSX**/
  return (
    <div
      id="ProductCard__container"
      className="relative h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling"
    >
      <Link
        className="relative block z-10 w-full h-full"
        role="link"
        href={url}
        scroll={false}
        aria-label={`Karta produktu: ${label}`}
      ></Link>
      <div
        className="absolute inset-0 z-5"
        role="region"
        aria-label={`Tekstowo-graficzna zawartość karty produktu: ${label}`}
      >
        <CardFrame>
          <div className="flex h-full w-full">
            <div className=" fc w-[50%] xs:w-[50%] md:max-w-[240px] h-full">
              <CardGraphicSection
                imageData={imageData}
                productIndex={arrayIndex}
              />
            </div>
            <div className="fc w-[50%] h-full pl-2">
              <div className="flex items-center justify-start w-full h-full">
                <SmallPseudoHeader text={label} textStyle={textStyle} />
              </div>
            </div>
          </div>
        </CardFrame>
      </div>
    </div>
  );
  // return (
  //   <GridItemCardLayout linkHref={url}>
  //     <div className="flex h-full ">
  //       <div className=" fc w-[50%] xs:w-[50%] md:max-w-[240px] h-full ">
  //         <CardGraphicSection imageData={imageData} productIndex={arrayIndex} />
  //       </div>
  //       <div className="fc w-[50%] h-full  pl-2">
  //         <div className="fc w-full h-full ">
  //           <SmallPseudoHeader text={label} textStyle={textStyle} />
  //         </div>
  //       </div>
  //     </div>
  //   </GridItemCardLayout>
  // );
};

export default Card_SubCategory;

{
  /* <div className="fc w-[50%] h-full  pl-2">
  <div className="fc w-full h-full ">
    <SmallPseudoHeader text={label} textStyle={textStyle} />
  </div>
</div>; */
}
