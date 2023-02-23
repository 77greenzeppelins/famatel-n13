import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import TechSpecTable from '../tables/table_1/TechSpecTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data**/
import {
  wtyczkiGniazdaEstradowe_l1_feat1_data,
  wtyczkiGniazdaEstradowe_l1_feat2_data,
} from '../../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_techSpec';
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**Tailwind Styles*/
import { undelinedTableTextStyle } from '../../../../../../utils/tailwindStyles';

/**--------------------------------------------**/
const Layout1: React.FunctionComponent<{
  index: number;
  tableData: string[][];
}> = ({ index, tableData }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <TechSpecTable tableData={tableData} />
      </SectionWithTable>

      {index < 2 ? (
        <SectionWithTable label={smallPseudoHeaders.l3}>
          <TableWithUnderlinedRows
            rowsData={wtyczkiGniazdaEstradowe_l1_feat1_data}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionWithTable>
      ) : (
        <SectionWithTable label={smallPseudoHeaders.l3}>
          <TableWithUnderlinedRows
            rowsData={wtyczkiGniazdaEstradowe_l1_feat2_data}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionWithTable>
      )}
    </AllTablesContainer>
  );
};

export default Layout1;
