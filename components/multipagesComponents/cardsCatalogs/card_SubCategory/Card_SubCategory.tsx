import React from 'react';
/**Components**/
import GridItemCardLayout from '../_gridItemCardLayout/GridItemCardLayout';
import SubCategoryCardContent from '../cardsContents/subCategoryCardContent/SubCategoryCardContent';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';

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
      {/* <ProductCardContent productCardData={productCardData} /> */}
      <SubCategoryCardContent
        arrayIndex={arrayIndex}
        label={label}
        imageData={imageData}
        heightMattersCondition={heightMattersCondition}
      />
    </GridItemCardLayout>
  );
};

export default Card_SubCategory;
