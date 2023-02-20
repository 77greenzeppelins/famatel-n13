import React from 'react';
/**Tailwind Styles**/
import {
  horizGap,
  aTopHeaderCell,
  aSideHeaderCellCenter,
  aBodyCell,
} from '../../../../../../utils/tailwindStyles';
/**TS**/
import { IFProdCatDataSchuko2 } from '../../../../../../utils/TS/typeScriptStaff';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[2fr_8fr]`;

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
          <div className={aTopHeaderCell}>{catalogData.line1.label} </div>

          <div className={aTopHeaderCell}>{catalogData.line1.value} </div>
        </div>
      ) : null}
      <div className={`${mainGrid} group`}>
        {catalogData.line2 ? (
          <>
            <div className={aSideHeaderCellCenter}>
              {catalogData.line2.label}{' '}
            </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line2?.value.map((label, i) => (
                <div key={i}>
                  <div className={aBodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line3 ? (
          <>
            <div className={aSideHeaderCellCenter}>
              {catalogData.line3.label}{' '}
            </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line3?.value.map((label, i) => (
                <div key={i}>
                  <div className={aBodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line4 ? (
          <>
            <div className={aSideHeaderCellCenter}>
              {catalogData.line4.label}{' '}
            </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line4?.value.map((label, i) => (
                <div key={i}>
                  <div className={aBodyCell}>{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line5 ? (
          <>
            <div className={aSideHeaderCellCenter}>
              {catalogData.line5.label}{' '}
            </div>
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line5?.value.map((label, i) => (
                <div key={i}>
                  <div className={aBodyCell}>{label}</div>
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
