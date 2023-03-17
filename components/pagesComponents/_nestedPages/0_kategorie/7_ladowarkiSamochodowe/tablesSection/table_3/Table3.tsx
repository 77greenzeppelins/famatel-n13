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
const Table3: React.FC<{
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
          <div className={`flex flex-col ${horizGap} col-start-1 col-end-4`}>
            {tableBodyData.map((rowData, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[1fr_2fr_2fr] group"
                onHoverStart={() => setHoveredRow(i)}
                onHoverEnd={() => setHoveredRow(null)}
              >
                <RowWithSideHeader key={i} rowData={rowData} centered={true} />
              </motion.div>
            ))}
          </div>
          <div className="col-start-4 col-end-5 grid grid-rows-[1fr_1fr]">
            <BodyCell
              label={outletsData[0]}
              containerStyle={`row-start-1  fc py-2 px-[1px] border-x-[1px] border-b border-dark  delay-100 ease-in duration-300 select-none ${
                hoveredRow !== null && hoveredRow >= 0 && hoveredRow < 8
                  ? ' bg-light'
                  : 'bg-greyTint2'
              }`}
            />
            <BodyCell
              label={outletsData[1]}
              containerStyle={`row-start-2 border-t border-dark fc py-2 px-[1px] border-x-[1px] border-dark  delay-100 ease-in duration-300 select-none ${
                hoveredRow !== null && hoveredRow >= 8
                  ? ' bg-light'
                  : 'bg-greyTint2'
              }`}
            />
          </div>
          {/* <div className="col-start-4 col-span-full">
            <BodyCell
              label="brak"
              containerStyle="h-full fc py-2 px-[1px] border-x-[1px] border-dark bg-greyTint2 group-hover:bg-light delay-100 ease-in duration-300 select-none"
              // containerStyle="row-start-5 row-span-full border-t border-dark"
            />
          </div> */}
        </div>
      </div>
    </SectionWithTable>
  );
};

export default Table3;
