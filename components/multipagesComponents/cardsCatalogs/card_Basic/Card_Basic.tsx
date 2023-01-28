// import React from 'react'

// const CardBasic = () => {
//   return (
//     <div>CardBasic</div>
//   )
// }

import React from 'react';
import Link from 'next/link';
/**Components**/
import SubCategoryCardContent from '../cardsContents/subCategoryCardContent/SubCategoryCardContent';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';

/**-----------------------------------------------------------**/
const Card_Basic: React.FunctionComponent<IF_Card> = ({
  arrayIndex,
  label,
  url,
  imageData,
  heightMattersCondition,
}) => {
  /**JSX**/
  return (
    <div
      id="Card_Basic__container"
      className="w-full h-full cursor-pointer group"
    >
      <Link href={url} scroll={false}>
        {/* <ProductCardContent productCardData={productCardData} /> */}
        <SubCategoryCardContent
          arrayIndex={arrayIndex}
          label={label}
          imageData={imageData}
          heightMattersCondition={heightMattersCondition}
        />
      </Link>
    </div>
  );
};

export default Card_Basic;
