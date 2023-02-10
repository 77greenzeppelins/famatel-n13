/*Images saff*/
import { imgWtyczkiGniazda_07_chlodnicze } from '../../../../public/images/c1_wtyczki-gniazda/7_chlodnicze/imgWtyczkiGniazda_07_chlodnicze';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '14308',
  '24308',
  '24339',
  '24398',
  '25053',
  '26028',
  '25074',
  '25136',
  '25727',
  '26327',
  '26514',
];
const wtyczkiGniazdaKontenerowe_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[6],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[6],
  subCategoryIndex: 6,
};

const wtyczkiGniazdaKontenerowe_productCard_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-14308`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[0],
    type: 'Typ: Wtyczka przenośna',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 14308',
  },
  {
    arrayIndex: 1,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-24308`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[1],
    type: 'Typ: Gniazdo przenośne ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24308',
  },
  {
    arrayIndex: 2,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-24339`,
    textIcons: ['IP67', '32A', '3P + T (3H)', 'Format: 80 × 95'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[2],
    type: 'Typ: Gniazdo tablicowe skośne 10°',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24339',
  },
  {
    arrayIndex: 3,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-24398`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[3],
    type: 'Typ: Gniazdo stałe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24398',
  },
  //________________
  {
    arrayIndex: 4,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-25053`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[4],
    type: 'Typ: Gniazdo z blokadą tablicowe pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 25053',
  },
  {
    arrayIndex: 5,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-26028`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[5],
    type: 'Typ: Gniazdo z blokadą stałe pionowe ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 26028',
  },
  {
    arrayIndex: 6,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-25074`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[6],
    type: 'Typ: Gniazdo z blokadą stałe poziome ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 25074',
  },
  {
    arrayIndex: 7,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-25136`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[7],
    type: 'Typ: Gniazdo z blokadą stałe poziome ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 25136',
  },
  //___
  {
    arrayIndex: 8,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-26727`,
    textIcons: ['IP44', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[8],
    type: 'Typ: Gniazdo z blokadą i szyną DIN tablicowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 26727',
  },
  {
    arrayIndex: 9,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-26327`,
    textIcons: ['IP67', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[9],
    type: 'Typ: Gniazdo z blokadą i szyną DIN stałe ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 26327',
  },
  {
    arrayIndex: 10,
    path: `${wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl}/model-26514`,
    textIcons: ['IP44', '32A', '3P + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[10],
    type: 'Typ: Gniazdo z blokadą i szyną DIN tablicowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 26514',
  },
];

export {
  wtyczkiGniazdaKontenerowe_SubCategory_data,
  wtyczkiGniazdaKontenerowe_productCard_data,
};
