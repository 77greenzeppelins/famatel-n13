import React from 'react';
import TableRow from './row/TableRow';

const TableSection: React.FunctionComponent<{
  sectionData: {
    horizontalHeader: string;
    bodyData: string[][];
  };
  sectionGridStyle: string;
  horizontalHeaderStyle: string;
  rowGridStyle: string;
}> = ({
  sectionData,
  sectionGridStyle,
  horizontalHeaderStyle,
  rowGridStyle,
}) => {
  /**...**/
  const { horizontalHeader, bodyData } = sectionData;
  /**JSX**/
  return (
    <div className={sectionGridStyle}>
      <div className={horizontalHeaderStyle}>
        <p className="text-light p-medium">{horizontalHeader}</p>
      </div>
      {bodyData.map((rowData, i) => (
        <TableRow key={i} rowData={rowData} rowGridStyle={rowGridStyle} />
      ))}
    </div>
  );
};

export default TableSection;
