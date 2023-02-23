import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';
import {
  wtyczkiGniazdaCampingowe_l5_tech_data,
  wtyczkiGniazdaCampingowe_l5_rest_data,
} from '../../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_techSpec';
/**Tailwind Styles*/
import {
  vertGap,
  sideHeaderCellCenter,
  bodyCell,
  horizGap,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';

/**-------------------------------**/
const Layout5 = () => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <div className={`flex flex-col  ${horizGap}`}>
          {wtyczkiGniazdaCampingowe_l5_tech_data.map((rowData, i) => (
            <div key={i} className={`grid grid-cols-[3fr_6fr] group`}>
              <RowWithSideHeader rowData={rowData} />
            </div>
          ))}
        </div>
      </SectionWithTable>
      <SectionWithTable label={smallPseudoHeaders.l3}>
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazdaCampingowe_l5_rest_data}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default Layout5;
