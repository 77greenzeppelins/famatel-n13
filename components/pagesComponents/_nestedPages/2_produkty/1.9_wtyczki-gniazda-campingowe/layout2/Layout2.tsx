import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**...**/
import {
  vertGap,
  horizGap,
  sideHeaderCell,
  bodyCell,
  blueHeaderStyle,
  blueCellStyle,
} from '../../../../../../utils/tailwindStyles';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**...*/
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';

/**---------------------------------------**/
const Layout2: React.FunctionComponent<{
  underlinedTableData: string[][];
}> = ({ underlinedTableData }) => {
  /**...**/

  /**JSX**/
  return (
    <div className="flex flex-col gap-10">
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
  );
};

export default Layout2;
