import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**...**/
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**...*/
import { undelinedTableTextStyle } from '../../../../../../utils/tailwindStyles';

/**---------------------------------------**/
const Layout2: React.FunctionComponent<{
  underlinedTableData: string[][];
}> = ({ underlinedTableData }) => {
  /**...**/

  /**JSX**/
  return (
    <AllTablesContainer>
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

export default Layout2;
