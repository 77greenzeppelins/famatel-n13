import React from 'react';
import {
  vertGap,
  horizGap,
  horizGapL,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../../utils/tailwindStyles';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[repeat(2,1fr)] ${vertGap} group`;

/**-----------------------------------------------------**/
const TechSpecTableRow: React.FunctionComponent<{
  labels: string[];
  rowIndex: number;
}> = ({ labels, rowIndex }) => {
  /**JSX**/
  return (
    <div className={mainGrid}>
      {labels.map((label, i) => {
        if (rowIndex === 0) {
          return (
            <div key={i} className={i ? topHeaderCell : 'bg-dark'}>
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
