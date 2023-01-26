/*Images saff*/
import { imgGniazdaBlokada_01_tablicowe } from '../../../../public/images/c2_gniazda-z-blokada/1_tablicowe/imgGniazdaBlokada_01_tablicowe';

/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25033'],
    path: '/',
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[0],
    type: 'Typ: Gniazdo z blokadą / tablicowe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
    // model: 'Model: 2167 F',
  },
  {
    arrayIndex: 1,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25002'],
    path: '/',
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[1],
    type: 'Typ: Gniazdo z blokadą / tablicowe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 2,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25056'],
    path: '/',
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[2],
    type: 'Typ: Gniazdo z blokadą / tablicowe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 3,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25010'],
    path: '/',
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[3],
    type: 'Typ: Gniazdo z blokadą / tablicowe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
];

export { productCardsData };
