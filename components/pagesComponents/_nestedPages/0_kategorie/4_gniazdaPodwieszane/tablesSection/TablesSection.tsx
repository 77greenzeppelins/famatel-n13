import React from 'react';
/**Components**/
import AllTablesContainer from '../../../2_produkty/_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../../2_produkty/_sectionWithTable/SectionWithTable';
/**Components**/
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../utils/tailwindStyles';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[repeat(10,1fr)] group`;

/**---------------------------------**/
const TablesSection: React.FC<{
  table1header: string[];
  table1body: string[][];
  table2header: string[];
  table2body: string[][];
}> = ({ table1header, table1body, table2header, table2body }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={`${smallPseudoHeaders.l1} (warianty 28000)`}>
        <div className={`flex flex-col ${horizGap}`}>
          <div className={mainGridStyle}>
            {table1header.map((label, index) => (
              <TopHeader key={index} label={label} isBreakAll={false} />
            ))}
          </div>
          <div className={`flex flex-col ${horizGap}`}>
            {table1body.map((rowData, i) => (
              <div key={i} className={mainGridStyle}>
                <RowWithSideHeader key={i} rowData={rowData} centered={true} />
              </div>
            ))}
          </div>
        </div>
      </SectionWithTable>

      <SectionWithTable label={`${smallPseudoHeaders.l1} (warianty 27000)`}>
        <div className={`flex flex-col ${horizGap}`}>
          <div className={mainGridStyle}>
            {table2header.map((label, index) => (
              <TopHeader key={index} label={label} isBreakAll={false} />
            ))}
          </div>
          <div className={`flex flex-col ${horizGap}`}>
            {table2body.map((rowData, i) => (
              <div key={i} className={mainGridStyle}>
                <RowWithSideHeader key={i} rowData={rowData} centered={true} />
              </div>
            ))}
          </div>
        </div>
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default TablesSection;

/*
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
 */
