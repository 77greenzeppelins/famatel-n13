import React from 'react';
/**Components**/
import TableSection from './tableSection/TableSection';
/**Basic Data*/
import { catalogTable_1_data } from '../../../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';
import { horizGap } from '../../../../../../../utils/tailwindStyles';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
/**HardCoded Data*/
const headerData: string[] = catalogTable_1_data.header;
const sectionsData: {
  horizontalHeader: string;
  bodyData: string[][];
}[] = catalogTable_1_data.sections;
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[repeat(4,1fr)]`;
const tableLayout = `flex flex-col ${horizGap}`;

/**--------------------------------**/
const CatalogTable_1 = () => {
  /**JSX**/
  return (
    <div
      data-component="CatalogTable_1__tableContainer"
      className={tableLayout}
    >
      <div data-layout="headerContainer" className={mainGridStyle}>
        {headerData.map((label, index) => (
          <TopHeader key={index} label={label} />
        ))}
      </div>
      <div
        data-layout="tableBodyContainer_sectionsHolder"
        className={tableLayout}
      >
        {sectionsData.map((sectionData, index) => (
          <TableSection key={index} sectionData={sectionData} />
        ))}
      </div>
    </div>
  );
};

export default CatalogTable_1;
