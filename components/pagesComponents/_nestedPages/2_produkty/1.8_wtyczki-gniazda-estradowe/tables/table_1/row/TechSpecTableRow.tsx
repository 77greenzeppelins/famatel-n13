import React from 'react';
import {
  vertGap,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../../../utils/tailwindStyles';
/**HardCoded Data**/
const defaultMainGrid = `grid grid-cols-[repeat(2,1fr)] ${vertGap} group`;
const defaultHeaderGrid = `col-start-2 row-start-1 col-span-full ${topHeaderCell} `;

/**-----------------------------------------------------**/
const TechSpecTableRow: React.FunctionComponent<{
  rowIndex: number;
  labels: string[];
  mainGrid?: string;
  headerGrid?: string;
}> = ({ rowIndex, labels, mainGrid, headerGrid }) => {
  /**JSX**/
  return (
    <div className={mainGrid ? mainGrid : defaultMainGrid}>
      {labels.map((label, i) => {
        //___row / style for table header
        if (rowIndex === 0) {
          return (
            <div
              key={i}
              //  className={i ? topHeaderCell : 'bg-dark'}
              className={headerGrid ? headerGrid : defaultHeaderGrid}
            >
              {label}{' '}
            </div>
          );
        }
        return (
          <div key={i} className={i ? bodyCell : sideHeaderCell}>
            {label}{' '}
          </div>
        );
      })}
    </div>
  );
};

export default TechSpecTableRow;
