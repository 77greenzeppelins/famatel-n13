import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { wtyczkiGniazdaNiskieNapiecia_tablesData } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_prodCat';
import { wtyczkiGniazdaNiskieNapiecia_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_techspec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const WtyczkiGniazdaNiskieNapieciaContent: React.FunctionComponent<{
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
        //__data from "wtyczkiGniazdaNiskieNapiecia_tech_data"
        const ampersData = wtyczkiGniazdaNiskieNapiecia_tech_data[index].ampers;
        const polesNumber =
          wtyczkiGniazdaNiskieNapiecia_tech_data[index].poles.length;
        const polesData = wtyczkiGniazdaNiskieNapiecia_tech_data[index].poles;
        const bodyData = wtyczkiGniazdaNiskieNapiecia_tech_data[index].bodyData;
        const przewodData = wtyczkiGniazdaNiskieNapiecia_tech_data[index].mm;
        const wagaData = wtyczkiGniazdaNiskieNapiecia_tech_data[index].weight;
        const connectionTypeData =
          wtyczkiGniazdaNiskieNapiecia_tech_data[index].connectionType;
        //___data for "catalogTable"
        const catalogCardTablesData =
          wtyczkiGniazdaNiskieNapiecia_tablesData[index].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              {/* <SectionContentLayout></SectionContentLayout> */}
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-12 xxl:flex-row xxl:gap-y-0 xxl:gap-x-10 ">
                <div className="flex flex-col gap-y-10 w-full xxl:w-[50%] ">
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
                <div className="w-full h-[40vh] sm:h-[50vh] xxl:w-[50%] xxl:h-auto xxl:min-h-[400px]  bg-grey">
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

export default WtyczkiGniazdaNiskieNapieciaContent;
