import React from 'react';
import {
  bodyCell,
  horizGap,
  sideHeaderCellCenter,
  vertGap,
} from '../../../../../../utils/tailwindStyles';

const BasicTableRow: React.FunctionComponent<{
  rowData:
    | string[]
    | {
        label: string;
        value: string;
      };
  cellsContainersStyle?: [
    'flex items-center h-full w-[50%] ',
    'h-full w-[50%] px-4'
  ];
  rowIndex: number;
  multiCellsContainer?: string;
  multiCellsCell?: string[];
  specialCases?: {
    index: number;
    containerSpecialStyle: string;
    cellsSpecialStyles: string[];
  };
}> = ({
  rowData,
  multiCellsContainer,
  multiCellsCell,
  specialCases,
  rowIndex,
}) => {
  /**Handler**/
  const createCells = () => {
    if (!Array.isArray(rowData)) {
      //___if rowData haz type "string[]""
      return (
        <div className={`grid grid-cols-[1fr_1fr] ${vertGap}  group`}>
          <div className={sideHeaderCellCenter}>{rowData.label} </div>
          <div className={bodyCell}> {rowData.value}</div>
        </div>
      );
    } else {
      return (
        <div
          className={
            multiCellsContainer
              ? multiCellsContainer
              : 'relative flex justify-between items-center w-full py-2 group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300 divide-x-2 divide-dark'
          }
        >
          {rowData.map((cell, index) => {
            if (rowIndex === specialCases?.index) {
              return (
                <div
                  key={index}
                  className={
                    specialCases.cellsSpecialStyles
                      ? specialCases.cellsSpecialStyles[index]
                      : 'relative header-link-label text-dark '
                  }
                >
                  <p>{cell}</p>
                </div>
              );
            }
            return (
              <div
                key={index}
                className={
                  multiCellsCell
                    ? multiCellsCell[index]
                    : 'relative header-link-label text-dark '
                }
              >
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

export default BasicTableRow;

{
  /* <div
  className="relative fc w-[500px] py-2 group bg-greyTint2 border-2 border-dark hover:border-light hover:bg-light ease-in duration-300"
  key={header}
>
  <p className="relative header-link-label text-dark ">{header}</p>
</div>; */
}

// rowData.map((cell, index) => (
//   <div
//     className="relative fc w-[500px] py-2 group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300"
//     key={index}
//   >
//     <p className="relative header-link-label text-dark ">{cell}</p>
//   </div>
// ));
