import React from 'react';
/**Tailwind Styles**/
import {
  vertGap,
  horizGap,
  horizGapL,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
} from '../../../../../../utils/tailwindStyles';
/**TS**/
import { IFProdCatDataSchuko2 } from '../../../../../../utils/TS/typeScriptStaff';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[2fr_8fr] ${vertGap}`;

/**-------------------------------**/
const CatalogTable2: React.FunctionComponent<{
  catalogData: IFProdCatDataSchuko2;
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col  ${horizGap} `}
    >
      {catalogData.line1 ? (
        <div className={mainGrid}>
          <div className={topHeaderCell}>{catalogData.line1.label} </div>
          <div>
            <div className={topHeaderCell}>{catalogData.line1.value} </div>
          </div>
        </div>
      ) : null}
      <div className={`${mainGrid} group`}>
        {catalogData.line2 ? (
          <>
            <div className={sideHeaderCell}>{catalogData.line2.label} </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line2?.value.map((label, i) => (
                <div key={i}>
                  <div className={bodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line3 ? (
          <>
            <div className={sideHeaderCell}>{catalogData.line3.label} </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line3?.value.map((label, i) => (
                <div key={i}>
                  <div className={bodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line4 ? (
          <>
            <div className={sideHeaderCell}>{catalogData.line4.label} </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line4?.value.map((label, i) => (
                <div key={i}>
                  <div className={bodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line5 ? (
          <>
            <div className={sideHeaderCell}>{catalogData.line5.label} </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line5?.value.map((label, i) => (
                <div key={i}>
                  <div className={bodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CatalogTable2;
