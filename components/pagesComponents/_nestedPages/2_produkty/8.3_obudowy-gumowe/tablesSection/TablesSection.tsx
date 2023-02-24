import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
// import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Tailwind Styles*/
import {
  vertGap,
  bodyCell,
  sideHeaderCellCenter,
  undelinedTableTextStyle,
} from '../../../../../../utils/tailwindStyles';

/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**----------------------------------**/
const TablesSection: React.FunctionComponent<{
  tableHeader: string[];
  tableBody: string[][];
  features: string[][];
  norma: string[][];
}> = ({ tableHeader, tableBody, features, norma }) => {
  /**JSX**/
  return (
    <div
      data-component="TablesSection___container"
      className="flex flex-col gap-10"
    >
      <SectionContentLayout divStyle="flex flex-col gap-y-4">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l2}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        {/* <BasicTable
          tableHeader={tableHeader}
          tableBodyData={tableBody}
          multiCellsContainer={`grid grid-cols-[1fr_1fr]  ${vertGap} group`}
          multiCellsCell={[sideHeaderCellCenter, bodyCell]}
        /> */}
      </SectionContentLayout>

      <SectionContentLayout divStyle="flex flex-col">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l3}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <TableWithUnderlinedRows
          rowsData={features}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
            undelinedTableTextStyle,
            `${undelinedTableTextStyle} text-center`,
          ]}
        />
      </SectionContentLayout>

      <SectionContentLayout divStyle="flex flex-col">
        <SmallPseudoHeader
          text={smallPseudoHeaders.l4}
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <TableWithUnderlinedRows
          rowsData={norma}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
            undelinedTableTextStyle,
            `${undelinedTableTextStyle} text-center`,
          ]}
        />
      </SectionContentLayout>
    </div>
  );
};

export default TablesSection;
