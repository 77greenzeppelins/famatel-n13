import React from 'react';
/**Components**/
import CatalogTable_1 from './catalogTable_1/CatalogTable_1';
import CatalogTable_2 from './catalogTable_2/CatalogTable_2';

/**---------------------------------**/
const TablesSection = () => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-10">
      <CatalogTable_1 />
      <CatalogTable_2 />
    </div>
  );
};

export default TablesSection;
