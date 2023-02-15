/*Images saff*/
import { imgWtyczkiGniazda_09_campingowe } from '../../../../public/images/c1_wtyczki-gniazda/9_camping/imgWtyczkiGniazda_09_campingowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const wtyczkiGniazdaCampingowe_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[8],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[8],
  subCategoryIndex: 8,
};

const wtyczkiGniazdaCampingowe_productCard_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13912`,
    textIcons: ['IP20', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[0],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13912',
  },
  {
    arrayIndex: 1,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13913`,
    textIcons: ['IP20', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[1],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13913',
  },
  {
    arrayIndex: 2,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13919`,
    textIcons: ['16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[2],
    type: 'Typ: Przemysłowe gniazdo 90° z gniazdem Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13919',
  },
  //__layout__2
  {
    arrayIndex: 3,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13000`,
    textIcons: ['IP44', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[3],
    type: 'Typ: Adapter domowo-przemysłowy z gniazdem Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13000',
  },
  {
    arrayIndex: 4,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13011`,
    textIcons: ['IP44', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[4],
    type: 'Typ: Adapter domowo-przemysłowy z wtyczką Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13011',
  },
  //__layout__3
  {
    arrayIndex: 5,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13917`,
    textIcons: ['IP20', '16A', '3P + N + T', '2P + T'],
    imageData: imgWtyczkiGniazda_09_campingowe[5],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13917',
  },
  {
    arrayIndex: 6,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13910`,
    textIcons: ['IP54', '16A', '2P + T'],
    imageData: imgWtyczkiGniazda_09_campingowe[6],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13910',
  },
  {
    arrayIndex: 7,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13922`,
    textIcons: ['IP54', '16A', '2P + T'],
    imageData: imgWtyczkiGniazda_09_campingowe[7],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13922',
  },
  {
    arrayIndex: 8,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13918`,
    textIcons: ['IP54', '16A', '3P+N+T', '2P + T'],
    imageData: imgWtyczkiGniazda_09_campingowe[8],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13918',
  },
  {
    arrayIndex: 9,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13961-13962`,
    textIcons: ['IP54', '16A'],
    imageData: imgWtyczkiGniazda_09_campingowe[9],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13961 / 13962',
  },
  {
    arrayIndex: 10,
    path: `${wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl}/model-13964-13965`,
    textIcons: ['IP54', '16A', 'zabezpieczenie'],
    imageData: imgWtyczkiGniazda_09_campingowe[10],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13964 / 13965',
  },
];

export {
  wtyczkiGniazdaCampingowe_SubCategory_data,
  wtyczkiGniazdaCampingowe_productCard_data,
};
