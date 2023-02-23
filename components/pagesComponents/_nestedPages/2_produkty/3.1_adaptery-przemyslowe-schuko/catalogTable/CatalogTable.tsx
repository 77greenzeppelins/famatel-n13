import React from 'react';
/**Components**/
import SvgTypePl from '../../../../../SVG/flags/SvgTypePl';
import SvgTypeEU from '../../../../../SVG/flags/SvgTypeEU';
/**TS**/
import { IFProdCatDataSchukoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../utils/tailwindStyles';
import SideHeader from '../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeader';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';

/**HardCoded Data**/
const grid1 = `grid grid-cols-[1fr_2fr] group`;
const grid2 = `grid grid-cols-[repeat(3,1fr)] group`;

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: {
    line1: { label: string; value: string };
    line2: { label: string; value: string };
    line3: string[];
  };
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    <div
      data-component="TablesSection___container"
      className={`flex flex-col ${horizGap} `}
    >
      {catalogData.line1 ? (
        <div className={grid1}>
          <SideHeader label={catalogData.line1.label} />
          <div>
            {catalogData.line1?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line2 ? (
        <div className={grid1}>
          <SideHeader label={catalogData.line2.label} />
          <div>
            {catalogData.line2?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line3 ? (
        <div className={grid2}>
          <RowWithSideHeader rowData={catalogData.line3} />
        </div>
      ) : null}
    </div>
  );
};

export default CatalogTable;
