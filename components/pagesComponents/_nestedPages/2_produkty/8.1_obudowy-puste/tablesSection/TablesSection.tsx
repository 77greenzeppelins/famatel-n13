import React from 'react';
/**Components**/
import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';

/**------------------------------------------------**/
const TablesSection: React.FunctionComponent<{
  tablesHeaders: string[];
  tablesData: {
    label: string;
    value: string;
  }[][];
  generalDescription: string[];
  packageDetails: string[][];
}> = ({ tablesData, tablesHeaders, generalDescription, packageDetails }) => {
  console.log('generalDescription:', generalDescription);
  /**JSX**/
  return (
    <div
      data-component="TablesSection__container"
      className="flex flex-col gap-6"
    >
      {tablesHeaders.map((header, index) => (
        <BasicTable
          key={index}
          tableHeader={header}
          tableBodyData={tablesData[index]}
        />
      ))}
      <div>
        <TableWithUnderlinedRows
          rowsData={generalDescription}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
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
