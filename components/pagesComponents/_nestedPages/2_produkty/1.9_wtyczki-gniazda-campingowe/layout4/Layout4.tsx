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
    <div className="flex flex-col gap-10">
      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l2}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <div className={`flex flex-col  ${horizGap}`}>
          <div className={`grid grid-cols-[3fr_repeat(3,2fr)] ${vertGap}`}>
            <RowWithSideHeader
              rowData={tableData.tableHeader}
              customeHeader={'bg-dark'}
              customeCell={sideHeaderCellCenter}
            />
          </div>
          {tableData.tableBody2.map((rowData, i) => (
            <div
              key={i}
              className={`grid grid-cols-[3fr_6fr] ${vertGap} group`}
            >
              <RowWithSideHeader
                rowData={rowData}
                customeHeader={sideHeaderCellCenter}
                customeCell={bodyCell}
              />
            </div>
          ))}
          <div
            className={`grid grid-cols-[3fr_6fr] grid-rows-[1fr_1fr] ${vertGap} group`}
          >
            <div className="col-start-1 row-start-1 row-end-3">
              <div className={`${sideHeaderCellCenter} h-full`}>
                {tableData.tableBody1[0]}
              </div>
            </div>
            <div
              className={`col-start-2 col-span-full row-start-1 row-span-full ${horizGap}`}
            >
              <div
                className={`grid grid-cols-[repeat(3,2fr)] ${vertGap} group`}
              >
                <RowWithSideHeader
                  rowData={tableData.tableBody1[1]}
                  customeHeader={bodyCell}
                  customeCell={bodyCell}
                />
              </div>
              <div
                className={`grid grid-cols-[repeat(3,2fr)] ${vertGap} group`}
              >
                <RowWithSideHeader
                  rowData={tableData.tableBody1[2]}
                  customeHeader={bodyCell}
                  customeCell={bodyCell}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContentLayout>
      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l3}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <TableWithUnderlinedRows
          rowsData={underlinedTableData}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionContentLayout>{' '}
    </div>
  );
};

export default Layout4;