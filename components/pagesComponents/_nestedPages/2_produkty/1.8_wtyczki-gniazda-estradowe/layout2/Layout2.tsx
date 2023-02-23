import React from 'react';
/**Components**/
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**...**/
import {
  vertGap,
  horizGap,
  sideHeaderCell,
  bodyCell,
  blueHeaderStyle,
  blueCellStyle,
} from '../../../../../../utils/tailwindStyles';
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**...*/
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';

/**---------------------------------------**/
const Layout2: React.FunctionComponent<{
  index: number;
  tableData: {
    line1: string[];
    line2: string[];
    line3: string[];
  };
  featuresData: string[][];
}> = ({ index, tableData, featuresData }) => {
  /**...**/
  const { line1, line2, line3 } = tableData;
  console.log('tableData', tableData);

  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l3}>
        <div className={`flex flex-col `}>
          {line2.length === 4 ? (
            <div
              className={`grid grid-cols-[2fr,2fr,4fr] grid-rows-[repeat(3,1fr)] ${horizGap} ${vertGap}`}
            >
              {/*___line_1*/}
              <div
                className={`col-start-3 row-start-1 flex flex-col ${blueHeaderStyle}`}
              >
                <p>{line1[1]}</p>
                <p>{line1[2]}</p>
              </div>
              {/*___line_2*/}
              <div className={`col-start-1 row-start-2 ${sideHeaderCell}`}>
                <p>{line2[0]}</p>
              </div>
              <div className={`col-start-2 row-start-2 ${sideHeaderCell}`}>
                <p>{line2[1]}</p>
              </div>
              <div className={`col-start-3 row-start-2 bg-dark fc flex-col`}>
                <p className="text-light p-small">{line2[2]}</p>
                <p className="text-light p-small">{line2[3]}</p>
              </div>
              {/*___line_3*/}
              <div className={`col-start-1 row-start-3 ${sideHeaderCell}`}>
                <p>{line3[0]}</p>
              </div>
              <div className="col-start-2 row-start-3 group">
                <div className={`h-full w-full  ${bodyCell}`}>
                  <p>{line3[1]}</p>
                </div>
              </div>
              <div className="col-start-3 row-start-3 group">
                <div className={`h-full w-full  ${blueCellStyle}`}>
                  <p>{line3[2]}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`grid grid-cols-[2fr,2fr,2fr,4fr] grid-rows-[repeat(3,1fr)] ${horizGap} ${vertGap}`}
            >
              {/*___line_1*/}
              <div
                className={`col-start-4 row-start-1 flex flex-col ${blueHeaderStyle}`}
              >
                <p>{line1[1]}</p>
                <p>{line1[2]}</p>
              </div>
              {/*___line_2*/}
              <div className={`col-start-1 row-start-2 ${sideHeaderCell}`}>
                <p>{line2[0]}</p>
              </div>
              <div className={`col-start-2 row-start-2 ${sideHeaderCell}`}>
                <p>{line2[1]}</p>
              </div>
              <div className={`col-start-3 row-start-2 ${sideHeaderCell}`}>
                <p>{line2[2]}</p>
              </div>
              <div className={`col-start-4 row-start-2 bg-dark fc flex-col`}>
                <p className="text-light p-small">{line2[3]}</p>
                <p className="text-light p-small">{line2[4]}</p>
              </div>
              {/*___line_3*/}
              <div className={`col-start-1 row-start-3 ${sideHeaderCell}`}>
                <p>{line3[0]}</p>
              </div>
              <div className="col-start-2 row-start-3 group">
                <div className={`h-full w-full  ${bodyCell}`}>
                  <p>{line3[1]}</p>
                </div>
              </div>
              <div className="col-start-3 row-start-3 group">
                <div className={`h-full w-full  ${bodyCell}`}>
                  <p>{line3[2]}</p>
                </div>
              </div>
              <div className={`col-start-4 row-start-3 ${blueCellStyle}`}>
                <p>{line3[3]}</p>
              </div>
            </div>
          )}
        </div>
      </SectionWithTable>
      <SectionWithTable label={smallPseudoHeaders.l3}>
        <TableWithUnderlinedRows
          rowsData={featuresData}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[tableTextStyle, tableTextStyle]}
        />
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default Layout2;
