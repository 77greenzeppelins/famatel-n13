import React from 'react';
/**Components*/
import PageContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
import SvgTechSection from './svgSection/SvgTechSection';
/**Basic Data**/
import {
  rozlacznikiBezpieczenstwaGeneralFeatures_1_data,
  rozlacznikiBezpieczenstwa_norma_data,
} from '../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';
import TablesSection from './tablesSection/TablesSection';
import { smallPseudoHeaders } from '../../../../../data/_data';
import SectionWithTable from '../../2_produkty/_sectionWithTable/SectionWithTable';
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';
/**HardCoded Data**/
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';
/**------------------------------------------------**/
const RozlacznikiBezpieczenstwaContent = ({
  uniqueKey,
  nategoryName,
}: {
  uniqueKey: number;
  nategoryName: string;
}) => {
  /**JSX**/
  return (
    <div className="w-screen inner-px-md-lg pt-[60px] bg-dark pb-[10vh]">
      <PageContentLayout>
        {/*
        _______________________________________header
        */}
        <SectionContentLayout>
          <SmallPseudoHeader
            text={smallPseudoHeaders.n1}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <H1AnimatedPresence
            uniqueKey={uniqueKey}
            text={nategoryName}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
          />
        </SectionContentLayout>
        {/*
        _______________________________________underlinedTable + image
        */}
        <div className="fc gap-4 flex-col-reverse xl:flex-row h-full ">
          <div className="flex h-full flex-col gap-12  w-full xl:w-[50%] pb-[4rem]">
            <SectionWithTable label={smallPseudoHeaders.l3}>
              <TableWithUnderlinedRows
                rowsData={rozlacznikiBezpieczenstwaGeneralFeatures_1_data}
                cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
              />
            </SectionWithTable>
            <SectionWithTable label={smallPseudoHeaders.l4}>
              <TableWithUnderlinedRows
                rowsData={rozlacznikiBezpieczenstwa_norma_data}
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
        <TablesSection />
      </PageContentLayout>
      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default RozlacznikiBezpieczenstwaContent;

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
