import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Styles**/
import {
  vertGap,
  horizGap,
  sideHeaderCell,
  sideHeaderCellCenter,
  bodyCell,
} from '../../../../../../utils/tailwindStyles';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**HardCoded Data*/
const grid4Cells = `grid grid-cols-[3fr_repeat(3,2fr)] ${vertGap}`;
const grid2Cells = `grid grid-cols-[3fr,6fr] ${vertGap} group`;
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';

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
    <div className="flex flex-col gap-10">
      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l2}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <div className={`flex flex-col ${horizGap}`}>
          <div className={grid4Cells}>
            {tableData.tableLine1.map((label, i) => {
              if (i === 0) {
                return <div key={i} className="bg-dark" />;
              }
              return (
                <div key={i} className={sideHeaderCellCenter}>
                  {label}{' '}
                </div>
              );
            })}
          </div>
          <div className={`${grid4Cells}  group`}>
            {tableData.tableLine2.map((label, i) => {
              if (i === 0) {
                return (
                  <div key={i} className={sideHeaderCell}>
                    {' '}
                    <p>{label}</p>{' '}
                  </div>
                );
              }
              return (
                <div key={i} className={bodyCell}>
                  <p>{label}</p>{' '}
                </div>
              );
            })}
          </div>
          {tableData.tableBody.map((rowData, i) => (
            <div key={i} className={grid2Cells}>
              <RowWithSideHeader rowData={rowData} />
            </div>
          ))}
          {/* </div> */}
        </div>
      </SectionContentLayout>{' '}
      {underlinedTableData && (
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
        </SectionContentLayout>
      )}
    </div>
  );
};
export default Layout3;
