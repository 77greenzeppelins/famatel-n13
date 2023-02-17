import React from 'react';
import {
  sideHeaderCellCenter,
  topHeaderCell,
  vertGap,
} from '../../../../../utils/tailwindStyles';

/**-----------------------------------------------------**/
const BasicTableHeader: React.FunctionComponent<{
  tableHeader?: string | string[];
  headerContainerGrid?: string;
}> = ({ tableHeader, headerContainerGrid }) => {
  /**Handler**/
  const createCells = () => {
    if (!Array.isArray(tableHeader)) {
      //___if rowData has type "{label: string, value: string}""
      return (
        <div className={`grid grid-cols-[1fr] ${vertGap}  group`}>
          <div className={topHeaderCell}>{tableHeader} </div>
        </div>
      );
    } else {
      return (
        <div
          className={
            headerContainerGrid
              ? headerContainerGrid
              : `grid grid-cols-[1fr] ${vertGap} group`
          }
        >
          {tableHeader.map((cell, index) => {
            // if (rowIndex === specialCases?.index) {
            //   return (
            //     <div
            //       key={index}
            //       className={
            //         specialCases.cellsSpecialStyles
            //           ? specialCases.cellsSpecialStyles[index]
            //           : 'relative header-link-label text-dark '
            //       }
            //     >
            //       <p>{cell}</p>
            //     </div>
            //   );
            // }
            return (
              <div key={index} className={topHeaderCell}>
                <p>{cell}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };
  /**JSX**/
  return <>{createCells()}</>;
};

export default BasicTableHeader;
