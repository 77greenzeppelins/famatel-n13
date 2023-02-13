/*Images saff*/
import { imgWtyczkiGniazda_08_estradowe } from '../../../../public/images/c1_wtyczki-gniazda/8_estradowe/imgWtyczkiGniazda_08_estradowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const wtyczkiGniazdaEstradowe_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[7],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[7],
  subCategoryIndex: 7,
};

const wtyczkiGniazdaEstradowe_productCard_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-13410`,
    textIcons: ['IP44', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[0],
    type: 'Typ: Wtyczka przenośna do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13410',
  },
  {
    arrayIndex: 1,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-23410`,
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[1],
    type: 'Typ: niazdo przenośne do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23410',
  },
  {
    arrayIndex: 2,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-23480`,
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[2],
    type: 'Typ: Gniazdo tablicowe do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23480',
  },
  {
    arrayIndex: 3,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-1107`,
    textIcons: ['IP44', '16A'],
    imageData: imgWtyczkiGniazda_08_estradowe[3],
    type: 'Typ: Gumowa wtyczka z uziemieniem',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 1107',
  },

  {
    arrayIndex: 4,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-2108-2109`,
    textIcons: ['IP44', '16A'],
    imageData: imgWtyczkiGniazda_08_estradowe[4],
    type: 'Typ: Trailing rubber socket with earth',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 2108 / 2109',
  },

  {
    arrayIndex: 5,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-17220`,
    textIcons: ['IP54', '16A', 'gniazdo 1-faz.'],
    // imageData: imgWtyczkiGniazda_08_estradowe[6],
    imageData: imgWtyczkiGniazda_08_estradowe[5],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17220',
  },
  {
    arrayIndex: 6,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-17120`,
    textIcons: ['IP54', '16A', 'gniazdo 1-faz.', 'wtyczka 1-faz.'],
    imageData: imgWtyczkiGniazda_08_estradowe[6],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17120',
  },
  {
    arrayIndex: 7,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-17122`,
    textIcons: ['IP54', '16A', 'gniazdo 1-faz.', 'wtyczka 1-faz.'],
    imageData: imgWtyczkiGniazda_08_estradowe[7],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17122',
  },

  {
    arrayIndex: 8,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-17023`,
    textIcons: ['16A', '1.5m.', 'H07RN-F'],
    imageData: imgWtyczkiGniazda_08_estradowe[8],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17023',
  },
  {
    arrayIndex: 9,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/model-17020`,
    textIcons: ['IP54', '16A', 'gniazdo 1-faz.'],
    imageData: imgWtyczkiGniazda_08_estradowe[9],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17020',
  },
  {
    arrayIndex: 10,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/box`,
    textIcons: ['IP54'],
    imageData: imgWtyczkiGniazda_08_estradowe[10],
    type: 'Typ: Skrzynia do sprzętu estradowego',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    // model: 'Model: 39103',
  },
  {
    arrayIndex: 11,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/podstawa`,
    imageData: imgWtyczkiGniazda_08_estradowe[11],
    type: 'Typ: Galvanized stackable stool',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    // model: 'Model: 39103',
  },
  {
    arrayIndex: 12,
    path: `${wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl}/wozek`,
    imageData: imgWtyczkiGniazda_08_estradowe[12],
    type: 'Typ: Chassis, 4 wheels, 2 wheels',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    // model: 'Model: 39103',
  },
];

export {
  wtyczkiGniazdaEstradowe_SubCategory_data,
  wtyczkiGniazdaEstradowe_productCard_data,
};