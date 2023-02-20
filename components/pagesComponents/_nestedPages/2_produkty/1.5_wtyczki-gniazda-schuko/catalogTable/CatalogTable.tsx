import React from 'react';
/**Tailwind Styles**/
import {
  horizGap,
  tableTextS,
  aTopHeaderCell,
  aSideHeaderCellCenter,
  aBodyCell,
  aBlueHeaderStyle,
  aBlueCellStyle,
} from '../../../../../../utils/tailwindStyles';
/**TS**/
import { IFProdCatDataSchuko } from '../../../../../../utils/TS/typeScriptStaff';
import SvgTypeDE from './svgSection/SvgTypeDE';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[2fr_2fr_2fr_2fr]`;
const headerGrid = `grid grid-cols-[2fr_6fr] `;

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: IFProdCatDataSchuko;
}> = ({ catalogData }) => {
  /**JSX*/
  return (
    <div
      data-component="CatalogTable___container"
      className={`flex flex-col ${horizGap} `}
    >
      {catalogData.line1 ? (
        <div className={headerGrid}>
          <div className={aTopHeaderCell}>{catalogData.line1.label} </div>
          <div>
            <SvgTypeDE />
          </div>
        </div>
      ) : null}
      <div className={mainGrid}>
        {catalogData.line2 ? (
          <>
            <div className={`${aTopHeaderCell}`}>{catalogData.line2[0]} </div>
            <div className={`${aTopHeaderCell}`}>{catalogData.line2[1]} </div>
            <div className={`${aTopHeaderCell}`}>{catalogData.line2[2]} </div>
          </>
        ) : // </div>
        null}
        {catalogData.line3 ? (
          <div>
            <div className={`${aBlueHeaderStyle} flex-col h-full`}>
              <p>{catalogData.line3[0]}</p>
              <p className={tableTextS}>{catalogData.line3[1]}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className={mainGrid}>
        {catalogData.line4 ? (
          <>
            <div className={aSideHeaderCellCenter}>{catalogData.line4[0]} </div>
            <div className="group">
              <div className={aBodyCell}>{catalogData.line4[1]} </div>
            </div>
            <div className="group">
              <div className={aBodyCell}>{catalogData.line4[2]} </div>
            </div>
          </>
        ) : null}
        {catalogData.line5 ? (
          <div className="group">
            <div className={aBlueCellStyle}>{catalogData.line5[0]} </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CatalogTable;
