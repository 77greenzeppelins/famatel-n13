import React from 'react';
/**Components**/
import CatalogTable from './catalogTable/CatalogTable';
/**TS**/
import { IF_CatalogCardTablesData } from '../../../../../utils/TS/typeScriptStaff';

/**-----------------------------------------------------**/
const CatalogCardsSection: React.FunctionComponent<
  IF_CatalogCardTablesData
> = ({ catalogCardTablesData }) => {
  /**...WTF**/
  // console.log('catalogCardTablesData:', catalogCardTablesData);
  /**JSX* */
  return (
    <div
      className="flex flex-col gap-2"
      data-component="CatalogCardsSection__container"
    >
      {catalogCardTablesData.map((catalogCardTableData, index) => (
        <CatalogTable key={index} catalogCardTableData={catalogCardTableData} />
      ))}
    </div>
  );
};

export default CatalogCardsSection;
