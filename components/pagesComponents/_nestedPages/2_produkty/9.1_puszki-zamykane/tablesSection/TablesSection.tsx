import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import BasicTable from '../../../../../multipagesComponents/tables/basicTable/BasicTable';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';
/**Tailwind Staff**/
import {
  undelinedTableContainerStyle,
  undelinedTableTextStyle,
  vertGap,
} from '../../../../../../utils/tailwindStyles';

/**------------------------------------------------**/
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
    <AllTablesContainer>
      {techSpecSectionCondition && (
        <SectionWithTable label={smallPseudoHeaders.l2}>
          <BasicTable
            tableHeader={productTablesData.wymiary.tableHeader}
            tableBodyData={productTablesData.wymiary.tableBody}
            centerRowHeader={true}
          />

          {productTablesData.entry && (
            <BasicTable
              tableHeader={productTablesData.entry.tableHeader}
              tableBodyData={productTablesData.entry.tableBody}
              centerRowHeader={true}
            />
          )}
          {productTablesData.entry2 && (
            <BasicTable
              tableHeader={productTablesData.entry2.tableHeader}
              tableBodyData={productTablesData.entry2.tableBody}
              // headerContainerGrid={`grid grid-cols-[1fr_1fr_1fr] ${vertGap} group`}
              centerRowHeader={true}
            />
          )}
          {productTablesData.extraStaff && (
            <BasicTable
              tableHeader={productTablesData.extraStaff.tableHeader}
              tableBodyData={productTablesData.extraStaff.tableBody}
              centerRowHeader={true}
            />
          )}
        </SectionWithTable>
      )}
      {productTablesData.description && (
        <SectionWithTable label={smallPseudoHeaders.l4}>
          <TableWithUnderlinedRows
            rowsData={productTablesData.description}
            tableContainerStyle={undelinedTableContainerStyle}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionWithTable>
      )}
      {productTablesData.norma && (
        <SectionWithTable label={smallPseudoHeaders.l4}>
          <TableWithUnderlinedRows
            rowsData={productTablesData.norma}
            tableContainerStyle={undelinedTableContainerStyle}
            cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
            textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
          />
        </SectionWithTable>
      )}
    </AllTablesContainer>
  );
};

export default TablesSection;
