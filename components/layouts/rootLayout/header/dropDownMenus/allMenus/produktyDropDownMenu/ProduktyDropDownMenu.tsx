import React from 'react';
/**Components**/
import Card_Basic from '../../../../../../multipagesComponents/cardsCatalogs/card_Basic/Card_Basic';
import SpecialCard from './specialCard/SpecialCard';
/**BasicData**/
import { catalogStructureData } from '../../../../../../../data/_catalogStructure_data';
/**Tailwind**/
const basicTextStyle =
  ' text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300 ';
const normalCardTextStyle = `text-grey ${basicTextStyle}`;
const specialCardTextStyle = `text-greyShade2 ${basicTextStyle}`;

const largeTextStyle =
  'text-greyShade2 text-1xl sm:text-2xl xl:text-3xl tracking-[0.09rem]';

/**-------------------------------------------**/

const ProduktyDropDownMenu: React.FC = () => {
  /**JSX**/
  return (
    <div
      id="ProduktyDropDownMenu__griddedContainer"
      className="grid grid-rows-4 grid-cols-3 xs:grid-rows-3 xs:grid-cols-4 w-full h-full pt-[24px] pb-[4rem] px-[1rem] gap-[0.75rem]"
      //___place-items-stretch
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
            textStyle={normalCardTextStyle}
          />
        )
      )}

      <div className="col-start-2 xs:col-start-3 col-span-full ">
        <SpecialCard
          mediumTextStyle={specialCardTextStyle}
          largeTextStyle={largeTextStyle}
        />
      </div>
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
