import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import AllTablesContainer from '../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import CatalogCardsSection from '../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  adapteryPrzemysloweWielokrotneKabel_tablesData,
  adapteryPrzemysloweWielokrotneKabel_feat_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_3_wielokrotne-z-kablem_prodCat';

/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';

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
        //___data for "catalogTable"
        const catalogCardTablesData =
          adapteryPrzemysloweWielokrotneKabel_tablesData[index].tablesData;
        //___data for underlinedTable
        const underlinedTableData =
          adapteryPrzemysloweWielokrotneKabel_feat_data[index];
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                <AllTablesContainer>
                  <SectionWithTable label={smallPseudoHeaders.l1}>
                    <CatalogCardsSection
                      catalogCardTablesData={catalogCardTablesData}
                    />
                  </SectionWithTable>

                  <SectionWithTable label={smallPseudoHeaders.l3}>
                    <TableWithUnderlinedRows
                      rowsData={underlinedTableData}
                      cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                      textStyle={[
                        undelinedTableTextStyle,
                        undelinedTableTextStyle,
                      ]}
                    />
                  </SectionWithTable>
                </AllTablesContainer>
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default AdapteryPrzemysloweWielokrotneKabelContent;
