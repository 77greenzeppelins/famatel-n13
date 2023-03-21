import React from 'react';
/**Components**/
import SvgTypePl from '../../../../../SVG/flags/SvgTypePl';
import SvgTypeEU from '../../../../../SVG/flags/SvgTypeEU';
/**TS**/
import { IFProdCatDataSchukoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import { horizGap } from '../../../../../../utils/tailwindStyles';
import SideHeaderCenter from '../../../../../multipagesComponents/tables/__cells/layoutXL/SideHeaderCenter';
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import TableFrame from '../../../../../multipagesComponents/tables/_tableFrame/TableFrame';

/**HardCoded Data**/
const mainGrid = `grid grid-cols-[repeat(2,1fr)] group`;

/**-------------------------------**/
const CatalogTable: React.FunctionComponent<{
  catalogData: IFProdCatDataSchukoTablicowe;
}> = ({ catalogData }) => {
  /**...**/

  /**JSX*/
  return (
    // <div
    //   data-component="TablesSection___container"
    //   className={`flex flex-col ${horizGap} `}
    // >
    <TableFrame sliderTriggersValue={'vsm'}>
      {catalogData.line1 ? (
        <div className={mainGrid}>
          <SideHeaderCenter label={catalogData.line1.label} />
          <div>
            {catalogData.line1?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line2 ? (
        <div className={mainGrid}>
          <SideHeaderCenter label={catalogData.line2.label} />
          <div>
            {catalogData.line2?.value === 'PL' ? <SvgTypePl /> : <SvgTypeEU />}{' '}
          </div>
        </div>
      ) : null}
      {catalogData.line3 ? (
        <div className={mainGrid}>
          <RowWithSideHeader
            rowData={[catalogData.line3.label, catalogData.line3.value]}
            centered={true}
          />
        </div>
      ) : null}
      {catalogData.line4 ? (
        <div className={mainGrid}>
          <RowWithSideHeader
            rowData={[catalogData.line4.label, catalogData.line4.value]}
            centered={true}
          />
        </div>
      ) : null}
      {catalogData.line5 ? (
        <div className={mainGrid}>
          <RowWithSideHeader
            rowData={[catalogData.line5.label, catalogData.line5.value]}
            centered={true}
          />
        </div>
      ) : null}
      {catalogData.line6 ? (
        <div className={mainGrid}>
          <RowWithSideHeader
            rowData={[catalogData.line6.label, catalogData.line6.value]}
            centered={true}
          />
        </div>
      ) : null}
    </TableFrame>
    // </div>
  );
};

export default CatalogTable;
