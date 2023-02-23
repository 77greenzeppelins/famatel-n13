import React from 'react';
/**Components**/
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import SvgTechSection from './svgSection/SvgTechSection';
import MainTable from './tablesSection/mainTable/MainTable';
/**Basic Data**/
import { przedluzaczeBebnoweMetalowe_table1_data } from '../../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_3_metalowe_tablesData';
import {
  przedluzaczeBebnoweGeneral_feat_data,
  przedluzaczeBebnoweGeneral_norms_data,
} from '../../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/cat5_przedluzaczeBebnowe_data';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import { smallPseudoHeaders } from '../../../../../data/_data';
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';
/**Data**/
const { tableHeader, tableBody } = przedluzaczeBebnoweMetalowe_table1_data;

/**----------------------------------------**/
const PrzedluzaczeBebnoweMetaloweContent: React.FunctionComponent = () => {
  /**JSX**/
  return (
    <div>
      <div className="fc xl:gap-x-8 flex-col xl:flex-row h-full">
        <div className="flex h-full flex-col gap-y-12 w-full xl:w-[50%] pb-[4rem]">
          <SectionWithTable label={smallPseudoHeaders.l3}>
            <TableWithUnderlinedRows
              rowsData={przedluzaczeBebnoweGeneral_feat_data}
              cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
              textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
            />
          </SectionWithTable>
          <SectionWithTable label={smallPseudoHeaders.l4}>
            <TableWithUnderlinedRows
              rowsData={przedluzaczeBebnoweGeneral_norms_data}
              cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
              textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
            />
          </SectionWithTable>
        </div>
        <div className="flex h-full w-full xl:w-[50%] pb-[4rem]">
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

export default PrzedluzaczeBebnoweMetaloweContent;
