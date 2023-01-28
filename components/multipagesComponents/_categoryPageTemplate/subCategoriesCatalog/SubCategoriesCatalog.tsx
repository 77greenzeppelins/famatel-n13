import React from 'react';
/**Components**/
import BasicCard from '../../cards/basicCard/BasicCard';
/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';
import GridedCatalogLayout from '../../cardsCatalogs/_gridedCatalogLayout/GridedCatalogLayout';
import Card_SubCategory from '../../cardsCatalogs/card_SubCategory/Card_SubCategory';

/**-------------------------------------**/
const SubCategoriesCatalog: React.FunctionComponent<{
  subCategoryData: {
    mainCategoryName: string;
    subCategoriesNames: string[];
    subCategoriesUrls: string[];
    imageData: IF_ImgStaticData[];
    // imageData: { image: StaticImageData }[]; // works...
  };
}> = ({ subCategoryData }) => {
  /**Props Destructurization*/
  const { mainCategoryName, subCategoriesNames, subCategoriesUrls, imageData } =
    subCategoryData;

  /**JSX**/
  return (
    // <div
    //   className="flex flex-wrap xl:justify-start gap-4 xl:gap-10"
    // >

    <GridedCatalogLayout>
      {Array.from({ length: subCategoriesNames.length }).map((_, index) => (
        <Card_SubCategory
          key={index}
          arrayIndex={index}
          label={subCategoriesNames[index]}
          url={subCategoriesUrls[index]}
          imageData={imageData[index]}
        />
        // <div
        //   key={index}
        //   data-layout="ParentContainerForCard"
        //   className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]"
        // >
        //   <BasicCard
        //     // key={item}
        //     arrayIndex={index}
        //     label={subCategoriesNames[index]}
        //     url={subCategoriesUrls[index]}
        //     imageData={imageData[index]}
        //   />
        // </div>
      ))}
    </GridedCatalogLayout>
    // </div>
  );
};

export default SubCategoriesCatalog;
