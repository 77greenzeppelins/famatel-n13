import React from 'react';
/**Components**/
import RowWithInnerRows from '../../../../../../../multipagesComponents/tables/diyTable/rowWithInnerRows/RowWithInnerRows';
import SideHeaderCenter from '../../../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeaderCenter';

const TableSection: React.FunctionComponent<{
  sectionData: {
    horizontalHeader: string;
    bodyData: string[][];
  };
}> = ({ sectionData }) => {
  /**...**/
  const { horizontalHeader, bodyData } = sectionData;
  /**JSX**/
  return (
    <div
      className={`grid grid-cols-[1fr_3fr] grid-rows-[repeat(6,1fr)] divide-y-[2px] divide-dark group`}
    >
      <SideHeaderCenter
        label={horizontalHeader}
        containerStyle="col-start-1 col-end-2 row-start-1 row-span-full border-t-[1px] border-dark"
      />
      {bodyData.map((rowData, i) => (
        <RowWithInnerRows
          key={i}
          gridStyle={`grid grid-cols-[repeat(3,1fr)] `}
          rowData={rowData}
          hasSideHeader={false}
        />
      ))}
    </div>
  );
};

export default TableSection;
