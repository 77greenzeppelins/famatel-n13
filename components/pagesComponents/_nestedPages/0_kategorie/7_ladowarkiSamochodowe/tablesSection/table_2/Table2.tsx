import React, { useState } from 'react';
/**Components**/
import SectionWithTable from '../../../../2_produkty/_sectionWithTable/SectionWithTable';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import BodyCell from '../../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
/**BasicData**/
import { smallPseudoHeaders } from '../../../../../../../data/_data';
/**TailwindStaff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
import { motion } from 'framer-motion';

/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[1fr_2fr_2fr_1fr] `;

/**--------------------------**/
const Table2: React.FC<{
  headerData: string[];
  tableBodyData: string[][];
  outletsData: string[];
}> = ({ headerData, tableBodyData, outletsData }) => {
  /**Local State**/
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  console.log('hoveredRow', hoveredRow);
  /**JSX**/
  return (
    <SectionWithTable label={smallPseudoHeaders.l1}>
      <div className={`flex flex-col ${horizGap}`}>
        <div className={mainGridStyle}>
          {headerData.map((label, index) => (
            <TopHeader key={index} label={label} isBreakAll={false} />
          ))}
        </div>
        <div className={`${mainGridStyle} ]`}>
          <div className={`flex flex-col ${horizGap} col-start-1 col-end-3`}>
            {tableBodyData.map((rowData, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[1fr_2fr] group"
                onHoverStart={() => setHoveredRow(i)}
                onHoverEnd={() => setHoveredRow(null)}
              >
                <RowWithSideHeader key={i} rowData={rowData} centered={true} />
              </motion.div>
            ))}
          </div>
          <div className="col-start-3 col-end-4 grid grid-rows-[repeat(8,1fr)]">
            <BodyCell
              label={outletsData[0]}
              //   containerStyle={`row-start-1 row-end-5 border-b border-dark ${
              //     hoveredRow && hoveredRow > 4
              //       ? 'bg-greyTint2 hover:bg-light delay-100 ease-in duration-300'
              //       : 'bg-greyTint2'
              //   }`}
              containerStyle={`row-start-1 row-end-5 fc py-2 px-[1px] border-x-[1px] border-b border-dark  delay-100 ease-in duration-300 select-none ${
                hoveredRow !== null && hoveredRow >= 0 && hoveredRow < 4
                  ? ' bg-light'
                  : 'bg-greyTint2'
              }`}
            />
            <BodyCell
              label={outletsData[1]}
              containerStyle={`row-start-5 row-span-full border-t border-dark fc py-2 px-[1px] border-x-[1px] border-dark  delay-100 ease-in duration-300 select-none ${
                hoveredRow !== null && hoveredRow >= 4
                  ? ' bg-light'
                  : 'bg-greyTint2'
              }`}
            />
          </div>
          <div className="col-start-4 col-span-full">
            <BodyCell
              label="brak"
              containerStyle="h-full fc py-2 px-[1px] border-x-[1px] border-dark bg-greyTint2 group-hover:bg-light delay-100 ease-in duration-300 select-none"
              // containerStyle="row-start-5 row-span-full border-t border-dark"
            />
          </div>
        </div>
      </div>
    </SectionWithTable>
  );
};

export default Table2;
