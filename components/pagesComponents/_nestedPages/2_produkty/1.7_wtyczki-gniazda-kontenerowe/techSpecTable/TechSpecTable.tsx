import React from 'react';
/**Components**/
import TableFrame from '../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[repeat(2,1fr)] group`;

/**-------------------------------**/
const TechSpecTable: React.FunctionComponent<{
  catalogData: string[][];
}> = ({ catalogData }) => {
  /**JSX*/
  return (
    <TableFrame sliderTriggersValue={'vvsm'}>
      {catalogData.map((rowData, i) => {
        if (i === 0) {
          return (
            <div key={i} className={mainGrid}>
              <TopHeader label={rowData[0]} containerStyle="col-start-2" />
            </div>
          );
        }
        return (
          <div key={i} className={mainGrid}>
            <RowWithSideHeader key={i} rowData={rowData} />
          </div>
        );
      })}
    </TableFrame>
  );
};

export default TechSpecTable;
