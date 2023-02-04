import React from 'react';
/**Components**/
import RowWithLayout from '../../../../../multipagesComponents/tables/diyTable/rowWithLayout/RowWithLayout';
import CatalogCardsSection from '../../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
/**Handler**/
import {
  mainStylesSwitcher,
  animH,
  animC,
} from '../../../../../multipagesComponents/tables/diyTable/handlers/stylesSwitcher';
/**TS**/
import { IF_ProductsTablesSection } from '../../../../../../utils/TS/typeScriptStaff';

/**------------------------------------------------**/
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
  /**...**/

  //   switch (polesNumber) {
  //     case 7:
  //       return {
  //         columnsPoles:
  //           'grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x-2 divide-dark group',
  //         columnsAmpers: 'grid grid-cols-[2fr_3fr_3fr] divide-x-2 divide-dark',
  //         columnsConnectionType:
  //           'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group',
  //         animatedRowStyle: [animH, animC, animC, animC, animC, animC, animC],
  //         ampersStyle: [ampsH, ampC, ampC, ampC, ampC, ampC, ampC],
  //         polesStyle: [polesH, polesC, polesC, polesC, polesC, polesC, polesC],
  //       };
  //     case 4:
  //       return {
  //         columnsPoles:
  //           'grid grid-cols-[2fr_2fr_2fr_2fr] divide-x-2 divide-dark group',
  //         columnsAmpers: 'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark',
  //         columnsConnectionType:
  //           'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group',
  //         animatedRowStyle: [animH, animC, animC, animC],
  //         ampersStyle: [ampsH, ampC],
  //         polesStyle: [polesH, polesC, polesC, polesC],
  //         cellsContainers: [polesH, polesC, polesC, polesC],
  //       };
  //     case 3:
  //       return {
  //         columnsPoles:
  //           'grid grid-cols-[2fr_3fr_3fr] divide-x-2 divide-dark group',
  //         columnsAmpers:
  //           'grid grid-cols-[2fr_3fr_3fr] divide-x-2 divide-dark group',
  //         columnsConnectionType:
  //           'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group',
  //         animatedRowStyle: [animH, animC, animC],
  //         ampersStyle: [ampsH, ampC, ampC],
  //         polesStyle: [polesH, polesC, polesC],
  //         cellsContainers: [polesH, polesC, polesC],
  //       };
  //   }
  // };

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
            // containerLayout="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x-2 divide-dark group"
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

        <RowWithLayout
          rowData={weightData}
          containerLayout={mainStylesSwitcher(polesNumber)?.columnsPoles}
          cellsContainersStyle={
            mainStylesSwitcher(polesNumber)?.animatedRowStyle
          }
        />
      </div>
      {/* <BasicTable
        tableHeader={tableHeader}
        tableBodyData={tableBody}
        multiCellsContainer={
          'grid grid-cols-[1fr_1fr] gap-[0.125rem]  group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300 py-2 divide-x-2 divide-dark'
        }
        multiCellsCell={[
          'text-center relative header-link-label text-dark',
          'text-center relative header-link-label text-dark',
          'text-center relative header-link-label text-dark',
        ]}
      /> */}
      {/* <div>
        <TableWithUnderlinedRows
          rowsData={norma}
          tableContainerStyle="w-full flex flex-col gap-y-4 pt-4"
          textStyle={[
            'p-small text-grey group-hover:text-light ease-in duration-300 disable ',
            'p-small text-center text-grey group-hover:text-light ease-in duration-300 disable ',
          ]}
        />
      </div> */}
    </div>
  );
};

export default TablesSection;
