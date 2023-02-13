import React from 'react';
import BodyRow from './bodyRow/BodyRow';

/**--------------------------------------------------**/
const FixedTableBody_2: React.FunctionComponent<{
  tableBody: (string | string[])[][];
  rowMainGrid: string;
  sideHeaderCell: string;
  bodyCell: string;
}> = ({ tableBody, rowMainGrid, sideHeaderCell, bodyCell }) => {
  /**JSX**/
  return (
    <>
      {
        /**
        "TableBody" is actually a set of "grided rows"; it means we don't create any specified / dedicated   container; 
        */
        tableBody.map((rowData, index) => (
          <BodyRow
            key={index}
            rowData={rowData}
            index={index}
            rowMainGrid={rowMainGrid}
            bodyCell={bodyCell}
            sideHeaderCell={sideHeaderCell}
          />
        ))
      }
    </>
  );
};

export default FixedTableBody_2;
