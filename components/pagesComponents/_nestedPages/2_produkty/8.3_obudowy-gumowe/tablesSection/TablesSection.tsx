import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import BasicIconsManager from '../../../../../multipagesComponents/iconsManagers/basicIconsManager/BasicIconsManager';
/**Tailwind Styles*/
import {
  undelinedTableTextStyle,
  undelinedTableContainerStyle,
  horizGap,
} from '../../../../../../utils/tailwindStyles';

/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**----------------------------------**/
const TablesSection: React.FunctionComponent<{
  tableHeader: string[];
  tableBody: string[][];
  features: string[][];
  norma: string[][];
  description: string[];
  svgIcons: string[];
}> = ({ tableHeader, tableBody, features, norma, description, svgIcons }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <div className={`flex flex-col ${horizGap} `}>
          {tableHeader.map((cellData, i) => (
            <TopHeader label={cellData} key={i} />
          ))}
          {tableBody?.map((rowData, i) => (
            <div key={i} className="grid grid-cols-[repeat(2,1fr)] group">
              <RowWithSideHeader rowData={rowData} centered={true} />
            </div>
          ))}
        </div>
      </SectionWithTable>

      <SectionWithTable label={smallPseudoHeaders.l3}>
        <TableWithUnderlinedRows
          rowsData={features}
          tableContainerStyle={undelinedTableContainerStyle}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionWithTable>

      <SectionWithTable label={smallPseudoHeaders.l4}>
        <TableWithUnderlinedRows
          rowsData={norma}
          tableContainerStyle={undelinedTableContainerStyle}
          cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
          textStyle={[undelinedTableTextStyle, undelinedTableTextStyle]}
        />
      </SectionWithTable>
      <SectionContentLayout divStyle="flex flex-col gap-y-4 min-h-[66px] ">
        <BasicIconsManager svgIcons={svgIcons} />
      </SectionContentLayout>
      <SectionWithTable label={smallPseudoHeaders.l7}>
        {description.map((desc, index) => (
          <div key={index}>
            <p className="p-small text-grey text-justify hover:text-light ease-in duration-300  ">
              {desc}
            </p>
          </div>
        ))}
      </SectionWithTable>
    </AllTablesContainer>
  );
};

export default TablesSection;
