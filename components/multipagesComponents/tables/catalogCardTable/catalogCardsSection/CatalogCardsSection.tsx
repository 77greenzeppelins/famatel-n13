import React from 'react';
/**Components**/
import TableFrame from '../../_tableFrame/TableFrame';
import CatalogTable from './catalogTable/CatalogTable';
/**TS**/
import { IF_CatalogCardTablesData } from '../../../../../utils/TS/typeScriptStaff';

interface IF_Props extends IF_CatalogCardTablesData {
  sliderTriggersValue?: string;
}

/**-----------------------------------------------------**/
const CatalogCardsSection: React.FC<IF_Props> = ({
  catalogCardTablesData,
  sliderTriggersValue = 'lg',
}) => {
  /**JSX* */
  return (
    <TableFrame sliderTriggersValue={sliderTriggersValue}>
      {catalogCardTablesData?.map((catalogCardTableData, index) => (
        <CatalogTable key={index} catalogCardTableData={catalogCardTableData} />
      ))}
    </TableFrame>
  );
};

export default CatalogCardsSection;

// return (
//   <div
//     className="flex flex-col divide-[2px] "
//     data-component="CatalogCardsSection__container"
//   >
//     {catalogCardTablesData?.map((catalogCardTableData, index) => (
//       <CatalogTable key={index} catalogCardTableData={catalogCardTableData} />
//     ))}
//   </div>
// );
