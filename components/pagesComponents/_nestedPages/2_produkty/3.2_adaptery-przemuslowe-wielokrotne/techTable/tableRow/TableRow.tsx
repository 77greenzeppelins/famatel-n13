import React from 'react';
import BodyCell from '../../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';

const TableRow: React.FunctionComponent<{ rowData: string[] }> = ({
  rowData,
}) => {
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] ">
      {rowData.map((cellData, i) => (
        <BodyCell key={i} label={cellData} />
      ))}
    </div>
  );
};

export default TableRow;
