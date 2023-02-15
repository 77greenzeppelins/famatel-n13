import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';
import {
  wtyczkiGniazdaCampingowe_l5_tech_data,
  wtyczkiGniazdaCampingowe_l5_rest_data,
} from '../../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_techSpec';

/**Tailwind Styles*/
import {
  vertGap,
  sideHeaderCellCenter,
  bodyCell,
  horizGap,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';

/**-------------------------------**/
const Layout5 = () => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-10">
      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l2}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <div className={`flex flex-col  ${horizGap}`}>
          {wtyczkiGniazdaCampingowe_l5_tech_data.map((rowData, i) => (
            <div
              key={i}
              className={`grid grid-cols-[3fr_6fr] ${vertGap} group`}
            >
              <RowWithSideHeader
                rowData={rowData}
                customeHeader={sideHeaderCellCenter}
                customeCell={bodyCell}
              />
            </div>
          ))}
        </div>
      </SectionContentLayout>
      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l3}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazdaCampingowe_l5_rest_data}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionContentLayout>{' '}
    </div>
  );
};

export default Layout5;
