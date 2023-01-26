/*Basic Data*/
import { ISubCategoriesItem } from '../../../utils/TS/typeScriptStaff';
import { corpoColors } from '../../_data';
import { catalogStructureData } from '../../_catalogStructure_data';

/*
Data for data
*/

const pseudoHeroData = {
  svgIcons: ['IP54', 'IP67'],
  labeledIcons: ['16A', '32A', '63A', '125A'],
  iconColorBG: corpoColors.dark,
  iconColorFG: corpoColors.grey,
  iconSize: 70,
};

const wtyczkiGniazdaSubCategoriesData: ISubCategoriesItem[] = [
  //___1__wtyczki-gniazda__przenosne
  {
    arrayIndex: 0,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[0],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[0],
  },
  //___2__wtyczki-gniazda__tablicowe
  {
    arrayIndex: 1,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[1],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[1],
  },
  //___3__wtyczki-gniazda__scienne
  {
    arrayIndex: 2,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[2],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[2],
  },
  //___4__wtyczki-gniazda__tablicowe-jednofazowe
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[3],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[3],
  },
  //___5__wtyczki-gniazda__jednofazowe
  {
    arrayIndex: 4,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[4],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[4],
  },
  //___6__wtyczki-gniazda__chlodnicze
  {
    arrayIndex: 5,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[5],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[5],
  },
  //___7__wtyczki-gniazda__niskie-napięcia
  {
    arrayIndex: 6,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[6],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[6],
  },
  //___8__wtyczki-gniazda__eventowe
  {
    arrayIndex: 7,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[7],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[7],
  },
  //___8__wtyczki-gniazda__campingowe
  {
    arrayIndex: 8,
    parentCategoryName: catalogStructureData[0].mainCategoryName,
    parentCategoryUrl: catalogStructureData[0].mainCategoryUrl,
    subCategoryName: catalogStructureData[0].subCategoriesNames[8],
    subCategoryUrl: catalogStructureData[0].subCategoriesUrls[8],
  },
];

// const wtyczkiGniazda_daneTechniczneText = [
//   { t1: 'Napięcie znamionowe',  '100 V - 500 V' },
//   { t1: 'Napięcie izolacji',  '500 V' },
//   {
//     t1: 'Częstotliwość',
//      '-50 / 500 Hz',
//   },
//   { t1: 'Prąd znamionowy',  '16 A - 32 A - 63 A - 125 A' },
//   { t1: 'Stopień ochrony IE(IP C / EN 60529)',  'IP54 / IP67' },
//   { t1: 'Maksymalna testowana temperatura robocza',  '+70 °C' },
//   { t1: 'Temperatura użytkowa zgodnie z normą',  '-25 °C / +40 °C' },
// ];
const wtyczkiGniazda_daneTechniczneText = [
  ['Napięcie znamionowe', '100 V - 500 V'],
  ['Napięcie izolacji', '500 V'],
  ['Częstotliwość', '-50 / 500 Hz'],
  ['Prąd znamionowy', '16 A - 125 A'],
  ['Stopień ochrony (IEC / EN 60529)', 'IP54 / IP67'],
  ['Maksymalna testowana temperatura robocza', '+70 °C'],
  ['Temperatura użytkowa zgodnie z normą', '-25 °C / +40 °C'],
];

const wtyczkiGniazda_materialText = [
  ['Materiał obudowy', 'Poliamid6 - ABS'],
  ['Materiał styków', 'Brass - Nickel-plated brass'],
];

const wtyczkiGniazda_RegulationText = [
  ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'],
];

// const textStyle: string =
//   'text-light text-[1.5rem] xl:text-[1.75rem] xxxl:text-[2.25rem] tracking-[0.09rem] leading-normal';

export {
  wtyczkiGniazdaSubCategoriesData,
  wtyczkiGniazda_daneTechniczneText,
  wtyczkiGniazda_materialText,
  wtyczkiGniazda_RegulationText,
};
