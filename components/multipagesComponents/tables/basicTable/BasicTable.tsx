import React from 'react';
/**Components**/
import BasicTableBody from './body/BasicTableBody';
import BasicTableHeader from './header/BasicTableHeader';

/**---------------------------------------------------------------------**/
const BasicTable: React.FunctionComponent<{
  tableHeader: string;
  tableBodyData:
    | {
        label: string;
        value: string;
      }[]
    | string[][];
}> = ({ tableHeader, tableBodyData }) => {
  return (
    <div>
      <BasicTableHeader tableHeader={tableHeader} />{' '}
      <BasicTableBody tableBodyData={tableBodyData} />
    </div>
  );
};

export default BasicTable;
