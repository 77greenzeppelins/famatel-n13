import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data*/
import { textLabels } from '../../../../../data/_data';
import {
  wtyczkiGniazda_daneTechniczneText,
  wtyczkiGniazda_materialText,
  wtyczkiGniazda_RegulationText,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';

/**---------------------------------------------**/
const WtyczkiGniazdaChildren = () => {
  /**JSX**/
  return (
    <>
      <SectionContentLayout>
        <SmallPseudoHeader text={textLabels.kategoriePage.l1} />
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazda_daneTechniczneText}
          //       tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-[50%]', 'w-[50%]']}
        />
      </SectionContentLayout>
      <SectionContentLayout>
        <SmallPseudoHeader text={textLabels.kategoriePage.l2} />
        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazda_materialText}
          //       tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-[50%]', 'w-[50%]']}
        />
      </SectionContentLayout>
      <SectionContentLayout>
        <SmallPseudoHeader text={textLabels.kategoriePage.l3} />
        {/* <TableWithUnderlinedRows
          rowsData={wtyczkiGniazda_RegulationText}
          // tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-full']}
        /> */}

        <TableWithUnderlinedRows
          rowsData={wtyczkiGniazda_RegulationText}
          //       tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-full']}
        />
      </SectionContentLayout>
      <div className="h-[1vh]" />
    </>
  );
};

export default WtyczkiGniazdaChildren;
