import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import RozdzielnicePrzemysloweTable from './rozdzielnicePrzemysloweTable.tsx/RozdzielnicePrzemysłoweTable';
/**Tailwind Styles*/
import {
  undelinedTableTextStyle,
  undelinedTableContainerStyle,
  horizGap,
} from '../../../../../../utils/tailwindStyles';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';

/**--------------------------------------------------**/
const TablesSection: React.FunctionComponent<{
  productIndex: number;
  tableColumnsNumber: number;
  rozdzielnicePrzemysloweTableData:
    | {
        model: string;
        labels16A: string[];
        labels32A: string[];
      }[]
    | {
        model: string;
        labels16A: string[];
        labels32A: string[];
        labels63A: string[];
      }[]
    | undefined;
  tableLayout: string;
  packageDetails: string[][];
  norma: string[] | string[][];
  //___
  rozdzielniceBudowlaneHeader2: string | string[] | undefined;
  rozdzielniceBudowlaneTableData2:
    | {
        label: string;
        value: string;
      }[]
    | undefined;
  rozdzielniceBudowlaneHeader1: string | string[] | undefined;
  rozdzielniceBudowlaneTableData1: string[][] | undefined;
}> = ({
  productIndex,
  tableColumnsNumber,
  rozdzielnicePrzemysloweTableData,
  tableLayout,
  packageDetails,
  norma,
  //___
  rozdzielniceBudowlaneHeader2,
  rozdzielniceBudowlaneTableData2,
  rozdzielniceBudowlaneHeader1,
  rozdzielniceBudowlaneTableData1,
}) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      {
        //___condition to distinguish between tables for rozdzielnicePrzemysłowe and tables for rozdzielniceNaPlaceBudowy
        productIndex < 11 ? (
          <SectionWithTable label={smallPseudoHeaders.l2}>
            <RozdzielnicePrzemysloweTable
              tableColumnsNumber={tableColumnsNumber}
              rozdzielnicePrzemysloweTableData={
                rozdzielnicePrzemysloweTableData
              }
              tableLayout={tableLayout}
            />
          </SectionWithTable>
        ) : (
          <>
            <SectionWithTable label={smallPseudoHeaders.l1}>
              <div className={`flex flex-col ${horizGap} `}>
                {rozdzielniceBudowlaneTableData1?.map((rowData, i) => (
                  <div key={i} className="grid grid-cols-[1fr_2fr_2fr] group">
                    <RowWithSideHeader rowData={rowData} centered={true} />
                  </div>
                ))}
              </div>
            </SectionWithTable>
            <SectionWithTable label={smallPseudoHeaders.l2}>
              <div className={`flex flex-col ${horizGap} `}>
                {typeof rozdzielniceBudowlaneHeader2 === 'string' && (
                  <TopHeader label={rozdzielniceBudowlaneHeader2} />
                )}
                {rozdzielniceBudowlaneTableData2?.map(({ label, value }, i) => (
                  <div key={i} className="grid grid-cols-[repeat(2,1fr)] group">
                    <RowWithSideHeader
                      rowData={[label, value]}
                      centered={true}
                    />
                  </div>
                ))}
              </div>
            </SectionWithTable>
          </>
        )
      }

      <SectionWithTable label={smallPseudoHeaders.l4}>
        <div>
          <TableWithUnderlinedRows
            rowsData={norma}
            tableContainerStyle={undelinedTableContainerStyle}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </div>
      </SectionWithTable>

      <SectionWithTable label={smallPseudoHeaders.l3}>
        <div>
          <TableWithUnderlinedRows
            rowsData={packageDetails}
            tableContainerStyle={undelinedTableContainerStyle}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </div>
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default TablesSection;
