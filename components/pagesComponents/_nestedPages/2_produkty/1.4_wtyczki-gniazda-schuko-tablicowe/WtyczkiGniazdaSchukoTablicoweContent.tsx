import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import TechSpecTable from './techSpecTable/TechSpecTable';
import CatalogTable from './catalogTable/CatalogTable';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { wtyczkiGniazdaSchukoTablicowe_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_techSpec';
import { wtyczkiGniazdaSchukoTablicowe_catalog_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import ProtectionSection from './protectionSection/ProtectionSection';

/**----------------------------------------**/
const WtyczkiGniazdaSchukoTablicoweContent: React.FunctionComponent<{
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
        const productTechData = wtyczkiGniazdaSchukoTablicowe_tech_data[index];
        const catalogData = wtyczkiGniazdaSchukoTablicowe_catalog_data[index];
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              {/* <SectionContentLayout></SectionContentLayout> */}
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-10 ">
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%] ">
                  <CatalogTable catalogData={catalogData} />
                  <TechSpecTable productTechData={productTechData} />
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
              {index < 3 ? <ProtectionSection /> : null}
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaSchukoTablicoweContent;

//__data from "wtyczkiGniazdaSchukoTablicowe_tech_data"
// const ampersData =
//   wtyczkiGniazdaSchukoTablicowe_tech_data[index].ampers;
// const polesNumber =
//   wtyczkiGniazdaSchukoTablicowe_tech_data[index].poles.length;
// const polesData = wtyczkiGniazdaSchukoTablicowe_tech_data[index].poles;
// const bodyData =
//   wtyczkiGniazdaSchukoTablicowe_tech_data[index].bodyData;
// const przewodData = wtyczkiGniazdaSchukoTablicowe_tech_data[index].mm;
// const wagaData = wtyczkiGniazdaSchukoTablicowe_tech_data[index].weight;
// const connectionTypeData =
//   wtyczkiGniazdaSchukoTablicowe_tech_data[index].connectionType;