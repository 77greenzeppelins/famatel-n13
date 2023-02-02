import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { wtyczkiGniazdaTablicowe_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_2_tablicowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import TablesSection from './tablesSection/TablesSection';

/**----------------------------------------**/
const GniazdaTablicoweContent: React.FunctionComponent<{
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
        //__data from "wtyczkiGniazdaTablicowe_tech_data"
        const ampersData = wtyczkiGniazdaTablicowe_tech_data[index].ampers;
        const polesNumber =
          wtyczkiGniazdaTablicowe_tech_data[index].poles.length;
        const polesData = wtyczkiGniazdaTablicowe_tech_data[index].poles;
        const bodyData = wtyczkiGniazdaTablicowe_tech_data[index].bodyData;
        const przewodData = wtyczkiGniazdaTablicowe_tech_data[index].mm;
        const wagaData = wtyczkiGniazdaTablicowe_tech_data[index].weight;
        const connectionTypeData =
          wtyczkiGniazdaTablicowe_tech_data[index].connectionType;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              {/* <SectionContentLayout></SectionContentLayout> */}
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-10 ">
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
                  />
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

export default GniazdaTablicoweContent;
