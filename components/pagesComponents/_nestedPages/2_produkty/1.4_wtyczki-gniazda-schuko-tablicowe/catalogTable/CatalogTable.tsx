import React from 'react';
/**Components**/
import CatalogTableRow from './row/CatalogTableRow';
import SvgTypeEU from './svgSection/SvgTypeEU';
import SvgTypePl from './svgSection/SvgTypePl';
/**TS**/
import { IFProdCatDataSchukoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
/**HardCoded Data**/
const vertGap = 'divide-x-[2px] divide-dark';
const horGap = 'divide-y-[2px] divide-dark';
const mainGrid = `grid grid-cols-[repeat(2,1fr)] ${vertGap} group`;
const topHeaderCellStyle =
  'fc bg-greyShade1 py-2 px-[1px] text-light text-center p-small select-none';
const headerCellStyle =
  'fc py-2 px-[1px] bg-greyShade1 text-light text-center p-small group-hover:bg-corpo delay-100 ease-in duration-300 select-none';
const bodyCellStyle =
  'fc py-2 px-[1px] bg-greyTint1 text-dark text-center p-small group-hover:bg-light delay-100 ease-in duration-300 select-none';

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: IFProdCatDataSchukoTablicowe;
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horGap} `}
    >
      {catalogData.line1 ? (
        <div className={mainGrid}>
          <div className={headerCellStyle}>{catalogData.line1.label} </div>
          <div>
            {catalogData.line1?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line2 ? (
        <div className={mainGrid}>
          <div className={headerCellStyle}>{catalogData.line2.label} </div>
          <div>
            {catalogData.line2?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line3 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={headerCellStyle}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line3.label}
          value={catalogData.line3.value}
        />
      ) : null}
      {catalogData.line4 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={headerCellStyle}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line4.label}
          value={catalogData.line4.value}
        />
      ) : null}
      {catalogData.line5 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={headerCellStyle}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line5.label}
          value={catalogData.line5.value}
        />
      ) : null}
      {catalogData.line6 ? (
        <CatalogTableRow
          mainGrid={mainGrid}
          headerCellStyle={headerCellStyle}
          bodyCellStyle={bodyCellStyle}
          label={catalogData.line6.label}
          value={catalogData.line6.value}
        />
      ) : null}
    </div>
  );
};

export default CatalogTable;
