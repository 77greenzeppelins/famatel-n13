import React from 'react';
import CatalogTable from './catalogTable/CatalogTable';

const CatalogCardsSection: React.FunctionComponent<{
  catalogCardTablesData: (
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
      }
  )[];
}> = ({ catalogCardTablesData }) => {
  /**...WTF**/
  console.log('catalogCardTablesData:', catalogCardTablesData);
  /**JSX* */
  return (
    <div
      className="flex flex-col gap-4"
      data-component="CatalogCardsSection__container"
    >
      {catalogCardTablesData.map((catalogCardTableData, index) => (
        <CatalogTable key={index} catalogCardTableData={catalogCardTableData} />
      ))}
    </div>
  );
};

export default CatalogCardsSection;
