import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import SvgTypeEU from '../../../../../SVG/flags/SvgTypeEU';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import BasicTable2 from '../../../../../multipagesComponents/tables/basicTable_2/BasicTable2';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**Tailwind Styles**/
import { undelinedTableTextStyle } from '../../../../../../utils/tailwindStyles';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import TableFrame from '../../../../../multipagesComponents/tables/_tableFrame/TableFrame';

/**--------------------------------------------**/
const Layout1: React.FunctionComponent<{
  index: number;
  tableHeaderData: string[];
  tableBodyData: string[][]; // array of rows; row is array of strings (cell's labels)
  underlinedTableData: string[][];
}> = ({ tableHeaderData, tableBodyData, underlinedTableData }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        {/* <div className="flex flex-col gap-y-4"> */}
        <TableFrame sliderTriggersValue={'vsm'}>
          <div className="grid grid-cols-[repeat(3,1fr)]">
            <div className="col-start-1 col-end-2">
              <TopHeader label="Standard:" containerStyle="h-full" />
            </div>
            <div className="col-start-2 col-end-4 border-x-1 border-dark">
              {' '}
              <SvgTypeEU />
            </div>
          </div>
          <BasicTable2
            tableHeaderData={tableHeaderData}
            tableBodyData={tableBodyData}
          />
        </TableFrame>
        {/* </div> */}
      </SectionWithTable>{' '}
      <SectionWithTable label={smallPseudoHeaders.l3}>
        <TableWithUnderlinedRows
          rowsData={underlinedTableData}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionWithTable>{' '}
    </AllTablesContainer>
  );
};

export default Layout1;
