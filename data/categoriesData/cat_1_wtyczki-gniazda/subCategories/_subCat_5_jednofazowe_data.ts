/*Images saff*/
import { imgWtyczkiGniazda_05_jednofazowe } from '../../../../public/images/c1_wtyczki-gniazda/5_jednofazowe/imgWtyczkiGniazda_05_jednofazowe';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';
import { catalogStructureData } from '../../../_catalogStructure_data';

const wtyczkiGniazdaSchuko_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[4],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[4],
  subCategoryIndex: 4,
};

const wtyczkiGniazdaSchuko_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-1167`,
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[0],
    type: 'Typ: Wtyczka gumowa Schuko',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 1167',
  },
  {
    arrayIndex: 1,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-2167`,
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[1],
    type: 'Typ: Gniazdo gumowe Schuko',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 2167',
  },
  {
    arrayIndex: 2,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-2167F`,
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[2],
    type: 'Typ: Gniazdo gumowe Schuko',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 2167 F',
  },
  {
    arrayIndex: 3,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-1165`,
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[3],
    type: 'Typ: Wtyczka gumowa Schuko',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 1165',
  },
  {
    arrayIndex: 4,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-2165`,
    textIcons: ['IP67', '16A', '2P+TTL', 'EU'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[4],
    type: 'Typ: Gniazdo przenośne z gumową zatyczką',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 2165',
  },
  {
    arrayIndex: 5,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-1165F`,
    textIcons: ['IP67', '16A', '2P+TTL', 'F'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[5],
    type: 'Typ: Gniazdo przenośne z gumową zatyczką',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 2165 F',
  },
  {
    arrayIndex: 6,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-187`,
    textIcons: ['IP67', '16A'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[6],
    type: 'Typ: Rozgałęźnik potrójny',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 187',
  },
  {
    arrayIndex: 7,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-188`,
    textIcons: ['IP67', '16A'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[7],
    type: 'Typ: Rozgałęźnik potrójny',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 188',
  },
  {
    arrayIndex: 8,
    path: `${catalogStructureData[0].subCategoriesUrls[4]}/model-2998`,
    textIcons: ['IP67', '15m', 'H07RN-F 3G 1,5 mm²'],
    imageData: imgWtyczkiGniazda_05_jednofazowe[8],
    type: 'Typ: Kabel',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 2998',
  },
];

export {
  wtyczkiGniazdaSchuko_SubCategory_data,
  wtyczkiGniazdaSchuko_productCards_data,
};
