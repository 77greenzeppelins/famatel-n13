import React from 'react';
/**Components**/
import GridItemCardLayout from '../_gridItemCardLayout/GridItemCardLayout';
import CardGraphicSection from '../__cardGraphicSection/CardGraphicSection';
import SmallPseudoHeader from '../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';

/**HardCoded Staff**/
const textStyle =
  'text-grey text-[0.825rem] xxxl:text-[1rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]';

/**-----------------------------------------------------------**/
const Card_SubCategory: React.FunctionComponent<IF_Card> = ({
  arrayIndex,
  label,
  url,
  imageData,
  heightMattersCondition,
}) => {
  /**JSX**/
  return (
    <GridItemCardLayout linkHref={url}>
      <div className="flex h-full ">
        <div className=" fc w-[50%] xs:w-[50%] md:max-w-[240px] h-full ">
          <CardGraphicSection imageData={imageData} productIndex={arrayIndex} />
        </div>
        <div className="fc w-[50%] h-full  pl-2">
          <div className="fc w-full h-full ">
            <SmallPseudoHeader text={label} textStyle={textStyle} />
          </div>
        </div>
      </div>
    </GridItemCardLayout>
  );
};

export default Card_SubCategory;
