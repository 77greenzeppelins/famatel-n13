import React from 'react';
import {
  vertGap,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../../../utils/tailwindStyles';
/**HardCoded Data**/
const defaultMainGrid = `grid grid-cols-[repeat(2,1fr)] ${vertGap} group`;
const defaultHeadersCellsStyles = [
  'col-start-1 row-start-1 col-span-full',
  `col-start-2 row-start-1 col-span-full ${topHeaderCell} `,
];

/**
 * used in "wtyczki-gniazda-estradowe" / layoput_1 /
 *
 */
/**-----------------------------------------------------**/
const TechSpecTableRow: React.FunctionComponent<{
  rowIndex: number; //__for extracting header or any specialRow...
  labels: string[];
  mainGrid?: string;
  headerCellsStyles?: string[];
}> = ({ rowIndex, labels, mainGrid, headerCellsStyles }) => {
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
              className={
                headerCellsStyles
                  ? headerCellsStyles[i]
                  : defaultHeadersCellsStyles[i]
              }
            >
              <p>{label}</p>{' '}
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
