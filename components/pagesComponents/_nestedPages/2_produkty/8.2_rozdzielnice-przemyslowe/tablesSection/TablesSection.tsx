import React from 'react';
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
}> = ({
  productIndex,
  tableColumnsNumber,
  rozdzielnicePrzemysloweTableData,
  tableLayout,
  packageDetails,
  norma,
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
          <div className="bg-corpo h-10 w-10" />
        )
      }
      <div>
        <TableWithUnderlinedRows
          rowsData={norma}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
            'p-small text-grey group-hover:text-light ease-in duration-300 disable ',
            'p-small text-grey text-center group-hover:text-light ease-in duration-300 disable ',
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
