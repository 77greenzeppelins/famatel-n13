import React from 'react';
/**Components**/
import CatalogCardsSection from '../../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
import SectionWithTable from '../../_sectionWithTable/SectionWithTable';
import DIYTable from '../../../../../multipagesComponents/tables/diyTable/DIYTable';
import RowWithLayout from '../../../../../multipagesComponents/tables/diyTable/rowWithLayout/RowWithLayout';
/**Handler**/
import {
  mainStylesSwitcher,
  animH,
  animC,
} from '../../../../../multipagesComponents/tables/diyTable/handlers/stylesSwitcher';
/**TS**/
import { IF_ProductsTablesSection } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles*/
import { horizGap } from '../../../../../../utils/tailwindStyles';
/**Basic Data**/
import { smallPseudoHeaders } from '../../../../../../data/_data';

/**------------------------------------------------**/
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
  /**Special case for SpeedPRO IP44 / index 12**/
  const forWeirStylesSwitcher = (ampersNumber: number) => {
    switch (ampersNumber) {
      case 2:
        return {
          columnsWeire: 'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group',
          animatedRowStyle: [animH, animC],
        };
      case 3:
        return {
          columnsWeire:
            'grid grid-cols-[2fr_3fr_3fr] divide-x-2 divide-dark group',
          animatedRowStyle: [animH, animC, animC],
        };
    }
  };

  /**JSX**/
  return (
    <div
      data-component="TablesSection___container"
      className="flex flex-col w-full gap-16"
    >
      <SectionWithTable label={smallPseudoHeaders.l1}>
        <CatalogCardsSection catalogCardTablesData={catalogCardTablesData} />
      </SectionWithTable>

      <SectionWithTable label={smallPseudoHeaders.l2}>
        <DIYTable tableLayout={`flex flex-col ${horizGap} `}>
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
            containerLayout={
              forWeirStylesSwitcher(ampersData.length)?.columnsWeire
            }
            cellsContainersStyle={
              forWeirStylesSwitcher(ampersData.length)?.animatedRowStyle
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
