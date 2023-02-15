import React from 'react';
/**Components**/
import BasicTableRow from './row/BasicTableRow';
/**Tailwind Styles**/
import { horizGap } from '../../../../../utils/tailwindStyles';

/**-------------------------------------------------**/
const BasicTableBody: React.FunctionComponent<{
  tableBodyData?:
    | {
        label: string;
        value: string;
      }[]
    | string[][];
  multiCellsContainer?: string;
  multiCellsCell?: string[];
  specialCases?: {
    index: number;
    containerSpecialStyle: string;
    cellsSpecialStyles: string[];
  };
}> = ({ tableBodyData, multiCellsContainer, multiCellsCell, specialCases }) => {
  /**JSX**/
  return (
    <div className={`${horizGap}`}>
      {tableBodyData?.map((rowData, index) => (
        <BasicTableRow
          key={index}
          rowIndex={index}
          rowData={rowData}
          multiCellsContainer={multiCellsContainer}
          multiCellsCell={multiCellsCell}
          specialCases={specialCases}
        />
      ))}
    </div>
  );
};

export default BasicTableBody;
