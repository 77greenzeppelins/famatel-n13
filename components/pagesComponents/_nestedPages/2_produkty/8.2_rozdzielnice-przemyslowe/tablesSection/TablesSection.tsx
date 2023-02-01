import React from 'react';
import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import RozdzielnicePrzemysloweTable from './rozdzielnicePrzemysloweTable.tsx/RozdzielnicePrzemysłoweTable';

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
              multiCellsContainer={
                'grid grid-cols-[1fr_2fr_1fr] gap-[0.125rem]  group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300 py-2 divide-x-2 divide-dark'
              }
              multiCellsCell={[
                'text-center relative header-link-label text-dark',
                'text-center relative header-link-label text-dark',
                'text-center relative header-link-label text-dark',
              ]}
              specialCases={{
                index: 0,
                containerSpecialStyle: 'relative fc',
                cellsSpecialStyles: [
                  'text-center relative header-link-label text-dark  h-full w-full',
                  'text-center relative header-link-label text-dark  h-full w-full',
                  'text-center relative header-link-label text-dark  h-full w-full',
                ],
              }}
            />
          </div>
        )
      }
      <div>
        <TableWithUnderlinedRows
          rowsData={norma}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
            'p-small text-grey group-hover:text-light ease-in duration-300 disable ',
            'p-small text-grey group-hover:text-light ease-in duration-300 disable ',
          ]}
        />
      </div>
      <div>
        <TableWithUnderlinedRows
          rowsData={packageDetails}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
            'p-small text-grey  group-hover:text-light ease-in duration-300 disable ',
            'p-small text-grey text-center group-hover:text-light ease-in duration-300 disable ',
          ]}
        />
      </div>
    </div>
  );
};

export default TablesSection;
