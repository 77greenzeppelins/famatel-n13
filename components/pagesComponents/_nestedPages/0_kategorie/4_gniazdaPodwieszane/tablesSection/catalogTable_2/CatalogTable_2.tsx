import React from 'react';
/**Comonents**/
import TableFrame from '../../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Staff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[repeat(10,1fr)] group`;

/**-----------------------------**/
const CatalogTable_2: React.FC<{
  headerData: string[];
  tableBodyData: string[][];
}> = ({ headerData, tableBodyData }) => {
  /**JSX**/
  return (
    <TableFrame sliderTriggersValue={'lg'}>
      <div className={mainGridStyle}>
        {headerData.map((label, index) => (
          <TopHeader key={index} label={label} isBreakAll={false} />
        ))}
      </div>
      <div className={`flex flex-col ${horizGap}`}>
        {tableBodyData.map((rowData, i) => (
          <div key={i} className={mainGridStyle}>
            <RowWithSideHeader key={i} rowData={rowData} centered={true} />
          </div>
        ))}
      </div>
    </TableFrame>
  );
};

export default CatalogTable_2;
