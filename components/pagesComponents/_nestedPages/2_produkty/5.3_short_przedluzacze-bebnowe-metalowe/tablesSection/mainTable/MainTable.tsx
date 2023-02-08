import React from 'react';
/**components**/
import FixedTableBody_1 from '../../../../../../multipagesComponents/tables/fixedTable_1/body/FixedTableBody_1';
/**HardCoded Data*/
const mainGridStyle =
  'grid grid-cols-[1fr_1fr_2fr_2fr_1fr_1fr_1fr] divide-x-[2px] divide-dark';

/**--------------------------------------------**/
const MainTable: React.FunctionComponent<{
  tableHeader: string[];
  tableBody: (string | string[])[][];
}> = ({ tableHeader, tableBody }) => {
  /**Handler**/
  const createTableBody = () => {
    return tableBody.map((rowData, index) => (
      <FixedTableBody_1
        key={index}
        rowData={rowData}
        mainGridStyle={mainGridStyle}
      />
    ));
  };
  /**JSX**/
  return (
    <div className="flex flex-col divide-y-[2px] divide-dark">
      {' '}
      <div className={mainGridStyle}>
        {tableHeader.map((label, index) => (
          <div className="fc bg-greyShade2 py-2 px-[2px]" key={index}>
            {' '}
            <p className="p-small text-light text-center ">{label}</p>{' '}
          </div>
        ))}
      </div>
      {createTableBody()}
    </div>
  );
};

export default MainTable;
