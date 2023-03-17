import React from 'react';
/**Components*/
import PageContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SectionWithTable from '../../2_produkty/_sectionWithTable/SectionWithTable';
import CatalogNavPanel from '../../../../multipagesComponents/navigations/catalogNavPanel/CatalogNavPanel';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import TablesSection from './tablesSection/TablesSection';
import SvgTechSection from './svgSection/SvgTechSection';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../data/_data';
import {
  ladowarkiSamochodowe_feat_1_data,
  ladowarkiSamochodowe_norma_data,
  ladowarkiSamochodowe_material_data,
  ladowarkiSamochodowe_feat_2_data,
  catalogTable_1_data,
  catalogTable_2_data,
} from '../../../../../data/categoriesData/cat_7_ladowarki-samochodowe/cat7_ladowarkiSamochodowe_data';
/**Tailwind Staff**/
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';

/**------------------------------------------------**/
const LadowarkiSamochodoweContent = ({
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
            // linkHeaders={[smallPseudoHeaders.n1]}
            // linkNames={[parentCategoryName]}
            // linkUrls={[parentCategoryUrl]}
            bottomHeader={smallPseudoHeaders.n1}
            bottomName={categoryName}
            // optionalHeader={smallPseudoHeaders.n4}
          />
        </SectionContentLayout>
        {/*
        _______________________________________underlinedTable + image
        */}
        <div className="fc gap-4 flex-col-reverse xl:flex-row h-full ">
          <div className="flex h-full flex-col gap-12  w-full xl:w-[50%] pb-[4rem]">
            <SectionWithTable label={smallPseudoHeaders.l3}>
              <TableWithUnderlinedRows
                rowsData={ladowarkiSamochodowe_feat_1_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
            <SectionWithTable label={smallPseudoHeaders.l4}>
              <TableWithUnderlinedRows
                rowsData={ladowarkiSamochodowe_norma_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
            <SectionWithTable label={smallPseudoHeaders.l9}>
              <TableWithUnderlinedRows
                rowsData={ladowarkiSamochodowe_material_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
          </div>
          <div className="flex h-full w-full xl:w-[50%] pb-[4rem]">
            <SvgTechSection />
          </div>
        </div>
        {/*
        _______________________________________other tables
        */}
        <TablesSection
          table1header={ladowarkiSamochodowe_feat_2_data.header}
          table1body={ladowarkiSamochodowe_feat_2_data.tableBody}
          table2header={catalogTable_1_data.header}
          table2body={catalogTable_1_data.tableBody}
          table2outlets={[
            catalogTable_1_data.outlet1,
            catalogTable_1_data.outlet2,
          ]}
          table3header={catalogTable_2_data.header}
          table3body={catalogTable_2_data.tableBody}
          table3outlets={[
            catalogTable_2_data.outlet1,
            catalogTable_2_data.outlet2,
          ]}
        />
      </PageContentLayout>
      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default LadowarkiSamochodoweContent;

/*
<div className="fc gap-4 flex-col xl:flex-row h-full ">
        <div className="flex h-full flex-col  w-full xl:w-[50%] pb-[4rem]">
          <SectionWithTable label={smallPseudoHeaders.l3}>
            <TableWithUnderlinedRows
              rowsData={przedluzaczeBebnoweGeneralFeatures_data}
              cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
              textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
            />
          </SectionWithTable>
        </div>
        <div className="flex h-full w-full xl:w-[50%] pb-[4rem]">
          <SvgTechSection />
        </div>
</div>

      <SectionWithTable label={smallPseudoHeaders.l1}>
        <MainTable tableHeader={tableHeader} tableBody={tableBody} />
      </SectionWithTable>
*/

{
  /* <SmallPseudoHeader
            text={smallPseudoHeaders.n1}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <H1AnimatedPresence
            uniqueKey={uniqueKey}
            text={categoryName}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
          /> */
}
