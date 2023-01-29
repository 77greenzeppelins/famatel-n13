import React from 'react';
import Link from 'next/link';
/**Components**/
import SubCategoryCardContent from '../cardsContents/subCategoryCardContent/SubCategoryCardContent';
import CardFrame from '../__cardFrame/CardFrame';
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
        <CardFrame>
          <SubCategoryCardContent
            arrayIndex={arrayIndex}
            label={label}
            imageData={imageData}
            heightMattersCondition={heightMattersCondition}
          />
        </CardFrame>
      </Link>
    </div>
  );
};

export default Card_Basic;
