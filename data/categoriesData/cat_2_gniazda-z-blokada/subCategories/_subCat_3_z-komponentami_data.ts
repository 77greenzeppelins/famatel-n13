/*Images saff*/
import { imgGniazdaBlokada_03_z_komponentami } from '../../../../public/images/c2_gniazda-z-blokada/3_z-komponentami/imgGniazdaBlokada_03_z-komponentami';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const gniazdaBlokadaKomponenty_SubCategory_data = {
  subCategoryName: catalogStructureData[1].subCategoriesNames[2],
  subCategoryUrl: catalogStructureData[1].subCategoriesUrls[2],
  subCategoryIndex: 2,
};

const gniazdaBlokadaKomponenty_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/tablicowe-din-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A', 'Moduły: 4'],
    imageData: imgGniazdaBlokada_03_z_komponentami[0],
    type: 'Typ: Gniazdo tablicowe z blokadą i szyną DIN',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 1,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/tablicowe-din-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[1],
    type: 'Typ: Gniazdo tablicowe z blokadą i szyną DIN',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 2,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/stale-din-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[2],
    type: 'Typ: Gniazdo stałe z blokadą i szyną DIN',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 3,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/tablicowe-din-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[3],
    type: 'Typ: Gniazdo stałe z blokadą i szyną DIN',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 4,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/tablicowe-din-ip67-16A-32A-108`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[4],
    type: 'Typ: Gniazdo stałe z blokadą i szyną DIN',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 5,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/tablicowe-din-mcb-typeC-ip67-16A-32A`,
    textIcons: ['IP67', '63A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[5],
    type: 'Typ: Gniazdo tablicowe z blokadą i zabezpieczeniem MCB',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 6,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/scienne-din-ip67-63A`,
    textIcons: ['IP67', '63A', 'Opcja: MCB'],
    imageData: imgGniazdaBlokada_03_z_komponentami[6],
    type: 'Typ: Gniazdo stałe z blokadą i szyną DIN',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 7,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/scienne-mcb-typeC-ip67-63A`,
    textIcons: ['IP67', '63A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[7],
    type: 'Typ: Gniazdo stałe z blokadą i zabezpieczeniem MCB',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 8,
    path: `${gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl}/scienne-ip67-125A`,
    textIcons: ['IP67', '125A'],
    imageData: imgGniazdaBlokada_03_z_komponentami[8],
    type: 'Typ: Gniazdo stałe z blokadą ',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
];

export {
  gniazdaBlokadaKomponenty_SubCategory_data,
  gniazdaBlokadaKomponenty_productCards_data,
};
