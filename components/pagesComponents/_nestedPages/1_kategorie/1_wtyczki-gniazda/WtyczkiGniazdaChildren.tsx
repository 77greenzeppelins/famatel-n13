import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data*/
import { textLabels } from '../../../../../data/_data';
import { wtyczkiGniazda_daneTechniczneText } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';

/**---------------------------------------------**/
const WtyczkiGniazdaChildren = () => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-y-6">
      <SmallPseudoHeader text={textLabels.kategoriePage.l1} />
      <TableWithUnderlinedRows
        rowsData={wtyczkiGniazda_daneTechniczneText}
        //       tableContainerStyle= '';
        // rowContainerStyle=[];
        cellsStyles={['w-[50%]', 'w-[50%]']}
      />
      <SmallPseudoHeader text={textLabels.kategoriePage.l2} />
      <div className="h-[10vh]" />
    </div>
  );
};

export default WtyczkiGniazdaChildren;
