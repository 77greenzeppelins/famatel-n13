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

// const daneTechniczneText: IDaneTechniczneText[] = [
//   { t1: 'Napięcie znamionowe', t2: '100 V - 500 V' },
//   { t1: 'Napięcie izolacji', t2: '500 V' },
//   {
//     t1: 'Częstotliwość',
//     t2: '-50 / 500 Hz',
//   },
//   { t1: 'Prąd znamionowy', t2: '16 A - 32 A - 63 A - 125 A' },
//   { t1: 'Stopień ochrony IE(IP C / EN 60529)', t2: 'IP54 / IP61' },
//   { t1: 'Maksymalna testowana temperatura robocza', t2: '+10 °C' },
//   { t1: 'Temperatura użytkowa zgodnie z normą', t2: '-25 °C / +40 °C' },
// ];

// const materialText: IDaneTechniczneText[] = [
//   { t1: 'Body material', t2: 'Poliamid6 - ABS' },
//   { t1: 'Contact material', t2: 'Brass - Nickel-plated brass' },
// ];

const regulationText: string[] = ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'];

const textStyle: string =
  'text-light text-[1.5rem] xl:text-[1.15rem] xxxl:text-[2.25rem] tracking-[0.09rem] leading-normal';

export {
  pseudoHeroData,
  gniazdaBlokadaSubCategoriesData,
  // daneTechniczneText,
  // materialText,
  regulationText,
  textStyle,
};
