import React from 'react';
/**Components**/
import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import RozdzielnicePrzemysloweTable from './rozdzielnicePrzemysloweTable.tsx/RozdzielnicePrzemysłoweTable';
/**Tailwind Styles*/
import {
  vertGap,
  bodyCell,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';

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
    <div
      data-component="TablesSection___container"
      className="flex flex-col gap-2"
    >
      {
        //___condition to distinguish between tables for rozdzielnicePrzemysłowe and tables for rozdzielniceNaPlaceBudowy
        productIndex < 11 ? (
          <RozdzielnicePrzemysloweTable
            tableColumnsNumber={tableColumnsNumber}
            rozdzielnicePrzemysloweTableData={rozdzielnicePrzemysloweTableData}
            tableLayout={tableLayout}
          />
        ) : (
          <div className="flex flex-col gap-y-6">
            <BasicTable
              tableHeader={rozdzielniceBudowlaneHeader2}
              tableBodyData={rozdzielniceBudowlaneTableData2}
            />
            <BasicTable
              tableHeader={rozdzielniceBudowlaneHeader1}
              tableBodyData={rozdzielniceBudowlaneTableData1}
              multiCellsContainer={`grid grid-cols-[1fr_2fr_1fr] gap-[0.125rem] ${vertGap}  group bg-greyTint2 `}
              multiCellsCell={[bodyCell, bodyCell, bodyCell]}
            />
          </div>
        )
      }
      <div>
        <TableWithUnderlinedRows
          rowsData={norma}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </div>
      <div>
        <TableWithUnderlinedRows
          rowsData={packageDetails}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </div>
    </div>
  );
};

export default TablesSection;
