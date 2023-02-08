import React from 'react';
/**Components**/
import FixedTableRow_1 from './row/FixedTableRow_1';

/**-----------------------------------------------------**/
const FixedTableBody_1: React.FunctionComponent<{
  rowData: (string | string[])[];
  mainGridStyle: string;
}> = ({ rowData, mainGridStyle }) => {
  console.log('rowData:', rowData);
  /**Handler**/
  const createRow = () => {
    return rowData.map((rowData, index) => (
      <FixedTableRow_1 key={index} cellData={rowData} />
    ));
  };
  /**JSX*/
  return <div className={`${mainGridStyle} group`}>{createRow()}</div>;
};

export default FixedTableBody_1;
