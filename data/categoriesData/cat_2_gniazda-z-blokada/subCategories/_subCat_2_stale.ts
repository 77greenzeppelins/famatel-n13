/*Images saff*/
import { imgGniazdaBlokada_02_stale } from '../../../../public/images/c2_gniazda-z-blokada/2_stale/imgGniazdaBlokada_02_stale';

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
    // productName: ['Model: 26008'],
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[0],
    type: 'Typ: Gniazdo z blokadą / stałe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 1,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 26002'],
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[1],
    type: 'Typ: Gniazdo z blokadą / stałe / pionowe',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 2,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25116'],
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[2],
    type: 'Typ: Gniazdo z blokadą / stałe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 3,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25110'],
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[3],
    type: 'Typ: Gniazdo z blokadą / stałe / poziome',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 4,
    // productId: '',
    // shortId: '',
    // productName: ['Model: 25159'],
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_02_stale[4],
    type: 'Typ: Gniazdo z blokadą / stałe',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
];

export { productCardsData };
