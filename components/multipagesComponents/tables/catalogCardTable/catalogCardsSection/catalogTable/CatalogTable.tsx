import React from 'react';
import CatalogTableHeader from './CatalogTableHeader/CatalogTableHeader';
import CatalogTableBody from './catalogTableBody/CatalogTableBody';
/**TS**/
import { IF_CatalogCardTableData } from '../../../../../../utils/TS/typeScriptStaff';

/**-------------------------------------------------------------------------**/
const CatalogTable: React.FunctionComponent<IF_CatalogCardTableData> = ({
  catalogCardTableData,
}) => {
  /**...WTF**/
  //   console.log(
  //     'catalogCardTableData.headerData:',
  //     catalogCardTableData.headerData
  //   );
  /**JSX**/
  return (
    <div
      data-component="CatalogTable__container"
      className="w-full flex flex-col gap-2"
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
