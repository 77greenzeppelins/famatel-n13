import React from 'react';
import TechSpecTable from '../tables/table_1/TechSpecTable';
import { vertGap } from '../../../../../../utils/tailwindStyles';

const Layout4: React.FunctionComponent<{ tableData: string[][] }> = ({
  tableData,
}) => {
  return (
    <div className="flex flex-col gap-10">
      {' '}
      {/* <TechSpecTable
        tableData={tableData}
        mainGrid={`grid grid-cols-[repeat(4,1fr)] ${vertGap} group`}
        headerGrid={''}
      /> */}
    </div>
  );
};

export default Layout4;
