/*Images saff*/
import { imgWtyczkiGniazda_04_tablicowe_schuko } from '../../../../public/images/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/imgWtyczkiGniazda_04_tablicowe-jednofazowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '13953',
  '13950',
  '13957',
  '13956',
  '13960',
  '13960F',
  '24960',
  '13955',
  '3905', //?no on www
];
const wtyczkiGniazdaSchukoTablicowe_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[3],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[3],
  subCategoryIndex: 3,
};

const wtyczkiGniazdaSchukoTablicowe_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-ip54-vert`,
    textIcons: ['IP54', '16A', '2P+TTL', 'EU / PL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[0],
    type: 'Typ: Gniazda tablicowe Schuko ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13953 / 13953F',
    altName: 'Gniazdo tablicowe Schuko IP54 / podłączenie boczne pionowe',
  },
  {
    arrayIndex: 1,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-ip54-hor`,
    textIcons: ['IP54', '16A', '2P+TTL', 'EU / PL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[1],
    type: 'Typ: Gniazda tablicowe Schuko ',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13950 / 13950F',
    altName: 'Gniazdo tablicowe Schuko IP54 / podłączenie boczne poziome',
  },
  {
    arrayIndex: 2,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-ip54-d-vert`,
    textIcons: ['IP54', '16A', '2P+TTL', 'EU / PL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[2],
    type: 'Typ: Gniazda tablicowe Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13957 / 13957F',
    altName: 'Gniazdo tablicowe Schuko IP54 / podwójne podłączenie pionowe',
  },
  {
    arrayIndex: 3,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-ip54-d-hor`,
    textIcons: ['IP54', '16A', '2P+TTL', 'EU / PL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[3],
    type: 'Typ: Gniazda tablicowe Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13956 / 13956F',
    altName: 'Gniazdo tablicowe Schuko IP54 / podwójne podłączenie poziome',
  },
  {
    arrayIndex: 4,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-ip67-eu`,
    textIcons: ['IP67', '16A', '2P+TTL', 'EU'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[4],
    type: 'Typ: Gniazda tablicowe Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13960',
  },
  {
    arrayIndex: 5,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-ip67-pl`,
    textIcons: ['IP67', '16A', '2P+TTL', 'PL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[5],
    type: 'Typ: Gniazda tablicowe Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13960F',
  },
  {
    arrayIndex: 6,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/wtyczka-23960`,
    textIcons: ['IP67', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[6],
    type: 'Typ: Wtyczka Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23960',
  },
  {
    arrayIndex: 7,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/gniazdo-24960-24961`,
    textIcons: ['IP67', '16A', '2P+TTL', 'EU / PL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[7],
    type: 'Typ: Gniazdo Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Modele: 24960 / 24961',
  },
  {
    arrayIndex: 8,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/box-13955`,
    textIcons: ['Format: 50x50'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[8],
    type: 'Typ: Puszka do gniazda',
    model: 'Model: 13955',
  },
  {
    arrayIndex: 9,
    path: `${catalogStructureData[0].subCategoriesUrls[3]}/cover-3905`,
    textIcons: ['Format: 50x50'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[9],
    type: 'Typ: Pokrywa do gniazda tablicowego',
    model: 'Model: 3905',
  },
];

export {
  wtyczkiGniazdaSchukoTablicowe_SubCategory_data,
  wtyczkiGniazdaSchukoTablicowe_productCards_data,
};
