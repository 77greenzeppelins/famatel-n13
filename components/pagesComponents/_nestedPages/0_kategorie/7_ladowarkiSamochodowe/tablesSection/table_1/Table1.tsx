import React from 'react';
/**Components**/
import SectionWithTable from '../../../../2_produkty/_sectionWithTable/SectionWithTable';
import TableFrame from '../../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
/**HardCoded Data*/
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
/**BasicData**/
import { smallPseudoHeaders } from '../../../../../../../data/_data';
/**TailwindStaff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
/**Hardcoded Staff*/
const mainGridStyle = `grid grid-cols-[3fr_1fr_1fr] group`;

/**----------------------------**/
const Table1: React.FC<{ headerData: string[]; tableBodyData: string[][] }> = ({
  headerData,
  tableBodyData,
}) => {
  return (
    <SectionWithTable label={smallPseudoHeaders.l2}>
      <TableFrame sliderTriggersValue={'md'}>
        <div className={mainGridStyle}>
          {headerData.map((label, index) => (
            <TopHeader key={index} label={label} isBreakAll={false} />
          ))}
        </div>
        <div className={`flex flex-col ${horizGap}`}>
          {tableBodyData.map((rowData, i) => (
            <div key={i} className={mainGridStyle}>
              <RowWithSideHeader key={i} rowData={rowData} isBreakAll={false} />
            </div>
          ))}
        </div>
      </TableFrame>
    </SectionWithTable>
  );
};

export default Table1;
