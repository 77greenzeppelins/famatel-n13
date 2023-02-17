import React from 'react';
/**Tailwind Styles*/
import {
  bodyCell,
  horizGap,
  sideHeaderCellCenter,
  vertGap,
} from '../../../../../../utils/tailwindStyles';
/**HardCoded Data*/
const basicGrid = `grid grid-cols-[1fr_1fr] ${vertGap}  group`;

/**---------------------------------------------**/
const BasicTableRow: React.FunctionComponent<{
  rowData:
    | string[]
    | {
        label: string;
        value: string;
      };

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
      //___if rowData has type "{label: string, value: string}""
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
              : `grid grid-cols-[1fr_1fr] ${vertGap} group`
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
                className={index === 0 ? sideHeaderCellCenter : bodyCell}
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

// cellsContainersStyle?: [
//   'flex items-center h-full w-[50%] ',
//   'h-full w-[50%] px-4'
// ];

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
