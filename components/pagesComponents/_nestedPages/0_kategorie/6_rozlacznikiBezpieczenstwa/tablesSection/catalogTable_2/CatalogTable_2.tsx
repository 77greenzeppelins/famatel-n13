import React from 'react';

/**Components**/
import SideHeaderCenter from '../../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeaderCenter';
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import BodyCell from '../../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
import RowWithSideHeader from '../../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**BasicData**/
import { catalogTable_2_data } from '../../../../../../../data/categoriesData/cat_6_rozlacznikiBezpieczenstwa/cat6_rozlacznikBezpieczenstwa_data';
/**Tailwind Staff**/
import { horizGap } from '../../../../../../../utils/tailwindStyles';
import SliderWithScrollbar from '../../../../../../multipagesComponents/sliders/sliderWithScrollbar/SliderWithScrollbar';

//__
const {
  topHeaderLeftCol,
  sideHeader,
  topHeaderLine1,
  topHeaderLine2,
  topHeaderLine3,
  bodyRows,
} = catalogTable_2_data;

/*
<SliderWithScrollbar>
      <div
        data-component="CatalogTable_2__container"
        className={`flex flex-col ${horizGap} min-w-[903px]`}
      >

*/

const CatalogTable_2 = () => {
  return (
    <SliderWithScrollbar>
      <div className="flex flex-col min-w-[903px]">
        {/*
       ________________________________________________header
      */}
        <div
          className={`grid grid-cols-[1fr_5fr] grid-rows-[repeat(3, 1fr)] ${horizGap}`}
        >
          <SideHeaderCenter
            label={topHeaderLeftCol}
            containerStyle="col-start-1 col-end-2 row-start-1 row-end-4 border-t-[2px] border-dark"
            //___border-t-[1px] border-dark
          />
          <SideHeaderCenter
            label={topHeaderLine1}
            containerStyle="col-start-2 col-span-full row-start-1 row-span-1 "
          />
          <SideHeaderCenter
            label={topHeaderLine2}
            containerStyle="col-start-2 col-span-full row-start-2 row-span-1 "
          />
          <div
            data-layout="headerContainer"
            className="col-start-2 col-span-full row-start-3 row-span-1  grid grid-cols-[repeat(5,1fr)]"
          >
            {topHeaderLine3.map((label, index) => (
              <TopHeader key={index} label={label} />
            ))}
          </div>
        </div>
        {/*
       ________________________________________________AC23A
      */}
        <div
          className={`grid grid-cols-[2fr_10fr] grid-rows-[repeat(4, 1fr)] ${horizGap}`}
        >
          {/*
        ________________________________________________AC23A
        */}
          <div
            className={`col-start-1 col-span-full row-start-1 row-end-3 grid grid-cols-[2fr_10fr] ${horizGap} group`}
          >
            <SideHeaderCenter
              label={sideHeader[0]}
              containerStyle="col-start-1 col-end-2 row-start-1 row-end-3 border-t-[2px] border-dark"
            />
            <div
              data-layout="headerContainer"
              className="col-start-2 col-span-full row-start-1 row-end-2  grid grid-cols-[repeat(10,1fr)]"
            >
              {bodyRows[0].map((label, index) => (
                <BodyCell key={index} label={label} />
              ))}
            </div>
            <div
              data-layout="headerContainer"
              className="col-start-2 col-span-full row-start-2 row-end-3  grid grid-cols-[repeat(10,1fr)]"
            >
              {bodyRows[1].map((label, index) => (
                <BodyCell key={index} label={label} />
              ))}
            </div>
          </div>
          {/*
        ________________________________________________AC22A
        */}
          <div
            className={`col-start-1 col-span-full row-start-3 row-end-4 grid grid-cols-[2fr_repeat(10,1fr)] group`}
          >
            <RowWithSideHeader
              rowData={[sideHeader[1], ...bodyRows[2]]}
              centered={true}
            />
          </div>
          {/*
        ________________________________________________AC21A
        */}
          <div
            className={`col-start-1 col-span-full row-start-4 row-end-5 grid grid-cols-[2fr_repeat(10,1fr)] group`}
          >
            <RowWithSideHeader
              rowData={[sideHeader[2], ...bodyRows[3]]}
              centered={true}
            />
          </div>
        </div>
      </div>
    </SliderWithScrollbar>
  );
};

export default CatalogTable_2;
