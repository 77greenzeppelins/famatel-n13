import React from 'react';
/**Components**/
import BasicTableBody from './body/BasicTableBody';
import BasicTableHeader from './header/BasicTableHeader';

/**---------------------------------------------------------------------**/
const BasicTable: React.FunctionComponent<{
  tableHeader?: string | string[];
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
}> = ({
  tableHeader,
  tableBodyData,
  multiCellsContainer,
  multiCellsCell,
  specialCases,
}) => {
  return (
    <div>
      <BasicTableHeader tableHeader={tableHeader} />{' '}
      <BasicTableBody
        tableBodyData={tableBodyData}
        multiCellsContainer={multiCellsContainer}
        multiCellsCell={multiCellsCell}
        specialCases={specialCases}
      />
    </div>
  );
};

export default BasicTable;
