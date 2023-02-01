import React from 'react';

const DIYRow: React.FunctionComponent<{
  rowData: string[];
  cellsContainersStyle?: string[];
}> = ({ rowData, cellsContainersStyle }) => {
  return (
    <>
      {rowData.map((cellData, index) => (
        <div
          key={index}
          className={cellsContainersStyle && cellsContainersStyle[index]}
        >
          <p>{cellData}</p>
        </div>
      ))}
    </>
  );
};

export default DIYRow;
