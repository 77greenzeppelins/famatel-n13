import React from 'react';
/*Components*/
import Header7Cols from './headers/header7Cols/Header7Cols';
import Header8Cols from './headers/header8Cols/Header8Cols';
import Body7Columns from './bodies/body7Columns/Body7Columns';
import Body8Columns from './bodies/body8Columns/Body8Columns';

/**----------------------------------------------------------------**/
const RozdzielnicePrzemysloweTable: React.FunctionComponent<{
  tableColumnsNumber: number;
  rozdzielnicePrzemysloweTableData:
    | {
        model: string;
        labels16A: string[];
        labels32A: string[];
      }[]
    | {
        model: string;
        labels16A: string[];
        labels32A: string[];
        labels63A: string[];
      }[]
    | undefined;
  tableLayout: string;
}> = ({
  tableColumnsNumber,
  rozdzielnicePrzemysloweTableData,
  tableLayout,
}) => {
  /**JSX**/
  return (
    <div className={tableLayout}>
      {tableColumnsNumber === 8 ? <Header8Cols /> : <Header7Cols />}
      {tableColumnsNumber === 8 ? (
        <Body8Columns dataLines={rozdzielnicePrzemysloweTableData} />
      ) : (
        <Body7Columns dataLines={rozdzielnicePrzemysloweTableData} />
      )}
    </div>
  );
};

export default RozdzielnicePrzemysloweTable;
