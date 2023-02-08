/*Basic Data*/
import { ISubCategoriesItem } from '../../../utils/TS/typeScriptStaff';
import { catalogStructureData } from '../../_catalogStructure_data';

const adapteryPrzemysloweSubCategoriesData: ISubCategoriesItem[] = [
  //___1__adaptery-przemyslowe-schuko
  {
    arrayIndex: 0,
    parentCategoryName: catalogStructureData[2].mainCategoryName,
    parentCategoryUrl: catalogStructureData[2].mainCategoryUrl,
    subCategoryName: catalogStructureData[2].subCategoriesNames[0],
    subCategoryUrl: catalogStructureData[2].subCategoriesUrls[0],
  },
  //___2__adaptery-przemyslowe-wielokrotne
  {
    arrayIndex: 1,
    parentCategoryName: catalogStructureData[2].mainCategoryName,
    parentCategoryUrl: catalogStructureData[2].mainCategoryUrl,
    subCategoryName: catalogStructureData[2].subCategoriesNames[1],
    subCategoryUrl: catalogStructureData[2].subCategoriesUrls[1],
  },
  //___3__adaptery-przemyslowe-wielokrotne-z-kablem
  {
    arrayIndex: 2,
    parentCategoryName: catalogStructureData[2].mainCategoryName,
    parentCategoryUrl: catalogStructureData[2].mainCategoryUrl,
    subCategoryName: catalogStructureData[2].subCategoriesNames[2],
    subCategoryUrl: catalogStructureData[2].subCategoriesUrls[2],
  },
];

// const gniazdaBlokada_DaneTechniczneText = [
//   ['Napięcie znamionowe', '100 V - 415 V'],
//   ['Stopień ochrony IE(IP C / EN 60529)', 'IP54 / IP67'],
//   ['Odporność na uderzenia (IEC / EN 62262)', 'IK08'],
//   ['Prąd znamionowy', '16 A - 63 A '],
//   ['Częstotliwość', '50 / 60 Hz'],
//   ['Insulating resistance', '>10 MΩ'],
//   ['Temperatura użytkowa zgodnie z normą', '-25 °C / +40 °C'],
//   // ['Napięcie izolacji', '500 V'],
//   // ['Maksymalna testowana temperatura robocza', '+10 °C'],
// ];

// const gniazdaBlokada_MaterialText = [
//   ['Materiał obudowy', 'Poliamid6 - ABS'],
//   ['Materiał styków', 'Brass - Nickel-plated brass'],
// ];

// const gniazdaBlokada_RegulationText = [
//   ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'],
// ];

export {
  adapteryPrzemysloweSubCategoriesData,
  // pseudoHeroData,
  // gniazdaBlokada_DaneTechniczneText,
  // gniazdaBlokada_MaterialText,
  // gniazdaBlokada_RegulationText,
};
