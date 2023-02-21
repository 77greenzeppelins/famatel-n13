import React from 'react';
import {
  wtyczkiGniazdaEstradowe_l1_feat1_data,
  wtyczkiGniazdaEstradowe_l1_feat2_data,
} from '../../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_techSpec';
import { undelinedTableTextStyle } from '../../../../../../utils/tailwindStyles';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Components**/
import TechSpecTable from '../tables/table_1/TechSpecTable';
/**...*/
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';

/**--------------------------------------------**/
const Layout1: React.FunctionComponent<{
  index: number;
  tableData: string[][];
}> = ({ index, tableData }) => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-10">
      {' '}
      <TechSpecTable tableData={tableData} />
      {index < 2 ? (
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazdaEstradowe_l1_feat1_data}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      ) : (
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazdaEstradowe_l1_feat2_data}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      )}
    </div>
  );
};

export default Layout1;
