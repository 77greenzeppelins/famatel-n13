import React from 'react';
/**Components**/
import TableSection from './tableSection/TableSection';
/**Basic Data*/
import { catalogTable_1_data } from '../../../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';

/**HardCoded Data*/
const yGapLarge = 'gap-y-[4px]';
const yGapMedium = 'gap-y-[2px]';
const xGapLarge = 'gap-x-[4px]';
const xGapMedium = 'gap-x-[2px]';
const horizontalContainer = `flex flex-col ${yGapLarge}`;
const mainGridStyle = `grid grid-cols-[repeat(4,1fr)] ${xGapMedium}`;
const sectionGridStyle = `${mainGridStyle} grid-rows-[repeat(6,1fr)] ${yGapMedium} `;
//   'grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(6,1fr)] divide-x-[2px] divide-y-[2px] divide-dark ';
//___grid item type_1
const horizontalHeaderStyle =
  'col-start-1 col-span-1 row-start-1 row-span-full fc bg-greyShade1  ';
//___grid item type_1; actual row...
const rowGridStyle = `col-start-2 col-span-full grid grid-cols-[repeat(3,1fr)] ${xGapMedium} group`;
const headerData: string[] = catalogTable_1_data.header;
const sectionsData: {
  horizontalHeader: string;
  bodyData: string[][];
}[] = catalogTable_1_data.sections;
/**--------------------------------**/
const CatalogTable_1 = () => {
  console.log('headerData', headerData);
  /**JSX**/
  return (
    <div
      data-component="CatalogTable_1__tableContainer"
      className={horizontalContainer}
    >
      <div data-layout="headerContainer" className={mainGridStyle}>
        {headerData.map((label, index) => (
          <div key={index} className="fc bg-greyShade1 py-2">
            <p className="text-light p-small">{label}</p>{' '}
          </div>
        ))}
      </div>
      <div
        data-layout="tableBodyContainer_sectionsHolder"
        className={horizontalContainer}
      >
        {sectionsData.map((sectionData, index) => (
          <TableSection
            key={index}
            sectionData={sectionData}
            sectionGridStyle={sectionGridStyle}
            horizontalHeaderStyle={horizontalHeaderStyle}
            rowGridStyle={rowGridStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogTable_1;
