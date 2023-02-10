import React from 'react';
/**Components**/
import TechSpecTableRow from './row/TechSpecTableRow';
/**TS**/
import { IFProdCatDataSchukoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
import {
  vertGap,
  horizGap,
  horizGapL,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../utils/tailwindStyles';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[repeat(2,1fr)] ${vertGap} group`;

/**-------------------------------**/
const TechSpecTable: React.FunctionComponent<{
  catalogData: string[][];
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horizGap} `}
    >
      {catalogData.map((rowData, i) => (
        <TechSpecTableRow key={i} labels={rowData} rowIndex={i} />
      ))}
    </div>
  );
};

export default TechSpecTable;
