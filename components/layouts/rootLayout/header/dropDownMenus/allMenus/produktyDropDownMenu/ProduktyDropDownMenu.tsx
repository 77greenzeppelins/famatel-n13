import React from 'react';
/**Components**/
import Card_Basic from '../../../../../../multipagesComponents/cardsCatalogs/card_Basic/Card_Basic';
/**BasicData**/
import { catalogStructureData } from '../../../../../../../data/_catalogStructure_data';

/**---------------------------------------------------------------------------**/
const ProduktyDropDownMenu: React.FunctionComponent = () => {
  /*
  JSX
   */
  return (
    <div
      id="ProduktyDropDownMenu__griddedContainer"
      className="grid grid-rows-3 grid-cols-4 w-[100vw] h-[100%] pt-[24px] pb-[4rem] px-[0.5rem] gap-[0.75rem] place-items-stretch bg-dark"
    >
      {catalogStructureData.map(
        ({
          mainCategoryIndex,
          mainCategoryName,
          mainCategoryUrl,
          mainCategoryImage,
        }) => (
          <Card_Basic
            key={mainCategoryIndex}
            url={mainCategoryUrl}
            imageData={mainCategoryImage}
            arrayIndex={mainCategoryIndex}
            label={mainCategoryName}
            heightMattersCondition={true}
          />
        )
      )}
    </div>
  );
};

export default ProduktyDropDownMenu;

{
  /* {mainCategories.map(({ arrayIndex, name, url, image }) => (
        <div
          key={arrayIndex}
          className="w-full h-full"
          // onClick={onClickHandler}
        >
          <CategoryCard
            categoryCardData={{
              arrayIndex: arrayIndex,
              label: name,
              url: url,
              image: image,
            }}
          />
        </div>
      ))} */
}
