import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TechSpecTable from './techSpecTable/TechSpecTable';
import CatalogTable from './catalogTable/CatalogTable';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import ProtectionSection from './protectionSection/ProtectionSection';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import { wtyczkiGniazdaSchukoTablicowe_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_techSpec';
import { wtyczkiGniazdaSchukoTablicowe_catalog_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_4_tablicowe-jednofazowe_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import {
  productPagesSectionContentLayout,
  undelinedTableTextStyle,
} from '../../../../../utils/tailwindStyles';

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
              <SectionContentLayout divStyle={productPagesSectionContentLayout}>
                <div className="flex flex-col gap-y-10 lg:gap-y-20 w-full lg:w-[50%] ">
                  {index < 6 && (
                    <>
                      <SectionContentLayout divStyle="flex flex-col gap-y-6">
                        <SmallPseudoHeader
                          text={smallPseudoHeaders.l1}
                          hasBox={true}
                          hasVerticalOrnament={false}
                        />
                        <CatalogTable catalogData={catalogData} />
                      </SectionContentLayout>
                      <SectionContentLayout divStyle="flex flex-col gap-y-6">
                        <SmallPseudoHeader
                          text={smallPseudoHeaders.l2}
                          hasBox={true}
                          hasVerticalOrnament={false}
                        />
                        <TechSpecTable productTechData={productTechData} />
                      </SectionContentLayout>
                    </>
                  )}
                  {index > 5 && index < 8 && (
                    <SectionContentLayout divStyle="flex flex-col gap-y-6">
                      <SmallPseudoHeader
                        text={smallPseudoHeaders.l1}
                        hasBox={true}
                        hasVerticalOrnament={false}
                      />
                      <CatalogTable catalogData={catalogData} />
                    </SectionContentLayout>
                  )}
                  {index === 8 && (
                    <>
                      <SectionContentLayout divStyle="flex flex-col gap-y-6">
                        <SmallPseudoHeader
                          text={smallPseudoHeaders.l2}
                          hasBox={true}
                          hasVerticalOrnament={false}
                        />
                        <TechSpecTable productTechData={productTechData} />
                      </SectionContentLayout>
                      <SectionContentLayout divStyle="flex flex-col gap-y-8">
                        <SmallPseudoHeader
                          text={smallPseudoHeaders.l3}
                          hasBox={true}
                          hasVerticalOrnament={false}
                        />
                        <TableWithUnderlinedRows
                          rowsData={
                            wtyczkiGniazdaSchukoTablicowe_tech_data[index]
                              .features
                          }
                          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                          textStyle={[
                            undelinedTableTextStyle,
                            undelinedTableTextStyle,
                          ]}
                        />
                      </SectionContentLayout>
                    </>
                  )}
                  {index === 9 && (
                    <>
                      <SectionContentLayout divStyle="flex flex-col gap-y-8">
                        <SmallPseudoHeader
                          text={smallPseudoHeaders.l3}
                          hasBox={true}
                          hasVerticalOrnament={false}
                        />
                        <TableWithUnderlinedRows
                          rowsData={
                            wtyczkiGniazdaSchukoTablicowe_tech_data[index]
                              .features
                          }
                          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                          textStyle={[
                            undelinedTableTextStyle,
                            undelinedTableTextStyle,
                          ]}
                        />
                      </SectionContentLayout>
                    </>
                  )}
                </div>
                <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto lg:min-h-[400px]">
                  <SquareHolderWithImage
                    imageData={productImage}
                    squareHolderOuterContainer="flex justify-center items-center w-full h-full bg-light"
                    //___items-start
                    squareHolderInnerContainer="relative overflow-hidden bg-light p-4"
                  />
                </div>
              </SectionContentLayout>
              {index < 6 ? <ProtectionSection /> : null}
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
