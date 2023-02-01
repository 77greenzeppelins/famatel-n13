import React from 'react';
/**Components**/
import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';

/**----------------------------------**/
const TablesSection: React.FunctionComponent<{
  norma: string[][];
  tableHeader: string[];
  tableBody: string[][];
}> = ({ norma, tableHeader, tableBody }) => {
  /**JSX**/
  return (
    <div
      data-component="TablesSection___container"
      className="flex flex-col gap-2"
    >
      <BasicTable
        tableHeader={tableHeader}
        tableBodyData={tableBody}
        multiCellsContainer={
          'grid grid-cols-[1fr_2fr_1fr] gap-[0.125rem]  group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300'
        }
        multiCellsCell={[
          'text-center relative header-link-label text-dark py-2',
          'text-center relative header-link-label text-dark py-2',
          'text-center relative header-link-label text-dark py-2',
        ]}
      />
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
    </div>
  );
};

export default TablesSection;
