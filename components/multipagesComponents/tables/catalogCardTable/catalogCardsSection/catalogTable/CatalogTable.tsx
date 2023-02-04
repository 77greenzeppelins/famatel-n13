import React from 'react';
import CatalogTableBody from './catalogTableBody/CatalogTableBody';
import CatalogTableHeader from './CatalogTableHeader/CatalogTableHeader';
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
      className="w-full flex flex-col gap-2 " //divide-y-4 divide-dark
    >
      {catalogCardTableData.headerType ? (
        // <div className="bg-corpo w-full h-full">............</div>
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
