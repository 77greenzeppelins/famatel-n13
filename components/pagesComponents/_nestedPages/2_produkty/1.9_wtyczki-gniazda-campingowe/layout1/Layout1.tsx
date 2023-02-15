import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import TechSpecTable from '../tables/table_1/TechSpecTable';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**HardCoded Data**/
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';

/**--------------------------------------------**/
const Layout1: React.FunctionComponent<{
  index: number;
  tableHeaderData: string[];
  tableBodyData: string[][]; // array of rows; row is array of strings (cell's labels)
  headerType: { type: string };
  underlinedTableData: string[][];
}> = ({
  index,
  tableHeaderData,
  tableBodyData,
  headerType,
  underlinedTableData,
}) => {
  /**JSX**/
  return (
    <div>
      {/**________Header section*/}
      {/* <div className="w-full h-10 bg-vY" /> */}
      {/**________Table section*/}
      <div className="flex flex-col gap-10">
        <SectionContentLayout divStyle="flex flex-col gap-y-8">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l2}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <TechSpecTable
            tableHeaderData={tableHeaderData}
            tableBodyData={tableBodyData}
          />
        </SectionContentLayout>{' '}
        <SectionContentLayout divStyle="flex flex-col gap-y-8">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l3}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <TableWithUnderlinedRows
            rowsData={underlinedTableData}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[tableTextStyle, tableTextStyle]}
          />
        </SectionContentLayout>{' '}
      </div>
    </div>
  );
};

export default Layout1;
