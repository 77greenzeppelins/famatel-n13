import React from 'react';

const BodyRow = ({
  rowData,
  index,
  rowMainGrid,
  bodyCell,
  sideHeaderCell,
}: {
  rowData: (string | string[])[];
  index: number;
  rowMainGrid: string;
  bodyCell: string;
  sideHeaderCell: string;
}) => {
  /**Handler
   * as cell can be string or string[]
   * in the second case we usually want to heve cell with "flex-col"
   * **/
  const createrCell = ({ cellData }: { cellData: string | string[] }) => {
    if (!Array.isArray(cellData)) {
      return <p>{cellData}</p>;
    }
    return cellData.map((label, index) => <p key={index}>{label}</p>);
  };

  /**JSX**/
  return (
    <div key={index} className={rowMainGrid}>
      {rowData.map((cellData, i) => (
        <div key={i} className={`${i ? bodyCell : sideHeaderCell} flex-col`}>
          {createrCell({ cellData })}
        </div>
      ))}
    </div>
  );
};

export default BodyRow;
