/*Images saff*/
import { imgGniazdaBlokada_02_stale } from '../../../../public/images/c2_gniazda-z-blokada/2_stale/imgGniazdaBlokada_02_stale';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const gniazdaBlokadaStale_SubCategory_data = {
  subCategoryName: catalogStructureData[1].subCategoriesNames[1],
  subCategoryUrl: catalogStructureData[1].subCategoriesUrls[1],
  subCategoryIndex: 1,
};

const gniazdaBlokadaStale_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${gniazdaBlokadaStale_SubCategory_data.subCategoryUrl}/stale-pionowe-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[0],
    type: 'Typ: Gniazdo z blokadą / stałe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną stałe pionowe IP54',
  },
  {
    arrayIndex: 1,
    path: `${gniazdaBlokadaStale_SubCategory_data.subCategoryUrl}/stale-pionowe-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[1],
    type: 'Typ: Gniazdo z blokadą / stałe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną stałe pionowe IP67',
  },
  {
    arrayIndex: 2,
    path: `${gniazdaBlokadaStale_SubCategory_data.subCategoryUrl}/stale-poziome-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[2],
    type: 'Typ: Gniazdo z blokadą / stałe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną stałe poziome IP54',
  },
  {
    arrayIndex: 3,
    path: `${gniazdaBlokadaStale_SubCategory_data.subCategoryUrl}/stale-poziome-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[3],
    type: 'Typ: Gniazdo z blokadą / stałe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo z blokadą mechaniczną stałe poziome IP67',
  },
  // {
  //   arrayIndex: 4,
  //   path: `${gniazdaBlokadaStale_SubCategory_data.subCategoryUrl}/stale-poziome-ip67-16A-32A`,
  //   textIcons: ['IP67', '16A', '32A'],
  //   imageData: imgGniazdaBlokada_02_stale[4],
  //   type: 'Typ: Gniazdo z blokadą / stałe',
  //   collection: ['Kolekcja:', 'SpeedPRO'],
  // },
];

export {
  gniazdaBlokadaStale_SubCategory_data,
  gniazdaBlokadaStale_productCards_data,
};
