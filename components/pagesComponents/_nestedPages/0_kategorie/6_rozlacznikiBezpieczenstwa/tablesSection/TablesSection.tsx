import React from 'react';

import { smallPseudoHeaders } from '../../../../../../data/_data';
/**Components**/
import AllTablesContainer from '../../../2_produkty/_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../../2_produkty/_sectionWithTable/SectionWithTable';
import CatalogTable_1 from './catalogTable_1/CatalogTable_1';
import CatalogTable_2 from './catalogTable_2/CatalogTable_2';
/**Basic Data**/
// import {
//   rozlacznikiBezpieczenstwa_feat_data,
//   rozlacznikiBezpieczenstwa_norma_data,
// } from '../../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';
// import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
// import { undelinedTableTextStyle } from '../../../../../../utils/tailwindStyles';

/**---------------------------------**/
const TablesSection = () => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l1}>
        <CatalogTable_1 />
      </SectionWithTable>

      <SectionWithTable label={smallPseudoHeaders.l2}>
        <CatalogTable_2 />
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default TablesSection;
