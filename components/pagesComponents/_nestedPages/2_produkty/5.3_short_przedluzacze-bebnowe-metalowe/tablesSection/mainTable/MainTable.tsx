import React from 'react';
/**components**/
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithInnerRows from '../../../../../../multipagesComponents/tables/diyTable/rowWithInnerRows/RowWithInnerRows';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';

/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[1fr_1fr_2fr_2fr_1fr_1fr_1fr] `;

/**--------------------------------------------**/
const MainTable: React.FunctionComponent<{
  tableHeader: string[];
  tableBody: (string | string[])[][];
}> = ({ tableHeader, tableBody }) => {
  /**JSX**/
  return (
    <div className={`flex flex-col ${horizGap}`}>
      <div className={mainGridStyle}>
        {tableHeader.map((label, index) => (
          <TopHeader key={index} label={label} />
        ))}
      </div>
      {tableBody.map((rowData, i) => (
        <RowWithInnerRows key={i} gridStyle={mainGridStyle} rowData={rowData} />
      ))}
    </div>
  );
};

export default MainTable;

// <div className={`flex flex-col ${horizGap}`}>
//   <div className={headerMainGrid}>
//     {tableHeader.map((label, index) => (
//       <div key={index} className={topHeaderCell}>
//         {' '}
//         <p>{label}</p>{' '}
//       </div>
//     ))}
//   </div>

//   <FixedTableBody_2
//     tableBody={tableBody}
//     rowMainGrid={rowMainGrid}
//     sideHeaderCell={sideHeaderCell}
//     bodyCell={bodyCell}
//   />
// </div>
