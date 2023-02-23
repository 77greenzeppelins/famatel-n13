import React from 'react';
import HardcodedHeader from './hardcodedHeader/HardcodedHeader';
import TableRow from './tableRow/TableRow';
/**Tailwind Staff*/
import { horizGap } from '../../../../../../utils/tailwindStyles';

const TechTable: React.FunctionComponent<{
  bodyData: string[][];
  headerData: string[];
}> = ({ headerData, bodyData }) => {
  /**JSX**/
  return (
    <div className={`flex flex-col ${horizGap} `}>
      <HardcodedHeader headerData={headerData} />
      {bodyData.map((rowData, i) => (
        <TableRow key={i} rowData={rowData} />
      ))}
    </div>
  );
};

export default TechTable;
