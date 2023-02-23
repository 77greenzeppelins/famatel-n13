import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import SideHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeader';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import BodyCell from '../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Styles**/
import {
  horizGap,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**HardCoded Data*/
const grid4Cells = `grid grid-cols-[3fr_repeat(3,2fr)]`;
const grid2Cells = `grid grid-cols-[3fr,6fr] `;

/**---------------------------------------**/
const Layout3: React.FunctionComponent<{
  tableData: {
    tableLine1: string[];
    tableLine2: string[];
    tableBody: (string[] | undefined)[];
  };
  underlinedTableData?: string[][];
}> = ({ tableData, underlinedTableData }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <div className={`flex flex-col ${horizGap}`}>
          <div className={grid4Cells}>
            {tableData.tableLine1.map((label, i) => {
              if (i === 0) {
                return <div key={i} className="bg-dark" />;
              }
              return <TopHeader key={i} label={label} />;
            })}
          </div>
          <div className={`${grid4Cells}  group`}>
            {tableData.tableLine2.map((label, i) => {
              if (i === 0) {
                return <SideHeader key={i} label={label} />;
              }
              return <BodyCell key={i} label={label} />;
            })}
          </div>
          {tableData.tableBody.map((rowData, i) => (
            <div key={i} className={grid2Cells}>
              <RowWithSideHeader rowData={rowData} />
            </div>
          ))}
        </div>
      </SectionWithTable>{' '}
      {underlinedTableData && (
        <SectionWithTable label={smallPseudoHeaders.l3}>
          <TableWithUnderlinedRows
            rowsData={underlinedTableData}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionWithTable>
      )}
    </AllTablesContainer>
  );
};
export default Layout3;
