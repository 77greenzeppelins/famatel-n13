import React from 'react';
/**Components*/
import BodyCell from '../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
import SideHeaderCenter from '../../../../multipagesComponents/tables/__cells/layoutXL/SideHeaderCenter';

/**Direct Child**/
const ComplexCell = ({ cellData }: { cellData: string[] }) => {
  return (
    <div className="flex flex-col h-full">
      {' '}
      {cellData.map((cellData, i) => (
        <BodyCell
          key={i}
          label={cellData}
          containerStyle="h-full fc py-2 px-[1px] border-x-[1px] border-dark bg-greyTint2 group-hover:bg-light delay-100 ease-in duration-300 select-none"
        />
      ))}
    </div>
  );
};

const RowWithInnerRows: React.FunctionComponent<{
  gridStyle: string;
  rowData: (string | string[])[];
  hasSideHeader?: boolean;
}> = ({ gridStyle, rowData, hasSideHeader = true }) => {
  return (
    <div className={`${gridStyle} group`}>
      {rowData.map((cellData, i) => {
        if (typeof cellData === 'string' && i === 0 && hasSideHeader) {
          return <SideHeaderCenter key={i} label={cellData} />;
        }
        if (typeof cellData === 'string') {
          return <BodyCell key={i} label={cellData} />;
        }
        return <ComplexCell key={i} cellData={cellData} />;
      })}
    </div>
  );
};

export default RowWithInnerRows;
