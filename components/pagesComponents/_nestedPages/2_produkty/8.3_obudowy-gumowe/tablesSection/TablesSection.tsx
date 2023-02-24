import React from 'react';
/**Components**/
import AllTablesContainer from '../../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import TableWithUnderlinedRows from '../../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
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
}> = ({ tableHeader, tableBody, features, norma, description }) => {
  /**JSX**/
  return (
    <AllTablesContainer>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <div className={`flex flex-col ${horizGap} `}>
          {typeof tableHeader === 'string' && <TopHeader label={tableHeader} />}
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
