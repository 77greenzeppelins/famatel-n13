import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import CatalogCardsSection from '../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { adapteryPrzemysloweWielokrotneKabel_tablesData } from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_3_wielokrotne-z-kablem_prodCat';

/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const AdapteryPrzemysloweWielokrotneKabelContent: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**Router Section**/
  const router = useRouter();
  /**JSX**/
  return (
    <>
      {productCardsData.map((productData, index) => {
        //__data from "productCardsData"
        const productPath = productData.path.split('/');
        const productPathPivotalPart = productPath[splitedPathParts.product];
        const productImage = productData.imageData;

        // //___data for "catalogTable"
        const catalogCardTablesData =
          adapteryPrzemysloweWielokrotneKabel_tablesData[index].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-10 ">
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%] ">
                  <div className="flex flex-col gap-10">
                    <CatalogCardsSection
                      catalogCardTablesData={
                        adapteryPrzemysloweWielokrotneKabel_tablesData[index]
                          .tablesData
                      }
                    />
                  </div>
                </div>
                <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto lg:min-h-[400px]  bg-grey">
                  <SquareHolderWithImage
                    imageData={productImage}
                    squareHolderOuterContainer="flex justify-center items-center w-full h-full bg-light"
                    //___items-start
                    squareHolderInnerContainer="relative overflow-hidden bg-light p-4"
                  />
                </div>
              </SectionContentLayout>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default AdapteryPrzemysloweWielokrotneKabelContent;
