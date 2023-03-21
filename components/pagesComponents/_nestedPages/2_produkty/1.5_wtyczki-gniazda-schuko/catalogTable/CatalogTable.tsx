import React from 'react';
/**Components**/
import TableFrame from '../../../../../multipagesComponents/tables/_tableFrame/TableFrame';
import BodyCell from '../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
import SideHeaderCenter from '../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeaderCenter';
import SvgTypeDE from './svgSection/SvgTypeDE';
/**Tailwind Styles**/
import {
  tableTextS,
  aBlueHeaderStyle,
  aBlueCellStyle,
} from '../../../../../../utils/tailwindStyles';
/**TS**/
import { IFProdCatDataSchuko } from '../../../../../../utils/TS/typeScriptStaff';

/**HardCoded Data**/
const mainGrid = `grid grid-cols-[2fr_2fr_2fr_2fr]`;
const headerGrid = `grid grid-cols-[2fr_6fr] `;

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: IFProdCatDataSchuko;
}> = ({ catalogData }) => {
  /**JSX*/
  return (
    <TableFrame sliderTriggersValue={'vsm'}>
      {catalogData.line1 ? (
        <div className={headerGrid}>
          <SideHeaderCenter label={catalogData.line1.label} />
          <div>
            <SvgTypeDE />
          </div>
        </div>
      ) : null}
      <div className={mainGrid}>
        {catalogData.line2?.map((label, i) => (
          <SideHeaderCenter key={i} label={label} />
        ))}
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
            <SideHeaderCenter label={catalogData.line4[0]} />
            <div className="group">
              <BodyCell label={catalogData.line4[1]} />
            </div>
            <div className="group">
              <BodyCell label={catalogData.line4[2]} />
            </div>
          </>
        ) : null}
        {catalogData.line5 ? (
          <div className="group">
            <div className={aBlueCellStyle}>{catalogData.line5[0]} </div>
          </div>
        ) : null}
      </div>
    </TableFrame>
  );
};

export default CatalogTable;
