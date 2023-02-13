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

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: '/',
    textIcons: ['IP20', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[0],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13912',
  },
  {
    arrayIndex: 1,
    path: '/',
    textIcons: ['IP20', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[1],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13913',
  },
  {
    arrayIndex: 2,
    path: '/',
    textIcons: ['16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[2],
    //___Typ: Gniazdo tablicowe skośne 10° / Wersja kontenerowa
    type: 'Typ: Przemysłowe gniazdo 90° z gmiazdem Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13919',
  },
  {
    arrayIndex: 3,
    path: '/',
    textIcons: ['IP44', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[3],
    type: 'Typ: Adapter domowo-przemysłowy z gniazdem Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13011',
  },
  {
    arrayIndex: 5,
    path: '/',
    textIcons: ['IP20', '16A', '3P + N + T', '2P + T'],
    imageData: imgWtyczkiGniazda_09_campingowe[4],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13917',
  },
];

export { wtyczkiGniazdaCampingowe_SubCategory_data, productCardsData };
