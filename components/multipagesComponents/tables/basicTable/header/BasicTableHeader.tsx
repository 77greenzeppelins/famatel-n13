import React from 'react';
import { topHeaderCell, vertGap } from '../../../../../utils/tailwindStyles';
import BodyCell from '../../__cells/layoutXL/BodyCell';
import SideHeaderCenter from '../../__cells/layoutXL/SideHeaderCenter';
/**Components*/
import TopHeader from '../../__cells/layoutXL/TopHeader';
/**HardCoded Data*/
const basicGrid_2 = `grid grid-cols-[1fr_1fr] group`;
const basicGrid_3 = `grid grid-cols-[1fr_1fr_1fr] group`;

/**-----------------------------------------------------**/
const BasicTableHeader: React.FunctionComponent<{
  tableHeader?: string | string[];
  headerContainerGrid?: string;
  specialGrid?: string;
}> = ({ tableHeader, headerContainerGrid, specialGrid }) => {
  /**Handler**/
  const createCells = () => {
    if (tableHeader && typeof tableHeader === 'string') {
      //___if rowData has type "{label: string, value: string}"" ????
      return <TopHeader label={tableHeader} />;
    }
    if (tableHeader && Array.isArray(tableHeader) && tableHeader.length === 1) {
      return (
        <div className="grid grid-cols-[1fr]">
          {tableHeader.map((label, i) => (
            <TopHeader key={i} label={label} />
          ))}
        </div>
      );
    }
    if (tableHeader && Array.isArray(tableHeader)) {
      return (
        <div className={specialGrid ? specialGrid : basicGrid_3}>
          {tableHeader?.map((cell, i) => {
            return <TopHeader key={i} label={cell} />;
          })}
        </div>
      );
    }
  };
  /**JSX**/
  return <>{createCells()}</>;
};

export default BasicTableHeader;
