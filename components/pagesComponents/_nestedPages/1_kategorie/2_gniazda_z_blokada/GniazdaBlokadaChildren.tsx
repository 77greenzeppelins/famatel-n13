import React from 'react';
/**Components**/
import PageContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
/**Basic Data*/
import { textLabels } from '../../../../../data/_data';
import {
  gniazdaBlokada_DaneTechniczneText,
  gniazdaBlokada_MaterialText,
  gniazdaBlokada_RegulationText,
} from '../../../../../data/categoriesData/cat_2_gniazda-z-blokada/_cat2_gniazda-z-blokada_data';

/**---------------------------------------------**/
const GniazdaBlokadaChildren = () => {
  /**JSX**/
  return (
    <PageContentLayout>
      <SectionContentLayout>
        <SmallPseudoHeader text={textLabels.kategoriePage.l1} />
        <TableWithUnderlinedRows
          rowsData={gniazdaBlokada_DaneTechniczneText}
          //       tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-[50%]', 'w-[50%]']}
        />
      </SectionContentLayout>
      <SectionContentLayout>
        <SmallPseudoHeader text={textLabels.kategoriePage.l2} />
        <TableWithUnderlinedRows
          rowsData={gniazdaBlokada_MaterialText}
          //       tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-[50%]', 'w-[50%]']}
        />
      </SectionContentLayout>
      <SectionContentLayout>
        <SmallPseudoHeader text={textLabels.kategoriePage.l3} />
        <TableWithUnderlinedRows
          rowsData={gniazdaBlokada_RegulationText}
          //       tableContainerStyle= '';
          // rowContainerStyle=[];
          cellsStyles={['w-full']}
        />
      </SectionContentLayout>
      <div className="h-[1vh]" />
    </PageContentLayout>
  );
};

export default GniazdaBlokadaChildren;
