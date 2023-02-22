import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import TablesSection from './tablesSection/TablesSection';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import { wtyczkiGniazdaScienne_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_3_scienne_techSpec';
import { wtyczkiGniazdaScienne_tablesData } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_3_scienne_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';

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

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                {index < 18 && (
                  <TablesSection
                    productCardIndex={index}
                    polesNumber={
                      wtyczkiGniazdaScienne_tech_data[index].poles.length
                    }
                    polesData={wtyczkiGniazdaScienne_tech_data[index].poles}
                    ampersData={wtyczkiGniazdaScienne_tech_data[index].ampers}
                    bodyData={wtyczkiGniazdaScienne_tech_data[index].bodyData}
                    connectionTypeData={
                      wtyczkiGniazdaScienne_tech_data[index].connectionType
                    }
                    weightData={wtyczkiGniazdaScienne_tech_data[index].weight}
                    wireData={wtyczkiGniazdaScienne_tech_data[index].mm}
                    catalogCardTablesData={
                      wtyczkiGniazdaScienne_tablesData[index].tablesData
                    }
                  />
                )}
                {index > 17 &&
                  wtyczkiGniazdaScienne_tech_data[index].features && (
                    <SectionWithTable label={smallPseudoHeaders.l1}>
                      <TableWithUnderlinedRows
                        rowsData={
                          wtyczkiGniazdaScienne_tech_data[index].features
                        }
                        cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                        textStyle={[
                          undelinedTableTextStyle,
                          undelinedTableTextStyle,
                        ]}
                      />
                    </SectionWithTable>
                  )}
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaScienneContent;
