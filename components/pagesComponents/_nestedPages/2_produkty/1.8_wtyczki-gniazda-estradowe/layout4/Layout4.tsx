import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import TableFrame from '../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';
import { wtyczkiGniazdaEstradowe_l4_feat_data } from '../../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_techSpec';
/**Tailwind Styles*/
import {
  tableTextM_Lg,
  aTopH_Lg,
  aSideHCenter_Lg,
  aBodyCell_Lg,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';

/**Hardcoded Staff**/
const headerGrid = 'grid grid-cols-[1fr_3fr]';
const mainGrid = 'grid grid-cols-[repeat(4,1fr)]';

/**-----------------------------------------------------------------------**/
const Layout4: React.FunctionComponent<{
  tableData: {
    line1: string[];
    line2: string[];
    tableBody: string[][];
  };
}> = ({ tableData }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l1}>
        <TableFrame sliderTriggersValue={'sm'}>
          <div className={headerGrid}>
            <div className="col-start-2">
              <div className={aTopH_Lg}>{tableData.line1}</div>
            </div>
          </div>
          <div className={mainGrid}>
            <RowWithSideHeader
              rowData={tableData.line2}
              customeHeader={aSideHCenter_Lg}
              customeCell={aSideHCenter_Lg}
            />
          </div>
          {tableData.tableBody.map((rowData, i) => (
            <div key={i} className={mainGrid}>
              <RowWithSideHeader
                rowData={rowData}
                customeHeader={aSideHCenter_Lg}
                customeCell={aBodyCell_Lg}
              />
            </div>
          ))}
        </TableFrame>
        <div>
          <p
            className={`${tableTextM_Lg} text-grey hover:text-light delay-100 duration-300 ease-in`}
          >
            * Możliwość montażu urządzeń na panelu przednim i tylnym. Śruby
            montażowe do panelu przedniego i tylnego wkręcane w metalowe gwinty
            co umożliwia wielokrotne odkręcanie
          </p>
        </div>
      </SectionWithTable>

      <SectionWithTable label={smallPseudoHeaders.l3}>
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazdaEstradowe_l4_feat_data}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default Layout4;

{
  /* <TableWithUnderlinedRows
  rowsData={wtyczkiGniazdaEstradowe_l1_feat1_data}
  cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
  textStyle={[tableTextStyle, tableTextStyle]}
/>; */
}
