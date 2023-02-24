import React from 'react';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../utils/tailwindStyles';
/**TS**/
import { IFProdCatDataSchuko2 } from '../../../../../../utils/TS/typeScriptStaff';
import BodyCell from '../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
import SideHeaderCenter from '../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeaderCenter';
import TopHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
/**HardCoded Data**/
const mainGrid = `grid grid-cols-[1fr_4fr]`;

/**-------------------------------**/
const CatalogTable2: React.FunctionComponent<{
  catalogData: IFProdCatDataSchuko2;
}> = ({ catalogData }) => {
  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col  ${horizGap} `}
    >
      {catalogData.line1 ? (
        <div className={mainGrid}>
          <TopHeader label={catalogData.line1.label} />
          <TopHeader label={catalogData.line1.value} />
        </div>
      ) : null}
      <div className={`${mainGrid} group`}>
        {catalogData.line2 ? (
          <>
            <SideHeaderCenter label={catalogData.line2.label} />
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line2?.value.map((label, i) => (
                <BodyCell key={i} label={label} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line3 ? (
          <>
            <SideHeaderCenter label={catalogData.line3.label} />
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line3?.value.map((label, i) => (
                <BodyCell key={i} label={label} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line4 ? (
          <>
            <SideHeaderCenter label={catalogData.line4.label} />
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line4?.value.map((label, i) => (
                <BodyCell key={i} label={label} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={`${mainGrid} group`}>
        {catalogData.line5 ? (
          <>
            <SideHeaderCenter label={catalogData.line5.label} />
            <div className={`flex flex-col ${horizGap}`}>
              {catalogData.line5?.value.map((label, i) => (
                <BodyCell key={i} label={label} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CatalogTable2;
