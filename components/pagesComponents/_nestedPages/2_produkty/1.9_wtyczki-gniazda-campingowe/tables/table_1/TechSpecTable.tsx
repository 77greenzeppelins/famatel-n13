import React from 'react';
/**Components**/
import TechSpecTableRow from './row/TechSpecTableRow';
/**Tailwind Styles**/
import {
  horizGap,
  vertGap,
  topHeaderCell,
} from '../../../../../../../utils/tailwindStyles';

/**-------------------------------**/
const TechSpecTable: React.FunctionComponent<{
  tableHeaderData: string[];
  tableBodyData: string[][];
}> = ({ tableHeaderData, tableBodyData }) => {
  /**...**/
  const createRow = ({
    rowLength,
    key,
    rowData,
  }: {
    rowLength: number;
    key: number;
    rowData: string[];
  }) => {
    switch (rowLength) {
      case 2:
        return (
          <div
            key={key}
            className={`grid grid-cols-[1fr,2fr] ${vertGap} group`}
          >
            <TechSpecTableRow rowData={rowData} />
          </div>
        );
      case 3:
        return (
          <div
            key={key}
            className={`grid grid-cols-[repeat(3,1fr)] ${vertGap} group`}
          >
            <TechSpecTableRow rowData={rowData} />
          </div>
        );
    }
  };
  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horizGap} `}
    >
      <div className={`grid grid-cols-[repeat(3,1fr)] ${vertGap} group`}>
        {tableHeaderData.map((label, i) => {
          if (i === 0) {
            return <div key={i} className="bg-dark" />;
          }
          return (
            <div key={i} className={topHeaderCell}>
              {label}{' '}
            </div>
          );
        })}
      </div>
      {tableBodyData.map((rowData, i) =>
        createRow({ rowLength: rowData.length, key: i, rowData: rowData })
      )}
    </div>
  );
};

export default TechSpecTable;
