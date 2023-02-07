/*Images saff*/
import { imgGniazdaBlokada_01_tablicowe } from '../../../../public/images/c2_gniazda-z-blokada/1_tablicowe/imgGniazdaBlokada_01_tablicowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const gniazdaBlokadaTablicowe_SubCategory_data = {
  subCategoryName: catalogStructureData[1].subCategoriesNames[0],
  subCategoryUrl: catalogStructureData[1].subCategoriesUrls[0],
  subCategoryIndex: 0,
};

const gniazdaBlokadaTablicowe_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${gniazdaBlokadaTablicowe_SubCategory_data.subCategoryUrl}/tablicowe-pionowe-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[0],
    type: 'Typ: Gniazdo z blokadą / tablicowe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną tablicowe pionowe IP54',
  },
  {
    arrayIndex: 1,
    path: `${gniazdaBlokadaTablicowe_SubCategory_data.subCategoryUrl}/tablicowe-pionowe-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[1],
    type: 'Typ: Gniazdo z blokadą / tablicowe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną tablicowe pionowe IP67',
  },
  {
    arrayIndex: 2,
    path: `${gniazdaBlokadaTablicowe_SubCategory_data.subCategoryUrl}/tablicowe-poziomw-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[2],
    type: 'Typ: Gniazdo z blokadą / tablicowe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną tablicowe poziome IP54',
  },
  {
    arrayIndex: 3,
    path: `${gniazdaBlokadaTablicowe_SubCategory_data.subCategoryUrl}/tablicowe-poziome-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[3],
    type: 'Typ: Gniazdo z blokadą / tablicowe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną tablicowe poziome IP67',
  },
];

export {
  gniazdaBlokadaTablicowe_SubCategory_data,
  gniazdaBlokadaTablicowe_productCards_data,
};
