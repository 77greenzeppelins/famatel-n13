import React from 'react';
import CatalogTableHeader from './CatalogTableHeader/CatalogTableHeader';

const CatalogTable: React.FunctionComponent<{
  catalogCardTableData:
    | {
        headerTopData: string[][];
        headerBottomData: string[][];
        headerType: number;
        amper: string;
        rowsData: string[][];
      }
    | {
        headerTopData: string[];
        headerBottomData: string[];
        headerType: number;
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
    <div className="w-full ">
      {catalogCardTableData.headerType ? (
        // <div className="bg-corpo w-full h-full">............</div>
        <CatalogTableHeader
          headerTopData={catalogCardTableData.headerTopData}
          headerBottomData={catalogCardTableData.headerBottomData}
          headerType={catalogCardTableData.headerType}
        />
      ) : null}
      <div>{`body of ${catalogCardTableData.amper}`}</div>
    </div>
  );
};

export default CatalogTable;
