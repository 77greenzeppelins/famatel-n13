import React from 'react';
/**Components**/
import AllTablesContainer from '../../../2_produkty/_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../../2_produkty/_sectionWithTable/SectionWithTable';
/**Components**/
import CatalogTable_1 from './catalogTable_1/CatalogTable_1';
import CatalogTable_2 from './catalogTable_2/CatalogTable_2';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**---------------------------------**/
const TablesSection: React.FC<{
  table1header: string[];
  table1body: string[][];
  table2header: string[];
  table2body: string[][];
}> = ({ table1header, table1body, table2header, table2body }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={`${smallPseudoHeaders.l1} (warianty 28000)`}>
        <CatalogTable_1 headerData={table1header} tableDodyData={table1body} />
      </SectionWithTable>
      <SectionWithTable label={`${smallPseudoHeaders.l1} (warianty 27000)`}>
        <CatalogTable_2 headerData={table2header} tableBodyData={table2body} />
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default TablesSection;
