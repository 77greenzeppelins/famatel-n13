import React from 'react';
/**Components**/
import BasicCard from '../../cards/basicCard/BasicCard';
/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';

/**-------------------------------------**/
const SubCategoriesCatalog: React.FunctionComponent<{
  subCategoryData: {
    mainCategoryName: string;
    subcategoriesNames: string[];
    subcategoriesUrls: string[];
    imageData: IF_ImgStaticData[];
    // imageData: { image: StaticImageData }[]; // works...
  };
}> = ({ subCategoryData }) => {
  /**Props Destructurization*/
  const { mainCategoryName, subcategoriesNames, subcategoriesUrls, imageData } =
    subCategoryData;

  /**JSX**/
  return (
    <div className="flex flex-wrap xl:justify-start gap-4 xl:gap-10">
      {Array.from({ length: subcategoriesNames.length }).map((_, index) => (
        <div
          key={index}
          data-layout="ParentContainerForCard"
          className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]"
        >
          <BasicCard
            // key={item}
            arrayIndex={index}
            label={subcategoriesNames[index]}
            url={subcategoriesUrls[index]}
            imageData={imageData[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default SubCategoriesCatalog;
