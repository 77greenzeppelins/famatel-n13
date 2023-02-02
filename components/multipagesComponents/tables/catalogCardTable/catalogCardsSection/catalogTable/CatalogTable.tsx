import React from 'react';
import CatalogTableBody from './catalogTableBody/CatalogTableBody';
import CatalogTableHeader from './CatalogTableHeader/CatalogTableHeader';

const CatalogTable: React.FunctionComponent<{
  catalogCardTableData:
    | {
        headerTopData: string[][];
        headerBottomData: string[][];
        headerType: number;
        bodyType: number;
        amper: string;
        rowsData: string[][];
      }
    | {
        headerTopData: string[];
        headerBottomData: string[];
        headerType: number;
        bodyType: number;
        amper: string;
        rowsData: (string | undefined)[][];
      };
}> = ({ catalogCardTableData }) => {
  /**...WTF**/
  //   console.log(
  //     'catalogCardTableData.headerData:',
  //     catalogCardTableData.headerData
  //   );
  /**JSX**/
  return (
    <div
      data-component="CatalogTable__container"
      className="w-full flex flex-col gap-1 "
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
