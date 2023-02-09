import React from 'react';

const TableRow: React.FunctionComponent<{
  rowData: string[];
  rowGridStyle: string;
}> = ({ rowData, rowGridStyle }) => {
  return (
    <div className={rowGridStyle}>
      {rowData.map((cellData, i) => (
        <div
          className=" fc bg-greyTint2 py-2 group-hover:bg-light delay-50 ease-in duration-300 divide-dark"
          key={i}
        >
          <p className="text-dark text-center p-small">{cellData}</p>
        </div>
      ))}
    </div>
  );
};

export default TableRow;
