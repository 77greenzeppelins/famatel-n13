import React from 'react';
/**Components**/
import TechSpecTableRow from './row/TechSpecTableRow';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
import TableFrame from '../../../../../../multipagesComponents/tables/_tableFrame/TableFrame';

/**-------------------------------**/
const TechSpecTable: React.FunctionComponent<{
  tableData: string[][];
  mainGrid?: string;
  headerCellsStyles?: string[];
}> = ({ tableData, mainGrid, headerCellsStyles }) => {
  /**...**/
  /**JSX*/
  return (
    <TableFrame sliderTriggersValue={'md'}>
      {tableData.map((rowData, i) => (
        <TechSpecTableRow
          key={i}
          labels={rowData}
          rowIndex={i}
          mainGrid={mainGrid}
          headerCellsStyles={headerCellsStyles}
        />
      ))}
    </TableFrame>
  );
};

export default TechSpecTable;
