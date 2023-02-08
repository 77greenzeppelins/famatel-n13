import React from 'react';
/**Components**/
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import SvgTechSection from './svgSection/SvgTechSection';
import MainTable from './tablesSection/mainTable/MainTable';
/**Basic Data**/
import { przedluzaczeBebnoweSchuko_table1_data } from '../../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_1_schuko_tablesData';
import { przedluzaczeBebnoweGeneralFeatures_data } from '../../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/cat5_przedluzaczeBebnowe_data';

/**Data**/
const { tableHeader, tableBody } = przedluzaczeBebnoweSchuko_table1_data;

/**----------------------------------------**/
const PrzedluzaczeBebnoweSchukoConten: React.FunctionComponent = () => {
  /**JSX**/
  return (
    <div>
      <div className="fc gap-4 flex-col md:flex-row h-full ">
        <div className="flex h-full flex-col  w-full md:w-[50%] pb-[4rem]">
          <TableWithUnderlinedRows
            rowsData={przedluzaczeBebnoweGeneralFeatures_data}
            cellsStyles={['w-[50%]', 'w-[50%]']}
            textStyle={[
              'p-small text-grey group-hover:text-light ease-in duration-300 disable',
              'p-small text-grey group-hover:text-light ease-in duration-300 disable',
              'p-small text-grey group-hover:text-light ease-in duration-300 disable',
            ]}
          />
        </div>
        <div className="flex h-full w-full md:w-[50%] pb-[4rem]">
          <SvgTechSection />
        </div>
      </div>
      <div className="w-full ">
        {' '}
        <MainTable tableHeader={tableHeader} tableBody={tableBody} />
      </div>
    </div>
  );
};

export default PrzedluzaczeBebnoweSchukoConten;
