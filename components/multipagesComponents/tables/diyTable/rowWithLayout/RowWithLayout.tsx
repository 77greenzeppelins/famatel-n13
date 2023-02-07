import React from 'react';

const RowWithLayout: React.FunctionComponent<{
  containerLayout?: string;
  rowData: string[];
  cellsContainersStyle?: string[];
}> = ({ rowData, cellsContainersStyle, containerLayout }) => {
  /**JSX**/
  return (
    <div className={containerLayout}>
      {rowData.map((cellData, index) => (
        <div
          key={index}
          className={cellsContainersStyle && cellsContainersStyle[index]}
        >
          <p>{cellData}</p>
        </div>
      ))}
    </div>
  );
};

export default RowWithLayout;
