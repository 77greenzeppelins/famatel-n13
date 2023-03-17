import React from 'react';
/**Components**/
import SectionWithTable from '../../../../2_produkty/_sectionWithTable/SectionWithTable';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
/**BasicData**/
import { smallPseudoHeaders } from '../../../../../../../data/_data';
/**TailwindStaff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[3fr_1fr_1fr] group`;

/**----------------------------**/
const Table1: React.FC<{ headerData: string[]; tableBodyData: string[][] }> = ({
  headerData,
  tableBodyData,
}) => {
  return (
    <SectionWithTable label={smallPseudoHeaders.l2}>
      <div className={`flex flex-col ${horizGap}`}>
        <div className={mainGridStyle}>
          {headerData.map((label, index) => (
            <TopHeader key={index} label={label} isBreakAll={false} />
          ))}
        </div>
        <div className={`flex flex-col ${horizGap}`}>
          {tableBodyData.map((rowData, i) => (
            <div key={i} className={mainGridStyle}>
              <RowWithSideHeader key={i} rowData={rowData} />
            </div>
          ))}
        </div>
      </div>
    </SectionWithTable>
  );
};

export default Table1;
