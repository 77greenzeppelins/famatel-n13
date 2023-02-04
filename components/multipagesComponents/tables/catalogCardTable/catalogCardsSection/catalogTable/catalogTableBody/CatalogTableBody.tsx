import React from 'react';
/**Components**/
import CatalogTableRow from './row/CatalogTableRow';
/**Handler**/
import { bodyStylesSwitcher } from '../handlers/bodyStylesSwitcher';

/**------------------------------------------------------**/
const CatalogTableBody: React.FunctionComponent<{
  amper: string;
  rowsData: string[][] | (string | undefined)[][];
  bodyType: number;
}> = ({ amper, rowsData, bodyType }) => {
  /**... */
  console.log('rowsData:', rowsData);
  /**...**/

  /**...*/
  // const part1 = [amper, rowsData[0], rowsData[1]];
  // console.log('part1', part1);
  /**JSX**/
  return (
    <div className={bodyStylesSwitcher(bodyType)?.containerStyle}>
      {/*ampers*/}
      <div className={bodyStylesSwitcher(bodyType)?.amperStyle}>
        <p className="p-medium text-center text-light">{amper}</p>
      </div>
      {/*rest of table*/}
      {rowsData.map((rowData, index) => (
        <div
          className={bodyStylesSwitcher(bodyType)?.rowContainerStyle}
          key={index}
        >
          <CatalogTableRow
            rowData={rowData}
            vatColors={bodyStylesSwitcher(bodyType)?.vatColors}
          />
        </div>
      ))}
    </div>
  );
};

export default CatalogTableBody;
