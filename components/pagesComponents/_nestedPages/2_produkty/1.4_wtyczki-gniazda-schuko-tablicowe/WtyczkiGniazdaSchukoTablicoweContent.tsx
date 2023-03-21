import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';
import AllTablesContainer from '../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
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
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';

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
              <ProductContentLayout_B imageData={productImage}>
                <AllTablesContainer>
                  {index <= 5 && (
                    <>
                      <SectionWithTable label={smallPseudoHeaders.l1}>
                        <CatalogTable catalogData={catalogData} />
                      </SectionWithTable>
                      <SectionWithTable label={smallPseudoHeaders.l2}>
                        <TechSpecTable productTechData={productTechData} />
                      </SectionWithTable>
                      <SectionWithTable label={smallPseudoHeaders.l8}>
                        <ProtectionSection />
                      </SectionWithTable>
                    </>
                  )}
                  {index > 5 && index < 8 && (
                    <SectionWithTable label={smallPseudoHeaders.l1}>
                      <CatalogTable catalogData={catalogData} />
                    </SectionWithTable>
                  )}
                  {index === 8 && (
                    <>
                      <SectionWithTable label={smallPseudoHeaders.l2}>
                        <TechSpecTable productTechData={productTechData} />
                      </SectionWithTable>
                      <SectionWithTable label={smallPseudoHeaders.l3}>
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
                      </SectionWithTable>
                    </>
                  )}
                  {index === 9 && (
                    <SectionWithTable label={smallPseudoHeaders.l2}>
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
                    </SectionWithTable>
                  )}
                </AllTablesContainer>
              </ProductContentLayout_B>
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
