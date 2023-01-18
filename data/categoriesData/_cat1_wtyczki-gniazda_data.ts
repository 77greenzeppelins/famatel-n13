/*Basic Data*/
import { ISubCategoriesItem } from '../../utils/TS/typeScriptStaff';
import { mainCategories, mainCategoriesNames, corpoColors } from '../_data';
/*Images saff*/
import { imgOfProductsReps } from '../../public/images/categories/imgOfProductsReps';
// import { imagesWtyczkiGniazdaSubCategories } from '../../../../public/images/produkty/packshots/wtyczki_gniazda/_indexImagesWtyczkiGniazda';
/*TS*/
// import { IDaneTechniczneText } from '../../../../utils/interfaces';
// import type { ISubCategoriesItem } from './_cat1_wtyczki-gniazda_TS';

/*
Data for data and
*/

const wtyczkiGniazdaSubCategoryNames: string[] = [
  'Wtyczki i gniazda przenośne',
  'Wtyczki i gniazda tablicowe',
  'Wtyczki i gniazda ścienne',
  'Wtyczki i gniazda tablicowe jednofazowe (Schuko)',
  'Wtyczki i gniazda jednofazowe (Schuko)',
  'Wtyczki i gniazda na bardzo niskie napięcia',
  'Wtyczki i gniazda do kontenerów chłodniczych',
  'Wtyczki i gniazda do sprzętu estradowego',
  'Wtyczki i gniazda campingowe',
];
const subCategoriesPath = [
  `wtyczki-gniazda-przenosne`,
  `wtyczki-gniazda-tablicowe`,
  `wtyczki-gniazda-scienne`,
  `wtyczki-gniaza-tablicowe-1-f`,
  `wtyczki-gniazda-1-f`,
  `wtyczki-gniazda-b-niskie-napiecia`,
  `wtyczki-gniazda-chlodnicze`,
  `wtyczki-gniazda-estradowe`,
  `wtyczki-gniazda-campingowe`,
];

const subCategoriesUrls = [
  `${mainCategories[0].url}/${subCategoriesPath[0]}`,
  `${mainCategories[0].url}/${subCategoriesPath[1]}`,
  `${mainCategories[0].url}/${subCategoriesPath[2]}`,
  `${mainCategories[0].url}/${subCategoriesPath[3]}`,
  `${mainCategories[0].url}/${subCategoriesPath[4]}`,
  `${mainCategories[0].url}/${subCategoriesPath[5]}`,
  `${mainCategories[0].url}/${subCategoriesPath[6]}`,
  `${mainCategories[0].url}/${subCategoriesPath[7]}`,
  `${mainCategories[0].url}/${subCategoriesPath[8]}`,
];

const pseudoHeroData = {
  header: [mainCategories[0]],
  svgIcons: ['IP54', 'IP67'],
  labeledIcons: ['16A', '32A', '63A', '125A'],
  iconColorBG: corpoColors.dark,
  iconColorFG: corpoColors.grey,
  iconSize: 70,
};

const wtyczkiGniazdaSubCategoriesData: ISubCategoriesItem[] = [
  {
    arrayIndex: 0,
    parentCategory: mainCategoriesNames[0],
    name: wtyczkiGniazdaSubCategoryNames[0],
    url: subCategoriesUrls[0],
    // imageData: imagesWtyczkiGniazdaSubCategories[0],
  },
  // {
  //   arrayIndex: 1,
  //   parentCategory: mainCategoriesNames[0],
  //   name: wtyczkiGniazdaSubCategoryNames[1],
  //   url: subCategoriesUrls[1],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[1],
  // },
  // {
  //   parentCategory: mainCategoriesNames[0],
  //   arrayIndex: 2,
  //   name: wtyczkiGniazdaSubCategoryNames[2],
  //   url: subCategoriesUrls[2],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[2],
  // },
  // {
  //   parentCategory: mainCategoriesNames[0],
  //   arrayIndex: 3,
  //   name: wtyczkiGniazdaSubCategoryNames[3],
  //   url: subCategoriesUrls[3],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[3],
  // },
  // {
  //   parentCategory: mainCategoriesNames[0],
  //   arrayIndex: 4,
  //   name: wtyczkiGniazdaSubCategoryNames[4],
  //   url: subCategoriesUrls[4],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[4],
  // },
  // {
  //   parentCategory: mainCategoriesNames[0],
  //   arrayIndex: 5,
  //   name: wtyczkiGniazdaSubCategoryNames[5],
  //   url: subCategoriesUrls[5],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[5],
  // },
  // {
  //   arrayIndex: 6,
  //   parentCategory: mainCategoriesNames[0],
  //   name: wtyczkiGniazdaSubCategoryNames[6],
  //   url: subCategoriesUrls[6],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[6],
  // },
  // {
  //   arrayIndex: 7,
  //   parentCategory: mainCategoriesNames[0],
  //   name: wtyczkiGniazdaSubCategoryNames[7],
  //   url: subCategoriesUrls[7],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[7],
  // },
  // {
  //   arrayIndex: 8,
  //   parentCategory: mainCategoriesNames[0],
  //   name: wtyczkiGniazdaSubCategoryNames[8],
  //   url: subCategoriesUrls[8],
  //   // imageData: imagesWtyczkiGniazdaSubCategories[8],
  // },
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
  wtyczkiGniazdaSubCategoryNames,
  subCategoriesPath,
  subCategoriesUrls,
  pseudoHeroData,
  wtyczkiGniazdaSubCategoriesData,
  // daneTechniczneText,
  // materialText,
  regulationText,
  textStyle,
};
