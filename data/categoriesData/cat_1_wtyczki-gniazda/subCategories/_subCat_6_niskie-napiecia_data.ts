/*Images saff*/
import { imgWtyczkiGniazda_06_niskie_napiecia } from '../../../../public/images/c1_wtyczki-gniazda/6_niskie-napiecia/imgWtyczkiGniazda_06_niskie-napiecia';
/**BasicData**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const wtyczkiGniazdaNiskieNapiecia_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[5],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[5],
  subCategoryIndex: 5,
};

const productCardsData: IF_ProductCardData[] = [
  //__s.62
  {
    arrayIndex: 0,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/wtyczka-przenosna-ip44-16A-32A`,
    textIcons: ['IP44', '16A', '32A'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[0],
    type: 'Typ: Wtyczki przenośne na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Wtyczka przenośna na bardzo niskie napięcia IP44',
  },
  {
    arrayIndex: 1,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/wtyczka-przenosna-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[1],
    type: 'Typ: Wtyczki przenośne na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Wtyczka przenośna na bardzo niskie napięcia IP67',
  },
  {
    arrayIndex: 2,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/gniazdo-przenosne-ip44-16A-32A`,
    textIcons: ['IP44', '16A', '32A'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[2],
    type: 'Typ: Gniazda przenośne na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Gniazdo przenośne na bardzo niskie napięcia IP44',
  },
  //__s.64
  {
    arrayIndex: 3,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/gniazdo-przenosne-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[3],
    type: 'Typ: Gniazda przenośne na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Gniazdo przenośne na bardzo niskie napięcia IP67',
  },
  {
    arrayIndex: 4,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/gniazdo-tablicowe-ip44-16A-32A`,
    textIcons: ['IP44', '16A', '32A', 'wymiar: 75x85'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[4],
    type: 'Typ: Gniazda tablicowe proste na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Gniazdo tablicowe na bardzo niskie napięcia IP44',
  },
  {
    arrayIndex: 5,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/gniazdo-tablicowe-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A', 'wymiar: 75x85'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[5],
    type: 'Typ: Gniazda tablicowe proste na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Gniazdo tablicowe na bardzo niskie napięcia IP67',
  },
  //__s.66
  {
    arrayIndex: 6,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/gniazdo-stale-ip44-16A-32A`,
    textIcons: ['IP44', '16A', '32A'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[6],
    type: 'Typ: Gniazda stałe na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Gniazdo stałe na bardzo niskie napięcia IP44',
  },
  {
    arrayIndex: 7,
    path: `${wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl}/gniazdo-stale-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgWtyczkiGniazda_06_niskie_napiecia[7],
    type: 'Typ: Gniazda stałe na bardzo niskie napięcia',
    collection: 'Kolekcja: SpeedPRO',
    altName: 'Gniazdo stałe na bardzo niskie napięcia IP67',
  },
];

const niskieNapięciaSubCatTable1Data = {
  header: [
    'Napięcie znamionowe - V',
    'Częstotliwość - Hz',
    ['Położenie godzinowe', '2P', '3P'],
    'Kolor zgodnie z EN 60309',
  ],
  sectionsRow1: [
    ['20-25', '50-60', 'bez wpustu', 'bez wpustu', 'Fioletowy', ''],
    ['40-50', '50-60', '12', '12', 'Biały', ''],
  ],
  greenSectionRows: [
    ['100-200', '4', '4', 'Zielony', '*'],
    ['300', '2', '2', 'Zielony', '*'],
    ['400', '3', '3', 'Zielony', '*'],
    ['>400-500', '11', '11', 'Zielony', '*'],
  ],
  dcLine: [' ', 'DC', '10', '10', 'Biały', ''],
};

export {
  wtyczkiGniazdaNiskieNapiecia_SubCategory_data,
  productCardsData,
  niskieNapięciaSubCatTable1Data,
};
