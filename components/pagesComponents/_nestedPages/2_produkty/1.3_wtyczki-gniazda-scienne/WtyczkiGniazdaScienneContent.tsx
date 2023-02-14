import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { wtyczkiGniazdaScienne_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_3_scienne_techSpec';
import { wtyczkiGniazdaScienne_tablesData } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_3_scienne_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import { productPagesSectionContentLayout } from '../../../../../utils/tailwindStyles';

/**----------------------------------------**/
const WtyczkiGniazdaScienneContent: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**Router Section**/
  const router = useRouter();
  /**JSX**/
  return (
    <>
      {productCardsData.map((productData, index) => {
        const productPath = productData.path.split('/');
        const productPathPivotalPart = productPath[splitedPathParts.product];
        const productImage = productData.imageData;
        //__data from "wtyczkiGniazdaScienne_tech_data"
        const ampersData = wtyczkiGniazdaScienne_tech_data[index].ampers;
        const polesNumber = wtyczkiGniazdaScienne_tech_data[index].poles.length;
        const polesData = wtyczkiGniazdaScienne_tech_data[index].poles;
        const bodyData = wtyczkiGniazdaScienne_tech_data[index].bodyData;
        const przewodData = wtyczkiGniazdaScienne_tech_data[index].mm;
        const wagaData = wtyczkiGniazdaScienne_tech_data[index].weight;
        const connectionTypeData =
          wtyczkiGniazdaScienne_tech_data[index].connectionType;
        // //___data for "catalogTable"
        const catalogCardTablesData =
          wtyczkiGniazdaScienne_tablesData[index].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              {/* <SectionContentLayout></SectionContentLayout> */}
              <SectionContentLayout divStyle={productPagesSectionContentLayout}>
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%] ">
                  <TablesSection
                    productCardIndex={index}
                    polesNumber={polesNumber}
                    polesData={polesData}
                    ampersData={ampersData}
                    bodyData={bodyData}
                    connectionTypeData={connectionTypeData}
                    weightData={wagaData}
                    wireData={przewodData}
                    catalogCardTablesData={catalogCardTablesData}
                  />
                </div>
                <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto lg:min-h-[400px] ">
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

export default WtyczkiGniazdaScienneContent;
