import React, { useEffect } from 'react';

/*Components*/
import Header7Cols from './headers/header7Cols/Header7Cols';
import Header8Cols from './headers/header8Cols/Header8Cols';
import Body7Columns from './bodies/body7Columns/Body7Columns';
import Body8Columns from './bodies/body8Columns/Body8Columns';
/*Basic Data*/
// import {
//   gridTemplate7Columns,
//   gridTemplate8Columns,
// } from '../../../../_techSpec_data';
/*TS*/
// import { ITechSpecData } from '../../../../_rozdzielnice-przemyslowe__TS';

// interface IMainTable {
//   techSpecData: ITechSpecData;
// }

/************************************************************************************/
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
  /*
  Props...
  */
  //   const { columnsNumber, dataLines } = techSpecData;
  /*
  WTF...
  */
  console.log('MainTable / tableLayout', tableLayout);
  console.log(
    'MainTable / rozdzielnicePrzemysloweTableData',
    rozdzielnicePrzemysloweTableData
  );

  // useEffect(() => {
  //   console.log('MainTable / techSpecData', techSpecData);
  // }, [techSpecData]);
  /*
  JSX
  */
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
