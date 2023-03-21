import React from 'react';
/**Components**/
import TableFrame from '../../_tableFrame/TableFrame';
import CatalogTable from './catalogTable/CatalogTable';
/**TS**/
import { IF_CatalogCardTablesData } from '../../../../../utils/TS/typeScriptStaff';

interface IF_Props extends IF_CatalogCardTablesData {
  sliderTriggersValue?: string;
  customeTrigger?: string;
}

/**-----------------------------------------------------**/
const CatalogCardsSection: React.FC<IF_Props> = ({
  catalogCardTablesData,
  sliderTriggersValue,
  customeTrigger,
}) => {
  /**JSX* */
  return (
    <TableFrame
      sliderTriggersValue={customeTrigger ? customeTrigger : 'custom'}
      customeTrigger={
        sliderTriggersValue ? sliderTriggersValue : 'min-w-[724px]'
      }
    >
      {catalogCardTablesData?.map((catalogCardTableData, index) => (
        <CatalogTable key={index} catalogCardTableData={catalogCardTableData} />
      ))}
    </TableFrame>
  );
};

export default CatalogCardsSection;
