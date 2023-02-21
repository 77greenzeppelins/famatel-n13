import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import TechSpecTable from '../tables/table_1/TechSpecTable';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';
import SvgTypeEU from '../../../../../SVG/flags/SvgTypeEU';
import { aTopH_Lg } from '../../../../../../utils/tailwindStyles';
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
  // headerType, /'EU-IT' or 'EU'
  underlinedTableData,
}) => {
  /**JSX**/
  return (
    <div>
      {/**________Header section*/}

      {/**________Table section*/}
      <div className="flex flex-col gap-10">
        <SectionContentLayout divStyle="flex flex-col gap-y-8">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l2}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <div>
            <div className="grid grid-cols-[repeat(3,1fr)]">
              <div className="col-start-1 col-end-2">
                <div className={`${aTopH_Lg} h-full`}>Standard:</div>
              </div>
              <div className="col-start-2 col-end-4 border-x-1 border-dark">
                {' '}
                <SvgTypeEU />
              </div>
            </div>
            <TechSpecTable
              tableHeaderData={tableHeaderData}
              tableBodyData={tableBodyData}
            />
          </div>
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
