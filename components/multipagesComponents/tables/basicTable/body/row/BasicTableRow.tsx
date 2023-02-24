import React from 'react';
/**Tailwind Styles*/
import RowWithSideHeader from '../../../diyTable/rowWithSideHeader/RowWithSideHeader';
import BodyCell from '../../../__cells/layoutXL/BodyCell';
import SideHeaderCenter from '../../../__cells/layoutXL/SideHeaderCenter';
/**HardCoded Data*/
const basicGrid_2 = `grid grid-cols-[1fr_1fr] group`;
const basicGrid_3 = `grid grid-cols-[1fr_1fr_1fr] group`;

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
  specialGrid?: string;
  centerRowHeader?: boolean;
}> = ({ rowData, specialGrid, centerRowHeader }) => {
  /**Handler**/
  const createCells = () => {
    if (rowData && !Array.isArray(rowData)) {
      //___if rowData has type "{label: string, value: string}""
      return (
        <div className={basicGrid_2}>
          <SideHeaderCenter label={rowData.label} />
          <BodyCell label={rowData.value} />
        </div>
      );
    }
    if (rowData && rowData.length === 2) {
      return (
        <div className={basicGrid_2}>
          <RowWithSideHeader rowData={rowData} centered={centerRowHeader} />{' '}
        </div>
      );
    }
    return (
      <div className={specialGrid ? specialGrid : basicGrid_3}>
        <RowWithSideHeader rowData={rowData} centered={centerRowHeader} />{' '}
      </div>
    );
  };

  /**JSX**/
  return <>{createCells()}</>;
};

export default BasicTableRow;

// <div
//   className={
//     multiCellsContainer
//       ? multiCellsContainer
//       : `grid grid-cols-[1fr_1fr] ${vertGap} group`
//   }
// >
//   {rowData.map((cell, index) => {
//     if (rowIndex === specialCases?.index) {
//       return (
//         <div
//           key={index}
//           className={
//             specialCases.cellsSpecialStyles
//               ? specialCases.cellsSpecialStyles[index]
//               : 'relative header-link-label text-dark '
//           }
//         >
//           <p>{cell}</p>
//         </div>
//       );
//     }
//     return (
//       <div
//         key={index}
//         className={index === 0 ? sideHeaderCellCenter : bodyCell}
//       >
//         <p>{cell}</p>
//       </div>
//     );
//   })}
// </div>

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
