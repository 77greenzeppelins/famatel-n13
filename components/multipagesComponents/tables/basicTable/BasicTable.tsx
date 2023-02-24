import React from 'react';
/**Components**/
import BasicTableHeader from './header/BasicTableHeader';
import BasicTableBody from './body/BasicTableBody';
/**Tailwind Styles*/
import { horizGap } from '../../../../utils/tailwindStyles';

/**
 * used in: 8.1_obudowy-puste / TablesSection / ...
 *
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
  specialCases?: {
    index: number;
    containerSpecialStyle: string;
    cellsSpecialStyles: string[];
  };
}> = ({
  tableHeader,
  tableBodyData,
  multiCellsContainer,
  headerContainerGrid,
  multiCellsCell,
  specialCases,
}) => {
  return (
    <div className={`${horizGap}`}>
      <BasicTableHeader
        tableHeader={tableHeader}
        headerContainerGrid={headerContainerGrid}
      />{' '}
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
