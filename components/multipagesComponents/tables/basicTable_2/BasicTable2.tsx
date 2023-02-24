import React from 'react';
/**Components**/
import TechSpecTableRow from './row/RowOfBasicTable2';
/**Tailwind Styles**/
import {
  horizGap,
  vertGap,
  topHeaderCell,
} from '../../../../utils/tailwindStyles';
import TopHeader from '../__cells/layoutXL/TopHeader';

/*
used in: wtyczki-gniazda-campingowe / Layout1
*/
/**-------------------------------**/
const BasicTable2: React.FunctionComponent<{
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
          <div key={key} className={`grid grid-cols-[1fr,2fr]  group`}>
            <TechSpecTableRow rowData={rowData} />
          </div>
        );
      case 3:
        return (
          <div key={key} className={`grid grid-cols-[repeat(3,1fr)]  group`}>
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
      {/*
      Table Header Part
      */}
      <div className={`grid grid-cols-[repeat(3,1fr)]`}>
        {tableHeaderData.map((label, i) => {
          if (i === 0) {
            return <div key={i} className="bg-dark" />;
          }
          return <TopHeader key={i} label={label} />;
        })}
      </div>
      {/*
      Table Body Part
      */}
      {tableBodyData.map((rowData, i) =>
        createRow({ rowLength: rowData.length, key: i, rowData: rowData })
      )}
    </div>
  );
};

export default BasicTable2;
