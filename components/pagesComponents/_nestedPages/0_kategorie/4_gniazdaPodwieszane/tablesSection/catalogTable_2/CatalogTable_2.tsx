import React from 'react';
/**Comonents**/
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**Tailwind Staff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
/**HardCoded Data*/
const mainGridStyle = `grid grid-cols-[repeat(10,1fr)] group`;

const CatalogTable_2: React.FC<{
  headerData: string[];
  tableBodyData: string[][];
}> = ({ headerData, tableBodyData }) => {
  return (
    <div className="overflow-hidden">
      <div className={`flex flex-col ${horizGap} min-w-[903px]`}>
        <div className={mainGridStyle}>
          {headerData.map((label, index) => (
            <TopHeader key={index} label={label} isBreakAll={false} />
          ))}
        </div>
        <div className={`flex flex-col ${horizGap}`}>
          {tableBodyData.map((rowData, i) => (
            <div key={i} className={mainGridStyle}>
              <RowWithSideHeader key={i} rowData={rowData} centered={true} />
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="flex flex-col">
    //   {/*
    //    ________________________________________________header
    //   */}
    //   <div
    //     className={`grid grid-cols-[1fr_5fr] grid-rows-[repeat(3, 1fr)] ${horizGap}`}
    //   >
    //     <SideHeaderCenter
    //       label={topHeaderLeftCol}
    //       containerStyle="col-start-1 col-end-2 row-start-1 row-end-4 border-t-[2px] border-dark"
    //       //___border-t-[1px] border-dark
    //     />
    //     <SideHeaderCenter
    //       label={topHeaderLine1}
    //       containerStyle="col-start-2 col-span-full row-start-1 row-span-1 "
    //     />
    //     <SideHeaderCenter
    //       label={topHeaderLine2}
    //       containerStyle="col-start-2 col-span-full row-start-2 row-span-1 "
    //     />
    //     <div
    //       data-layout="headerContainer"
    //       className="col-start-2 col-span-full row-start-3 row-span-1  grid grid-cols-[repeat(5,1fr)]"
    //     >
    //       {topHeaderLine3.map((label, index) => (
    //         <TopHeader key={index} label={label} />
    //       ))}
    //     </div>
    //   </div>
    //   {/*
    //    ________________________________________________AC23A
    //   */}
    //   <div
    //     className={`grid grid-cols-[2fr_10fr] grid-rows-[repeat(4, 1fr)] ${horizGap}`}
    //   >
    //     {/*
    //     ________________________________________________AC23A
    //     */}
    //     <div
    //       className={`col-start-1 col-span-full row-start-1 row-end-3 grid grid-cols-[2fr_10fr] ${horizGap} group`}
    //     >
    //       <SideHeaderCenter
    //         label={sideHeader[0]}
    //         containerStyle="col-start-1 col-end-2 row-start-1 row-end-3 border-t-[2px] border-dark"
    //       />
    //       <div
    //         data-layout="headerContainer"
    //         className="col-start-2 col-span-full row-start-1 row-end-2  grid grid-cols-[repeat(10,1fr)]"
    //       >
    //         {bodyRows[0].map((label, index) => (
    //           <BodyCell key={index} label={label} />
    //         ))}
    //       </div>
    //       <div
    //         data-layout="headerContainer"
    //         className="col-start-2 col-span-full row-start-2 row-end-3  grid grid-cols-[repeat(10,1fr)]"
    //       >
    //         {bodyRows[1].map((label, index) => (
    //           <BodyCell key={index} label={label} />
    //         ))}
    //       </div>
    //     </div>
    //     {/*
    //     ________________________________________________AC22A
    //     */}
    //     <div
    //       className={`col-start-1 col-span-full row-start-3 row-end-4 grid grid-cols-[2fr_repeat(10,1fr)] group`}
    //     >
    //       <RowWithSideHeader
    //         rowData={[sideHeader[1], ...bodyRows[2]]}
    //         centered={true}
    //       />
    //     </div>
    //     {/*
    //     ________________________________________________AC21A
    //     */}
    //     <div
    //       className={`col-start-1 col-span-full row-start-4 row-end-5 grid grid-cols-[2fr_repeat(10,1fr)] group`}
    //     >
    //       <RowWithSideHeader
    //         rowData={[sideHeader[2], ...bodyRows[3]]}
    //         centered={true}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default CatalogTable_2;
