import React from 'react';
import CatalogTableHeader from './CatalogTableHeader/CatalogTableHeader';
import CatalogTableBody from './catalogTableBody/CatalogTableBody';
/**TS**/
import { IF_CatalogCardTableData } from '../../../../../../utils/TS/typeScriptStaff';
import TableFrame from '../../../_tableFrame/TableFrame';

/**-------------------------------------------------------------------------**/
const CatalogTable: React.FunctionComponent<IF_CatalogCardTableData> = ({
  catalogCardTableData,
}) => {
  /**JSX**/
  return (
    <div
      data-component="CatalogTable__container"
      className="w-full flex flex-col divide-[2px]"
    >
      {catalogCardTableData.headerType ? (
        <CatalogTableHeader
          headerTopData={catalogCardTableData.headerTopData}
          headerBottomData={catalogCardTableData.headerBottomData}
          headerType={catalogCardTableData.headerType}
        />
      ) : null}
      <CatalogTableBody
        amper={catalogCardTableData.amper}
        rowsData={catalogCardTableData.rowsData}
        bodyType={catalogCardTableData.bodyType}
      />
    </div>
  );
};

export default CatalogTable;
