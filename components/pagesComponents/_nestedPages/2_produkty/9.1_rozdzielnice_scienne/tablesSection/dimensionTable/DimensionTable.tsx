import React from 'react';
/**Componenst**/
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
/**Tailwind Styles*/
import { horizGap } from '../../../../../../../utils/tailwindStyles';

/**------------------------------------------------**/
const DimensionTable: React.FunctionComponent<{
  headerLabel: string;
  tableBodyData: {
    label: string;
    value: string;
  }[];
}> = ({ headerLabel, tableBodyData }) => {
  /**JSX**/
  return (
    <div className={`flex flex-col ${horizGap} `}>
      <TopHeader label={headerLabel} />
      {tableBodyData.map(({ label, value }, i) => (
        <div key={i} className="grid grid-cols-[repeat(2,1fr)] group">
          <RowWithSideHeader rowData={[label, value]} />
        </div>
      ))}
    </div>
  );
};

export default DimensionTable;
