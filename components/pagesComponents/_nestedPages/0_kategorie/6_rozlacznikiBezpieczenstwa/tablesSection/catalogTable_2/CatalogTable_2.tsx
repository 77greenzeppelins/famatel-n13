import React from 'react';
/**BasicData**/
import { catalogTable_2_data } from '../../../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';

/**HardCoded Data*/
const yGapLarge = 'gap-y-[4px]';
const yGapMedium = 'gap-y-[2px]';
const xGapLarge = 'gap-x-[4px]';
const xGapMedium = 'gap-x-[2px]';
const horizontalContainer = `flex flex-col ${yGapLarge}`;
const mainGridStyle = `grid grid-cols-[repeat(12,1fr)] grid-rows-[repeat(8,1fr)] ${xGapMedium}`;
const sectionGridStyle = `${mainGridStyle} grid-rows-[repeat(6,1fr)] ${yGapMedium} `;
//   'grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(6,1fr)] divide-x-[2px] divide-y-[2px] divide-dark ';
//___grid item type_1
const sideHeaderStyle = `col-start-1 col-span-2 row-start-1 row-span-full grid grid-rows-[4fr_2fr_1fr_1fr] ${yGapMedium}`;
//___grid item type_1; actual row...
const rowGridStyle = `col-start-2 col-span-full grid grid-cols-[repeat(3,1fr)] ${xGapMedium} group`;
//__
const { sideHeader, topHeaderLine1, topHeaderLine2, topHeaderLine3 } =
  catalogTable_2_data;

const CatalogTable_2 = () => {
  return (
    <div className={mainGridStyle}>
      <div className={sideHeaderStyle}>
        {sideHeader.map((label, i) => (
          <div key={i} className="fc bg-greyShade1 py-2">
            <p className="text-light p-medium">{label}</p>
          </div>
        ))}
      </div>
      <div className="col-start-3 col-span-full row-start-1 row-span-2">
        {topHeaderLine1.map((label, i) => (
          <div key={i} className="fc bg-greyShade1 py-2">
            <p className="text-light p-medium">{label}</p>
          </div>
        ))}
      </div>
      <div className="col-start-3 col-span-full row-start-3 row-span-1 fc">
        <p className="text-light p-medium"> {topHeaderLine2}</p>
      </div>
      <div
        className={`col-start-3 col-span-full row-start-4 row-span-1 grid grid-cols-[repeat(5,1fr)] ${xGapMedium}`}
      >
        {topHeaderLine3.map((label, i) => (
          <div key={i} className="fc bg-greyShade1 py-2">
            <p className="text-light p-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogTable_2;
