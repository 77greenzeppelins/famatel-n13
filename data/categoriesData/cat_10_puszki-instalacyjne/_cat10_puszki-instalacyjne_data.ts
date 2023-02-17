/*Basic Data*/
import { ISubCategoriesItem } from '../../../utils/TS/typeScriptStaff';
import { corpoColors } from '../../_data';
import { catalogStructureData } from '../../_catalogStructure_data';

/*
Data for data
*/

const puszkiInstalacyjneSubCategoriesData: ISubCategoriesItem[] = [
  //___1__puszki-instalacyjne__zamykane
  {
    arrayIndex: 0,
    parentCategoryName: catalogStructureData[9].mainCategoryName,
    parentCategoryUrl: catalogStructureData[9].mainCategoryUrl,
    subCategoryName: catalogStructureData[9].subCategoriesNames[0],
    subCategoryUrl: catalogStructureData[9].subCategoriesUrls[0],
  },
  //___2__puszki-instalacyjne__dryWall
  {
    arrayIndex: 1,
    parentCategoryName: catalogStructureData[9].mainCategoryName,
    parentCategoryUrl: catalogStructureData[9].mainCategoryUrl,
    subCategoryName: catalogStructureData[9].subCategoriesNames[1],
    subCategoryUrl: catalogStructureData[9].subCategoriesUrls[1],
  },
  //___3__puszki-instalacyjne__osadzone
  {
    arrayIndex: 2,
    parentCategoryName: catalogStructureData[9].mainCategoryName,
    parentCategoryUrl: catalogStructureData[9].mainCategoryUrl,
    subCategoryName: catalogStructureData[9].subCategoriesNames[2],
    subCategoryUrl: catalogStructureData[9].subCategoriesUrls[2],
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
//   { t1: 'Stopień ochrony IE(IP C / EN 60529)', t2: 'IP54 / IP69' },
//   { t1: 'Maksymalna testowana temperatura robocza', t2: '+90 °C' },
//   { t1: 'Temperatura użytkowa zgodnie z normą', t2: '-25 °C / +40 °C' },
// ];

// const materialText: IDaneTechniczneText[] = [
//   { t1: 'Body material', t2: 'Poliamid6 - ABS' },
//   { t1: 'Contact material', t2: 'Brass - Nickel-plated brass' },
// ];

// const regulationText: string[] = ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'];

// const textStyle: string =
//   'text-light text-[1.5rem] xl:text-[1.95rem] xxxl:text-[2.25rem] tracking-[0.09rem] leading-normal';

export {
  puszkiInstalacyjneSubCategoriesData,
  // daneTechniczneText,
  // materialText,
  // regulationText,
  // textStyle,
};
