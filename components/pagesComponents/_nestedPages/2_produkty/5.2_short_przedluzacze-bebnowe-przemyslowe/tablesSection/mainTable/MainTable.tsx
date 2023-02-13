import React from 'react';
/**components**/
import FixedTableBody_2 from '../../../../../../multipagesComponents/tables/fixedTable_2/body/FixedTableBody_2';
/**Tailwind Styles**/
import {
  vertGap,
  horizGap,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../../utils/tailwindStyles';

/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[1fr_1fr_2fr_2fr_1fr_1fr_1fr] `;
const headerMainGrid = `${mainGridStyle} ${vertGap}`;
const rowMainGrid = `${mainGridStyle} ${vertGap} group`;

/**--------------------------------------------**/
const MainTable: React.FunctionComponent<{
  tableHeader: string[];
  tableBody: (string | string[])[][];
}> = ({ tableHeader, tableBody }) => {
  /**JSX**/
  return (
    <div className={`flex flex-col ${horizGap}`}>
      <div className={headerMainGrid}>
        {tableHeader.map((label, index) => (
          <div key={index} className={topHeaderCell}>
            {' '}
            <p>{label}</p>{' '}
          </div>
        ))}
      </div>

      <FixedTableBody_2
        tableBody={tableBody}
        rowMainGrid={rowMainGrid}
        sideHeaderCell={sideHeaderCell}
        bodyCell={bodyCell}
      />
    </div>
  );
};

export default MainTable;
