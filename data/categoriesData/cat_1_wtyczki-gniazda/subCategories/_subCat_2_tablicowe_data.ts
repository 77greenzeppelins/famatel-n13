/*Images saff*/
import { imgWtyczkiGniazda_02_tablicowe } from '../../../../public/images/c1_wtyczki-gniazda/2_tablicowe/imgWtyczkiGniazda_02_tablicowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '13631',
  '13634',
  '13377',
  '23270',
  '24373',
  '24374',
  '24377',
  '23230',
  '24333',
  '24336',
  '24337',
];

const gniazdaTablicowe_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[1],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[1],
  subCategoryIndex: 1,
};

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip54-16A-32A-75`,
    textIcons: ['IP54', '16A', '32A', 'Format: 75 × 75'],
    imageData: imgWtyczkiGniazda_02_tablicowe[0],
    type: 'Typ: Wtyczki tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 1,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip54-16A-55`,
    textIcons: ['IP54', '16A', 'Format: 55 × 55'],
    imageData: imgWtyczkiGniazda_02_tablicowe[1],
    type: 'Typ: Wtyczki tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 2,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-63A`,
    textIcons: ['IP67', '63A'],
    imageData: imgWtyczkiGniazda_02_tablicowe[2],
    type: 'Typ: Wtyczki tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 3,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip54-16A-32A-75-cover`,
    textIcons: ['IP54', '16A', '32A', 'Format: 75 × 75'],
    imageData: imgWtyczkiGniazda_02_tablicowe[3],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 4,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-16A-32A-75-cover`,
    textIcons: ['IP67', '16A', 'Format: 75 × 75'],
    imageData: imgWtyczkiGniazda_02_tablicowe[4],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 5,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-63A-cover`,
    textIcons: ['IP67', '63A', 'Format: 100 × 100'],
    imageData: imgWtyczkiGniazda_02_tablicowe[5],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 6,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-125A-cover`,
    textIcons: ['IP67', '63A', 'Format: 120 × 120'],
    imageData: imgWtyczkiGniazda_02_tablicowe[6],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 7,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne10-ip54-16A-32A-75-cover`,
    textIcons: ['IP54', '16A', '32A', 'Format: 75 × 85 / 80 × 95'],
    imageData: imgWtyczkiGniazda_02_tablicowe[7],
    type: 'Typ: Gniazda tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 8,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne10-ip67-16A-32A-75-cover`,
    textIcons: ['IP67', '16A', '32A', 'Format: 75 × 85 / 80 × 95'],
    imageData: imgWtyczkiGniazda_02_tablicowe[8],
    type: 'Typ: Gniazda tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 9,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne10-ip67-63A-75-cover`,
    textIcons: ['IP67', '63A', 'Format: 85 × 85'],
    imageData: imgWtyczkiGniazda_02_tablicowe[9],
    type: 'Typ: Gniazda tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 10,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne15-ip67-125A-75-cover`,
    textIcons: ['IP67', '125A', 'Format: 120 × 120'],
    imageData: imgWtyczkiGniazda_02_tablicowe[10],
    type: 'Typ: Gniazda tablicowe skośne 15°',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
];

export { gniazdaTablicowe_SubCategory_data, productCardsData };
