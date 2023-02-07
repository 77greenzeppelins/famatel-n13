import React from 'react';
/**Components**/
import CatalogCardsSection from '../../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
import RowWithLayout from '../../../../../multipagesComponents/tables/diyTable/rowWithLayout/RowWithLayout';
/**Handler**/
import { mainStylesSwitcher } from '../../../../../multipagesComponents/tables/diyTable/handlers/stylesSwitcher';
/**TS**/
import { IF_ProductsTablesSection } from '../../../../../../utils/TS/typeScriptStaff';

/**----------------------------------**/
const TablesSection: React.FunctionComponent<IF_ProductsTablesSection> = ({
  productCardIndex,
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
      className="flex flex-col gap-10"
    >
      <CatalogCardsSection catalogCardTablesData={catalogCardTablesData} />
      <div className="flex flex-col gap-y-1 w-full ">
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
      </div>
    </div>
  );
};

export default TablesSection;
