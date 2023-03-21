import React from 'react';
/**Components*/
import PageContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SectionWithTable from '../../2_produkty/_sectionWithTable/SectionWithTable';
import CatalogNavPanel from '../../../../multipagesComponents/navigations/catalogNavPanel/CatalogNavPanel';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import TablesSection from './tablesSection/TablesSection';
import ImagesSection from './imagesSection/ImagesSection';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../data/_data';
import {
  gniazdaPodwieszane_feat_1_data,
  gniazdaPodwieszane_norma_data,
  gniazdaPodwieszane_material_data,
  catalogTable_1_data,
  catalogTable_2_data,
} from '../../../../../data/categoriesData/cat_4_gniazda-podwieszane/cat4_gniazdaPodwieszane_data';
/**Tailwind Staff**/
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';

/**---------------------------------**/
const GniazdaPodwieszaneContent = ({
  categoryName,
}: {
  categoryName: string;
}) => {
  /**JSX**/
  return (
    <div className="w-full inner-px-md-lg pt-[60px] bg-dark pb-[10vh]">
      <PageContentLayout>
        {/*
        _______________________________________header
        */}
        <SectionContentLayout>
          <CatalogNavPanel
            bottomHeader={smallPseudoHeaders.n1}
            bottomName={categoryName}
          />
        </SectionContentLayout>
        {/*
        _______________________________________underlinedTable + image
        */}
        <div className="flex-col-reverse h-full gap-4 fc xl:flex-row ">
          <div className="flex h-full flex-col gap-12  w-full xl:w-[50%] pb-[4rem]">
            <SectionWithTable label={smallPseudoHeaders.l3}>
              <TableWithUnderlinedRows
                rowsData={gniazdaPodwieszane_feat_1_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
            <SectionWithTable label={smallPseudoHeaders.l4}>
              <TableWithUnderlinedRows
                rowsData={gniazdaPodwieszane_norma_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
            <SectionWithTable label={smallPseudoHeaders.l9}>
              <TableWithUnderlinedRows
                rowsData={gniazdaPodwieszane_material_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
          </div>
          <div className="flex h-full w-full xl:w-[50%] pb-[4rem]">
            <ImagesSection />
          </div>
        </div>
        {/*
        _______________________________________other tables
        */}
        <TablesSection
          table1header={catalogTable_1_data.header}
          table1body={catalogTable_1_data.tableBody}
          table2header={catalogTable_2_data.header}
          table2body={catalogTable_2_data.tableBody}
        />
      </PageContentLayout>
    </div>
  );
};

export default GniazdaPodwieszaneContent;
