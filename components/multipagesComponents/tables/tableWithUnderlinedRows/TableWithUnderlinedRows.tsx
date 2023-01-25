import React from 'react';
/**Components**/
import UnderlinedRow from './underlinedRow/UnderlinedRow';

/**-------------------------------------------------------**/
const TableWithUnderlinedRows: React.FunctionComponent<{
  rowsData: string[][];
  tableContainerStyle?: string;
  rowContainerStyle?: string;
  cellsStyles?: string[];
}> = ({ rowsData, tableContainerStyle, rowContainerStyle, cellsStyles }) => {
  /**JSX**/
  return (
    <div
      data-component="TableWithUnderlinedRows__container"
      className={
        tableContainerStyle
          ? tableContainerStyle
          : 'w-full flex flex-col gap-y-4'
      }
    >
      {rowsData.map((rowData, i) => (
        <UnderlinedRow
          key={i}
          rowData={rowData}
          rowContainerStyle={rowContainerStyle}
          cellsStyles={cellsStyles}
        />
      ))}
    </div>
  );
};

export default TableWithUnderlinedRows;
