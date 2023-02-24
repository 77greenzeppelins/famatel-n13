import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import DimensionTable from './dimensionTable/DimensionTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**Tailwind Styles**/
import {
  undelinedTableTextStyle,
  undelinedTableContainerStyle,
} from '../../../../../../utils/tailwindStyles';

/**------------------------------------------------**/
const TablesSection: React.FunctionComponent<{
  tablesHeaders: string[];
  tablesData: {
    label: string;
    value: string;
  }[][];
  generalDescription: string[][];
}> = ({ tablesData, tablesHeaders, generalDescription }) => {
  console.log('generalDescription:', generalDescription);
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        {tablesHeaders.map((header, index) => (
          <DimensionTable
            key={index}
            headerLabel={header}
            tableBodyData={tablesData[index]}
          />
        ))}
      </SectionWithTable>
      <SectionWithTable label={smallPseudoHeaders.l3}>
        <div>
          <TableWithUnderlinedRows
            rowsData={generalDescription}
            tableContainerStyle={undelinedTableContainerStyle}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </div>
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default TablesSection;
