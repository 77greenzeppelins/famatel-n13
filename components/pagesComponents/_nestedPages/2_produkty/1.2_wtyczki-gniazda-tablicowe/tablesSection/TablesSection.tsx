import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import CatalogCardsSection from '../../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import DIYTable from '../../../../../multipagesComponents/tables/diyTable/DIYTable';
import RowWithLayout from '../../../../../multipagesComponents/tables/diyTable/rowWithLayout/RowWithLayout';
/**Handler**/
import { mainStylesSwitcher } from '../../../../../multipagesComponents/tables/diyTable/handlers/stylesSwitcher';
/**TS**/
import { IF_ProductsTablesSection } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles*/
import { horizGap } from '../../../../../../utils/tailwindStyles';
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
      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text="Karta Katalogowa"
          hasBox={true}
          hasVerticalOrnament={false}
        />
        <CatalogCardsSection catalogCardTablesData={catalogCardTablesData} />
      </SectionContentLayout>

      <SectionContentLayout divStyle="flex flex-col gap-y-8">
        <SmallPseudoHeader
          text="Specyfikacja Techniczna"
          hasBox={true}
          hasVerticalOrnament={false}
        />
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
      </SectionContentLayout>
    </div>
  );
};

export default TablesSection;

// {
//   productCardIndex: number;
//   polesNumber: number;
//   polesData: string[];
//   ampersData: string[];
//   bodyData?: string[][];
//   connectionTypeData: string[];
//   weightData: string[];
//   wireData: string[];
//   catalogCardTablesData: (
//     | {
//         headerTopData: string[][];
//         headerBottomData: string[][];
//         headerType: number;
//         bodyType: number;
//         amper: string;
//         rowsData: string[][];
//       }
//     | {
//         headerTopData: string[];
//         headerBottomData: string[];
//         headerType: number;
//         bodyType: number;
//         amper: string;
//         rowsData: (string | undefined)[][];
//       }
//   )[];
// }
