import React from 'react';
/**Components*/
import PageContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';
import SvgTechSection from './svgSection/SvgTechSection';
/**Basic Data**/
import { rozlacznikiBezpieczenstwaGeneralFeatures_1_data } from '../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';
import TablesSection from './tablesSection/TablesSection';
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
        <SectionContentLayout>
          <SmallPseudoHeader text="Kategoria" />
          <H1AnimatedPresence
            uniqueKey={uniqueKey}
            text={nategoryName}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
          />
        </SectionContentLayout>
        <div className="flex items-center gap-10 flex-col md:flex-row md:justify-between h-full w-full">
          <div className="flex flex-col h-full w-full md:w-[50%] pb-[4rem]">
            <TableWithUnderlinedRows
              rowsData={rozlacznikiBezpieczenstwaGeneralFeatures_1_data}
              cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
              textStyle={[tableTextStyle, tableTextStyle]}
            />
          </div>
          <div className="flex h-full w-full md:w-[50%] md:max-w-[800px] pb-[4rem] disable">
            <SvgTechSection />
          </div>
        </div>
        <TablesSection />
        {/* </SectionContentLayout> */}
      </PageContentLayout>
      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default RozlacznikiBezpieczenstwaContent;
