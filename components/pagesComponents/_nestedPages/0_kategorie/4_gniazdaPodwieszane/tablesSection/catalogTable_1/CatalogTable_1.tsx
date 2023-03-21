import React from 'react';
/**Components**/
import TableFrame from '../../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Staff*/
import { horizGap } from '../../../../../../../utils/tailwindStyles';

/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[repeat(10,1fr)] group`;

/**--------------------------------**/
const CatalogTable_1: React.FC<{
  headerData: string[];
  tableDodyData: string[][];
}> = ({ headerData, tableDodyData }) => {
  /**JSX**/
  return (
    <TableFrame sliderTriggersValue={'lg'}>
      <div className={mainGridStyle}>
        {headerData.map((label, index) => (
          <TopHeader key={index} label={label} isBreakAll={false} />
        ))}
      </div>
      <div className={`flex flex-col ${horizGap}`}>
        {tableDodyData.map((rowData, i) => (
          <div key={i} className={mainGridStyle}>
            <RowWithSideHeader key={i} rowData={rowData} centered={true} />
          </div>
        ))}
      </div>
    </TableFrame>
  );
};

export default CatalogTable_1;
