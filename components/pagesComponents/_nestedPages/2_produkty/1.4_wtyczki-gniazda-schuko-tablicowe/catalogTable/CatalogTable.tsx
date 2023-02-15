import React from 'react';
/**Components**/
import CatalogTableRow from './row/CatalogTableRow';
import SvgTypePl from '../../../../../SVG/flags/SvgTypePl';
import SvgTypeEU from '../../../../../SVG/flags/SvgTypeEU';
/**TS**/
import { IFProdCatDataSchukoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import {
  vertGap,
  horizGap,
  sideHeaderCellCenter,
  bodyCell as bodyCellStyle,
} from '../../../../../../utils/tailwindStyles';

/**HardCoded Data**/
const mainGrid = `grid grid-cols-[repeat(2,1fr)] ${vertGap} group`;

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: IFProdCatDataSchukoTablicowe;
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horizGap} `}
    >
      {catalogData.line1 ? (
        <div className={mainGrid}>
          <div className={sideHeaderCellCenter}>{catalogData.line1.label} </div>
          <div>
            {catalogData.line1?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line2 ? (
        <div className={mainGrid}>
          <div className={sideHeaderCellCenter}>{catalogData.line2.label} </div>
          <div>
            {catalogData.line2?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line3 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={sideHeaderCellCenter}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line3.label}
          value={catalogData.line3.value}
        />
      ) : null}
      {catalogData.line4 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={sideHeaderCellCenter}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line4.label}
          value={catalogData.line4.value}
        />
      ) : null}
      {catalogData.line5 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={sideHeaderCellCenter}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line5.label}
          value={catalogData.line5.value}
        />
      ) : null}
      {catalogData.line6 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={sideHeaderCellCenter}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line6.label}
          value={catalogData.line6.value}
        />
      ) : null}
    </div>
  );
};

export default CatalogTable;
