import React from 'react';
import { smallPseudoHeaders } from '../../../../../../data/_data';
import {
  undelinedTableTextStyle,
  vertGap,
} from '../../../../../../utils/tailwindStyles';
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';

const TablesSection: React.FunctionComponent<{
  productTablesData: {
    wymiary: {
      tableHeader: string[];
      tableBody: string[][];
    };
    entry?: {
      tableHeader: string[];
      tableBody: string[][];
    };
    entry2?: {
      tableHeader: string[];
      tableBody: string[][];
    };
    extraStaff?: {
      tableHeader: string[];
      tableBody: string[][];
    };
    norma?: string[][];
    packageDetails?: string[][];
    description: string[];
    iconHolderData?: string[];
  };
}> = ({ productTablesData }) => {
  const techSpecSectionCondition = productTablesData.wymiary;
  /**Handler**/
  //   const createExtraStafTable = ()=>{
  //   }
  /**JSX**/
  return (
    <div className="flex flex-col gap-10">
      {techSpecSectionCondition && (
        <SectionContentLayout divStyle="flex flex-col gap-y-4">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l2}
            hasBox={true}
            hasVerticalOrnament={false}
          />

          <BasicTable
            tableHeader={productTablesData.wymiary.tableHeader}
            tableBodyData={productTablesData.wymiary.tableBody}
          />

          {productTablesData.entry && (
            <BasicTable
              tableHeader={productTablesData.entry.tableHeader}
              tableBodyData={productTablesData.entry.tableBody}
            />
          )}
          {productTablesData.entry2 && (
            <BasicTable
              tableHeader={productTablesData.entry2.tableHeader}
              tableBodyData={productTablesData.entry2.tableBody}
              headerContainerGrid={`grid grid-cols-[1fr_1fr_1fr] ${vertGap} group`}
            />
          )}
          {productTablesData.extraStaff && (
            <BasicTable
              tableHeader={productTablesData.extraStaff.tableHeader}
              tableBodyData={productTablesData.extraStaff.tableBody}
            />
          )}
        </SectionContentLayout>
      )}

      {productTablesData.description && (
        <SectionContentLayout divStyle="flex flex-col gap-y-4">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l3}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <TableWithUnderlinedRows
            rowsData={productTablesData.description}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionContentLayout>
      )}
      {productTablesData.norma && (
        <SectionContentLayout divStyle="flex flex-col gap-y-4">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l4}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <TableWithUnderlinedRows
            rowsData={productTablesData.norma}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionContentLayout>
      )}
    </div>
  );
};

export default TablesSection;
