import React from 'react';
/**Components**/
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import DIYTable from '../../../../../multipagesComponents/tables/diyTable/DIYTable';
import CatalogCardsSection from '../../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
import RowWithLayout from '../../../../../multipagesComponents/tables/diyTable/rowWithLayout/RowWithLayout';
/**Handler**/
import { mainStylesSwitcher } from '../../../../../multipagesComponents/tables/diyTable/handlers/stylesSwitcher';
/**TS**/
import { IF_ProductsTablesSection } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles*/
import {
  horizGap,
  tablesSectionContainer,
} from '../../../../../../utils/tailwindStyles';
/**Basic Data*/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**----------------------------------**/
const TablesSection: React.FunctionComponent<IF_ProductsTablesSection> = ({
  polesNumber,
  polesData,
  ampersData,
  weightData,
  bodyData,
  connectionTypeData,
  wireData,
  catalogCardTablesData,
}) => {
  /**JSX**/
  return (
    <div
      data-component="TablesSection___container"
      className={`${tablesSectionContainer}`}
    >
      <SectionWithTable label={smallPseudoHeaders.l1}>
        <CatalogCardsSection catalogCardTablesData={catalogCardTablesData} />
      </SectionWithTable>
      <SectionWithTable label={smallPseudoHeaders.l2}>
        <DIYTable tableLayout={`flex flex-col ${horizGap}`}>
          <RowWithLayout
            rowData={ampersData}
            containerLayout={mainStylesSwitcher(polesNumber)?.columnsAmpers}
            cellsContainersStyle={mainStylesSwitcher(polesNumber)?.ampersStyle}
          />
          <RowWithLayout
            rowData={polesData}
            containerLayout={mainStylesSwitcher(polesNumber)?.columnsPoles}
            cellsContainersStyle={mainStylesSwitcher(polesNumber)?.polesStyle}
          />
          {bodyData?.map((rowData, index) => (
            <RowWithLayout
              key={index}
              rowData={rowData}
              containerLayout={mainStylesSwitcher(polesNumber)?.columnsPoles}
              cellsContainersStyle={
                mainStylesSwitcher(polesNumber)?.animatedRowStyle
              }
            />
          ))}
          <RowWithLayout
            rowData={connectionTypeData}
            containerLayout={
              mainStylesSwitcher(polesNumber)?.columnsConnectionType
            }
            cellsContainersStyle={
              mainStylesSwitcher(polesNumber)?.animatedRowStyle
            }
          />
          <RowWithLayout
            rowData={wireData}
            containerLayout={mainStylesSwitcher(polesNumber)?.columnsAmpers}
            cellsContainersStyle={
              mainStylesSwitcher(polesNumber)?.animatedRowStyle
            }
          />
          {weightData && (
            <RowWithLayout
              rowData={weightData}
              containerLayout={mainStylesSwitcher(polesNumber)?.columnsPoles}
              cellsContainersStyle={
                mainStylesSwitcher(polesNumber)?.animatedRowStyle
              }
            />
          )}
        </DIYTable>
      </SectionWithTable>
    </div>
  );
};

export default TablesSection;
