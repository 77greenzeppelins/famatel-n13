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

const obudowyRozdzielniceSubCategoriesData: ISubCategoriesItem[] = [
  //___1__obudowy-i-rozdzielnice__obudowy-puste
  {
    arrayIndex: 0,
    parentCategoryName: catalogStructureData[7].mainCategoryName,
    parentCategoryUrl: catalogStructureData[7].mainCategoryUrl,
    subCategoryName: catalogStructureData[7].subCategoriesNames[0],
    subCategoryUrl: catalogStructureData[7].subCategoriesUrls[0],
  },
  //___2__obudowy-i-rozdzielnice__rozdzielnice-przemyslowe
  {
    arrayIndex: 1,
    parentCategoryName: catalogStructureData[7].mainCategoryName,
    parentCategoryUrl: catalogStructureData[7].mainCategoryUrl,
    subCategoryName: catalogStructureData[7].subCategoriesNames[1],
    subCategoryUrl: catalogStructureData[7].subCategoriesUrls[1],
  },
  //___3__obudowy-i-rozdzielnice__obudowy-gumowe
  {
    arrayIndex: 2,
    parentCategoryName: catalogStructureData[7].mainCategoryName,
    parentCategoryUrl: catalogStructureData[7].mainCategoryUrl,
    subCategoryName: catalogStructureData[7].subCategoriesNames[2],
    subCategoryUrl: catalogStructureData[7].subCategoriesUrls[2],
  },
  //___4__obudowy-i-rozdzielnice__akcesoria
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[7].mainCategoryName,
    parentCategoryUrl: catalogStructureData[7].mainCategoryUrl,
    subCategoryName: catalogStructureData[7].subCategoriesNames[3],
    subCategoryUrl: catalogStructureData[7].subCategoriesUrls[3],
  },
];

// const daneTechniczneText: IDaneTechniczneText[] = [
//   { t1: 'Napięcie znamionowe', t2: '100 V - 500 V' },
//   { t1: 'Napięcie izolacji', t2: '500 V' },
//   {
//     t1: 'Częstotliwość',
//     t2: '-50 / 500 Hz',
//   },
//   { t1: 'Prąd znamionowy', t2: '16 A - 32 A - 63 A - 125 A' },
//   { t1: 'Stopień ochrony IE(IP C / EN 60529)', t2: 'IP54 / IP67' },
//   { t1: 'Maksymalna testowana temperatura robocza', t2: '+70 °C' },
//   { t1: 'Temperatura użytkowa zgodnie z normą', t2: '-25 °C / +40 °C' },
// ];

// const materialText: IDaneTechniczneText[] = [
//   { t1: 'Body material', t2: 'Poliamid6 - ABS' },
//   { t1: 'Contact material', t2: 'Brass - Nickel-plated brass' },
// ];

const regulationText: string[] = ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'];

const textStyle: string =
  'text-light text-[1.5rem] xl:text-[1.75rem] xxxl:text-[2.25rem] tracking-[0.09rem] leading-normal';

export {
  pseudoHeroData,
  obudowyRozdzielniceSubCategoriesData,
  // daneTechniczneText,
  // materialText,
  regulationText,
  textStyle,
};
