import React from 'react';
import BasicTableRow from './row/BasicTableRow';

const BasicTableBody: React.FunctionComponent<{
  tableBodyData:
    | {
        label: string;
        value: string;
      }[]
    | string[][];
}> = ({ tableBodyData }) => {
  /**JSX**/
  return (
    <div>
      {tableBodyData.map((rowData, index) => (
        <BasicTableRow key={index} rowData={rowData} />
      ))}
    </div>
  );
};

export default BasicTableBody;
