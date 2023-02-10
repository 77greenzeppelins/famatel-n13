import React from 'react';
/**Components**/
import TechSpecTableRow from './row/TechSpecTableRow';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../utils/tailwindStyles';

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
