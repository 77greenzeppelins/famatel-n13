import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**Tailwind Styles**/
import {
  vertGap,
  sideHeaderCellCenter,
  bodyCell,
  horizGap,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import BodyCell from '../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
import SideHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeader';

/**-----------------------------------------**/
const Layout4: React.FunctionComponent<{
  tableData: {
    tableHeader: string[];
    tableBody1: string[][];
    tableBody2: string[][];
  };
  underlinedTableData: string[][];
}> = ({ tableData, underlinedTableData }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <div className={`flex flex-col  ${horizGap}`}>
          <div className={`grid grid-cols-[3fr_repeat(3,2fr)]`}>
            {tableData.tableHeader.map((label, i) => {
              if (i === 0) {
                return <div key={i} className="bg-dark" />;
              }
              return <TopHeader key={i} label={label} />;
            })}
          </div>
          {tableData.tableBody2.map((rowData, i) => (
            <div key={i} className={`grid grid-cols-[3fr_6fr] group`}>
              <RowWithSideHeader
                rowData={rowData}
                customeHeader={sideHeaderCellCenter}
                customeCell={bodyCell}
              />
            </div>
          ))}
          <div
            className={`grid grid-cols-[3fr_6fr] grid-rows-[1fr_1fr]  group`}
          >
            <SideHeader
              label={tableData.tableBody1[0][0]}
              containerStyle="col-start-1 row-start-1 row-end-3"
            />
            <div
              className={`col-start-2 col-span-full row-start-1 row-span-full ${horizGap}`}
            >
              <div className={`grid grid-cols-[repeat(3,2fr)] group`}>
                {tableData.tableBody1[1].map((label, i) => {
                  return <BodyCell key={i} label={label} />;
                })}
              </div>

              <div className={`grid grid-cols-[repeat(3,2fr)]  group`}>
                {tableData.tableBody1[2].map((label, i) => {
                  return <BodyCell key={i} label={label} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionWithTable>
      <SectionWithTable label={smallPseudoHeaders.l3}>
        <TableWithUnderlinedRows
          rowsData={underlinedTableData}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default Layout4;
