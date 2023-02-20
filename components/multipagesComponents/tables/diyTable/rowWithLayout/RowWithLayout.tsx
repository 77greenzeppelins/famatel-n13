import React from 'react';
/**
used in: wtyczki-gniazda / all tech tables; intensively used!
*/
/**--------------------------------------------------**/
const RowWithLayout: React.FunctionComponent<{
  containerLayout?: string;
  rowData: string[];
  cellsContainersStyle?: string[];
}> = ({ rowData, cellsContainersStyle, containerLayout }) => {
  /**JSX**/
  return (
    <div
      data-component="RowWithLayout__gridedContainer"
      className={containerLayout}
    >
      {rowData.map((cellData, index) => (
        <div
          data-layout="RowWithLayout__gridedCell"
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
