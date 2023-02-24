import React from 'react';
/**Components**/
import BasicTableHeader from './header/BasicTableHeader';
import BasicTableBody from './body/BasicTableBody';
/**Tailwind Styles*/
import { horizGap } from '../../../../utils/tailwindStyles';

/*
used in: 9.1_puszki-zamykane / TablesSection / ...
*/
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
  headerContainerGrid?: string;
  multiCellsCell?: string[];
  //___???
  specialCases?: {
    index: number;
    containerSpecialStyle: string;
    cellsSpecialStyles: string[];
  };
  centerRowHeader?: boolean;
}> = ({
  tableHeader,
  tableBodyData,
  multiCellsContainer,
  // headerContainerGrid,
  multiCellsCell,
  specialCases,
  centerRowHeader,
}) => {
  return (
    <div className={`${horizGap}`}>
      <BasicTableHeader tableHeader={tableHeader} />{' '}
      <BasicTableBody
        tableBodyData={tableBodyData}
        multiCellsContainer={multiCellsContainer}
        multiCellsCell={multiCellsCell}
        specialCases={specialCases}
        centerRowHeader={centerRowHeader}
      />
    </div>
  );
};

export default BasicTable;
