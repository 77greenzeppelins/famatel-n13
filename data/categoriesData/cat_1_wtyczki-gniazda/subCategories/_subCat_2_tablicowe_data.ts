/*Images saff*/
import { imgWtyczkiGniazda_02_tablicowe } from '../../../../public/images/c1_wtyczki-gniazda/2_tablicowe/imgWtyczkiGniazda_02_tablicowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const gniazdaTablicowe_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[1],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[1],
  subCategoryIndex: 1,
};

const productCardsData: IF_ProductCardData[] = [
  //__1
  {
    arrayIndex: 0,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip54-16A-32A-75`,
    textIcons: ['IP54', '16A', '32A', 'Format: 75 × 75'],
    imageData: imgWtyczkiGniazda_02_tablicowe[0],
    type: 'Typ: Wtyczki tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka tablicowa proste',
  },
  //__2
  {
    arrayIndex: 1,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip54-16A-55`,
    textIcons: ['IP54', '16A', 'Format: 55 × 55'],
    imageData: imgWtyczkiGniazda_02_tablicowe[1],
    type: 'Typ: Wtyczki tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka tablicowa proste',
  },
  //__3
  {
    arrayIndex: 2,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-63A`,
    textIcons: ['IP67', '63A'],
    imageData: imgWtyczkiGniazda_02_tablicowe[2],
    type: 'Typ: Wtyczki tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka tablicowa proste',
  },
  //__4
  {
    arrayIndex: 3,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip54-16A-32A-75-cover`,
    textIcons: ['IP54', '16A', '32A', 'Format: 75 × 75'],
    imageData: imgWtyczkiGniazda_02_tablicowe[3],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe proste',
  },
  //__5
  {
    arrayIndex: 4,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-16A-32A-75-cover`,
    textIcons: ['IP67', '16A', 'Format: 75 × 75'],
    imageData: imgWtyczkiGniazda_02_tablicowe[4],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe proste',
  },
  //__6
  {
    arrayIndex: 5,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-63A-cover`,
    textIcons: ['IP67', '63A', 'Format: 100 × 100'],
    imageData: imgWtyczkiGniazda_02_tablicowe[5],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe proste',
  },
  //__7
  {
    arrayIndex: 6,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/proste-ip67-125A-cover`,
    textIcons: ['IP67', '63A', 'Format: 120 × 120'],
    imageData: imgWtyczkiGniazda_02_tablicowe[6],
    type: 'Typ: Gniazda tablicowe proste',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe proste',
  },
  //__8
  {
    arrayIndex: 7,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne10-ip54-16A-32A-75-cover`,
    textIcons: ['IP54', '16A', '32A', 'Format: 75 × 85 / 80 × 95'],
    imageData: imgWtyczkiGniazda_02_tablicowe[7],
    type: 'Typ: Gniazda tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe skośne 10°',
  },
  //__9
  {
    arrayIndex: 8,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne10-ip67-16A-32A-75-cover`,
    textIcons: ['IP67', '16A', '32A', 'Format: 75 × 85 / 80 × 95'],
    imageData: imgWtyczkiGniazda_02_tablicowe[8],
    type: 'Typ: Gniazda tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe skośne 10°',
  },
  //__10
  {
    arrayIndex: 9,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne10-ip67-63A-75-cover`,
    textIcons: ['IP67', '63A', 'Format: 85 × 85'],
    imageData: imgWtyczkiGniazda_02_tablicowe[9],
    type: 'Typ: Gniazda tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe skośne 10°',
  },
  //__11
  {
    arrayIndex: 10,
    path: `${gniazdaTablicowe_SubCategory_data.subCategoryUrl}/skosne15-ip67-125A-75-cover`,
    textIcons: ['IP67', '125A', 'Format: 120 × 120'],
    imageData: imgWtyczkiGniazda_02_tablicowe[10],
    type: 'Typ: Gniazda tablicowe skośne 15°',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo tablicowe skośne 15°',
  },
];

export { gniazdaTablicowe_SubCategory_data, productCardsData };
