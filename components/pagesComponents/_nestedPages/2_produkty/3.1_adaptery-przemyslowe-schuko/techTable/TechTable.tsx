import React from 'react';
import { horizGap } from '../../../../../../utils/tailwindStyles';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
/****/
const grid1 = 'grid grid-cols-[1fr_1fr_1fr]';
const grid2 = 'grid grid-cols-[1fr_2fr]';

/**--------------------------------------------**/
const TechTable: React.FunctionComponent<{
  tabledata: {
    header: string[];
    sizes: string[];
    l1: string[];
    l2: string[];
    l3: string[];
  };
}> = ({ tabledata }) => {
  return (
    <div className={`flex flex-col ${horizGap} `}>
      <div className={`${grid2}`}>
        <TopHeader label={tabledata.header[0]} containerStyle="col-start-2" />
      </div>
      <div className={`${grid1}`}>
        <TopHeader label={tabledata.sizes[0]} containerStyle="col-start-2" />
        <TopHeader label={tabledata.sizes[1]} containerStyle="col-start-3" />
      </div>
      <div className={`${grid1}`}>
        <RowWithSideHeader rowData={tabledata.l1} />
      </div>
      <div className={`${grid2}`}>
        <RowWithSideHeader rowData={tabledata.l2} />
      </div>
      <div className={`${grid2}`}>
        <RowWithSideHeader rowData={tabledata.l3} />
      </div>
    </div>
  );
};

export default TechTable;
