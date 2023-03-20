import React from 'react';
/**Components**/
import CatalogTable from './catalogTable/CatalogTable';
/**TS**/
import { IF_CatalogCardTablesData } from '../../../../../utils/TS/typeScriptStaff';
import TableFrame from '../../_tableFrame/TableFrame';

/**-----------------------------------------------------**/
const CatalogCardsSection: React.FunctionComponent<
  IF_CatalogCardTablesData
> = ({ catalogCardTablesData }) => {
  /**...WTF**/
  // console.log('catalogCardTablesData:', catalogCardTablesData);
  /**JSX* */
  return (
    <TableFrame
      sliderTriggersValue={'custom'}
      customeTrigger="min-w-[924px]"
      // detailsForContainerStyle=
    >
      {catalogCardTablesData?.map((catalogCardTableData, index) => (
        <CatalogTable key={index} catalogCardTableData={catalogCardTableData} />
      ))}
    </TableFrame>
  );
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
};

export default CatalogCardsSection;
