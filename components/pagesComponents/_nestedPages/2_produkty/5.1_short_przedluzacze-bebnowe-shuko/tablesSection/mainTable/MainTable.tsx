import React from 'react';
/**Components**/
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithInnerRows from '../../../../../../multipagesComponents/tables/diyTable/rowWithInnerRows/RowWithInnerRows';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
import TableFrame from '../../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[1fr_1fr_2fr_2fr_1fr_1fr_1fr]`;

/**--------------------------------------------**/
const MainTable: React.FunctionComponent<{
  tableHeader: string[];
  tableBody: (string | string[])[][];
}> = ({ tableHeader, tableBody }) => {
  /**JSX**/
  return (
    // <div className={`flex flex-col ${horizGap}`}>
    <TableFrame
      //  sliderTriggersValue={'lg'}
      sliderTriggersValue={'custom'}
      customeTrigger="min-w-[924px]"
    >
      <div className={mainGridStyle}>
        {tableHeader.map((label, index) => (
          <TopHeader key={index} label={label} />
        ))}
      </div>
      {tableBody.map((rowData, i) => (
        <RowWithInnerRows key={i} gridStyle={mainGridStyle} rowData={rowData} />
      ))}
    </TableFrame>
    // </div>
  );
};

export default MainTable;
