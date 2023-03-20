import React from 'react';
/**Comonents**/
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Staff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
import SliderWithScrollbar from '../../../../../../multipagesComponents/sliders/sliderWithScrollbar/SliderWithScrollbar';
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[repeat(10,1fr)] group`;

const CatalogTable_2: React.FC<{
  headerData: string[];
  tableBodyData: string[][];
}> = ({ headerData, tableBodyData }) => {
  return (
    <SliderWithScrollbar>
      <div
        data-component="CatalogTable_2__container"
        className={`flex flex-col ${horizGap} min-w-[903px]`}
      >
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
      </div>
    </SliderWithScrollbar>
  );
};

export default CatalogTable_2;
