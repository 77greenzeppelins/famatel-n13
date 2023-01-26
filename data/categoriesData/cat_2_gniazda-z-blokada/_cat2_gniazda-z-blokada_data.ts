/*Basic Data*/
import { ISubCategoriesItem } from '../../../utils/TS/typeScriptStaff';
import { corpoColors } from '../../_data';
import { catalogStructureData } from '../../_catalogStructure_data';

/*
Data for data
*/

const pseudoHeroData = {
  svgIcons: ['IP54', 'IP61'],
  labeledIcons: ['16A', '32A', '63A', '125A'],
  iconColorBG: corpoColors.dark,
  iconColorFG: corpoColors.grey,
  iconSize: 10,
};

const gniazdaBlokadaSubCategoriesData: ISubCategoriesItem[] = [
  //___1__gniazda-z-blokada__tablicowe
  {
    arrayIndex: 0,
    parentCategoryName: catalogStructureData[1].mainCategoryName,
    parentCategoryUrl: catalogStructureData[1].mainCategoryUrl,
    subCategoryName: catalogStructureData[1].subCategoriesNames[0],
    subCategoryUrl: catalogStructureData[1].subCategoriesUrls[0],
  },
  //___2__gniazda-z-blokada__scienne
  {
    arrayIndex: 1,
    parentCategoryName: catalogStructureData[1].mainCategoryName,
    parentCategoryUrl: catalogStructureData[1].mainCategoryUrl,
    subCategoryName: catalogStructureData[1].subCategoriesNames[1],
    subCategoryUrl: catalogStructureData[1].subCategoriesUrls[1],
  },
  //___3__gniazda-z-blokada__
  {
    arrayIndex: 2,
    parentCategoryName: catalogStructureData[1].mainCategoryName,
    parentCategoryUrl: catalogStructureData[1].mainCategoryUrl,
    subCategoryName: catalogStructureData[1].subCategoriesNames[2],
    subCategoryUrl: catalogStructureData[1].subCategoriesUrls[2],
  },
  //___4__gniazda-z-blokada__
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[1].mainCategoryName,
    parentCategoryUrl: catalogStructureData[1].mainCategoryUrl,
    subCategoryName: catalogStructureData[1].subCategoriesNames[3],
    subCategoryUrl: catalogStructureData[1].subCategoriesUrls[3],
  },
];

const gniazdaBlokada_DaneTechniczneText = [
  ['Napięcie znamionowe', '100 V - 415 V'],
  ['Stopień ochrony IE(IP C / EN 60529)', 'IP54 / IP67'],
  ['Odporność na uderzenia (IEC / EN 62262)', 'IK08'],
  ['Prąd znamionowy', '16 A - 63 A '],
  ['Częstotliwość', '50 / 60 Hz'],
  ['Insulating resistance', '>10 MΩ'],
  ['Temperatura użytkowa zgodnie z normą', '-25 °C / +40 °C'],
  // ['Napięcie izolacji', '500 V'],
  // ['Maksymalna testowana temperatura robocza', '+10 °C'],
];

const gniazdaBlokada_MaterialText = [
  ['Materiał obudowy', 'Poliamid6 - ABS'],
  ['Materiał styków', 'Brass - Nickel-plated brass'],
];

const gniazdaBlokada_RegulationText = [
  ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'],
];

export {
  pseudoHeroData,
  gniazdaBlokadaSubCategoriesData,
  gniazdaBlokada_DaneTechniczneText,
  gniazdaBlokada_MaterialText,
  gniazdaBlokada_RegulationText,
};
