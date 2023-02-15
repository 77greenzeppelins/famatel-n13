import React from 'react';
/**Components**/
import TechSpecTableRow from './row/TechSpecTableRow';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';

/**-------------------------------**/
const TechSpecTable: React.FunctionComponent<{
  tableData: string[][];
  mainGrid?: string;
  headerCellsStyles?: string[];
}> = ({ tableData, mainGrid, headerCellsStyles }) => {
  /**...**/
  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horizGap} `}
    >
      {tableData.map((rowData, i) => (
        <TechSpecTableRow
          key={i}
          labels={rowData}
          rowIndex={i}
          mainGrid={mainGrid}
          headerCellsStyles={headerCellsStyles}
        />
      ))}
    </div>
  );
};

export default TechSpecTable;
