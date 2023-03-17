import React from 'react';
/**Components**/
import AllTablesContainer from '../../../2_produkty/_allTablesContainer/AllTablesContainer';
import Table1 from './table_1/Table1';
import Table2 from './table_2/Table2';
import Table3 from './table_3/Table3';

/**---------------------------------**/
const TablesSection: React.FC<{
  table1header: string[];
  table1body: string[][];
  table2header: string[];
  table2body: string[][];
  table2outlets: string[];
  table3header: string[];
  table3body: string[][];
  table3outlets: string[];
}> = ({
  table1header,
  table1body,
  table2header,
  table2body,
  table2outlets,
  table3header,
  table3body,
  table3outlets,
}) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <Table1 headerData={table1header} tableBodyData={table1body} />
      <Table2
        headerData={table2header}
        tableBodyData={table2body}
        outletsData={table2outlets}
      />
      <Table3
        headerData={table3header}
        tableBodyData={table3body}
        outletsData={table3outlets}
      />
    </AllTablesContainer>
  );
};

export default TablesSection;
