import React from 'react';

const ProduktyDropDownMenu = () => {
  /*
  JSX
   */
  return (
    <div
      id="ProduktyDropDownMenu__griddedContainer"
      className="grid grid-rows-3 grid-cols-4 w-[100vw] h-[100%] pt-[24px] pb-[4rem] px-[0.5rem] gap-[0.75rem] place-items-stretch"
    >
      {/* {mainCategories.map(({ arrayIndex, name, url, image }) => (
        <div
          key={arrayIndex}
          className="w-full h-full"
          // onClick={onClickHandler}
        >
          <CardOfDropDownMenu
            mainCategoriesData={{
              arrayIndex: arrayIndex,
              name: name,
              fullName: name,
              url: url,
              image: image,
            }}
          />
        </div>
      ))} */}
    </div>
  );
};

export default ProduktyDropDownMenu;
