import React from 'react';
/**Components**/

import {
  vertGap,
  horizGap,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../utils/tailwindStyles';
/**TS**/
import { IFProdCatDataSchuko } from '../../../../../../utils/TS/typeScriptStaff';
import SvgTypeDE from './svgSection/SvgTypeDE';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[2fr_2fr_2fr_4fr] ${vertGap}`;
const headerGrid = `grid grid-cols-[2fr_8fr] ${vertGap}`;

const blueHeaderStyle =
  'fc bg-vB py-2 px-[1px] text-light text-center p-small  select-none';
const blueCellStyle =
  'fc bg-vB py-2 px-[1px] text-light text-center p-small hover:bg-vtB delay-100 ease-in duration-300 select-none';

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: IFProdCatDataSchuko;
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horizGap} `}
    >
      {catalogData.line1 ? (
        <div className={headerGrid}>
          <div className={sideHeaderCell}>{catalogData.line1.label} </div>
          <div>
            <SvgTypeDE />
          </div>
        </div>
      ) : null}
      <div className={mainGrid}>
        {catalogData.line2 ? (
          // <div className="grid grid-cols-[repeat(3,2fr)]">
          <>
            <div className={sideHeaderCell}>{catalogData.line2[0]} </div>
            <div className={sideHeaderCell}>{catalogData.line2[1]} </div>
            <div className={sideHeaderCell}>{catalogData.line2[2]} </div>
          </>
        ) : // </div>
        null}
        {catalogData.line3 ? (
          <div>
            <div className={blueHeaderStyle}>{catalogData.line3[0]} </div>
            <div className={blueHeaderStyle}>{catalogData.line3[1]} </div>
          </div>
        ) : null}
      </div>
      <div className={mainGrid}>
        {catalogData.line4 ? (
          // <div className="grid grid-cols-[repeat(3,2fr)]">
          <>
            <div className={sideHeaderCell}>{catalogData.line4[0]} </div>
            <div className="group">
              <div className={bodyCell}>{catalogData.line4[1]} </div>
            </div>
            <div className="group">
              <div className={bodyCell}>{catalogData.line4[2]} </div>
            </div>
          </>
        ) : // </div>
        null}
        {catalogData.line5 ? (
          <div className="group">
            <div className={blueCellStyle}>{catalogData.line5[0]} </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CatalogTable;
