import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ProductCardGraphicSection from '../productCardContent/graphicSection/ProductCardGraphicSection';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';
/**HardCoded Staff**/
const textStyle =
  'text-[0.75rem] xs:text-[0.825rem] md:text-[0.75rem] xl:text-[0.625rem] xxxl:text-[0.825rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 text-grey text-left group-hover:text-light ease-in duration-300';
/**----------------------------------------------------------**/
const SubCategoryCardContent: React.FunctionComponent<{
  arrayIndex: number;
  label: string;
  imageData: IF_ImgStaticData;
  heightMattersCondition?: boolean;
}> = ({ arrayIndex, label, imageData, heightMattersCondition }) => {
  return (
    <div className="flex h-full ">
      <div className=" fc w-[50%]  xs:w-[50%] md:max-w-[240px] h-full ">
        <ProductCardGraphicSection
          imageData={imageData}
          productIndex={arrayIndex}
        />
      </div>
      <div className="fc w-[50%] h-full  pl-2">
        <div className="fc w-full h-full ">
          <SmallPseudoHeader text={label} textStyle={textStyle} />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCardContent;
