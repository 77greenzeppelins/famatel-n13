/*Images saff*/
import { imgWtyczkiGniazda_08_estradowe } from '../../../../public/images/c1_wtyczki-gniazda/8_estradowe/imgWtyczkiGniazda_08_estradowe';

/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '13912',
  '13913',
  '13919',
  '13000',
  '13011', //...temporaily
  '13917',
  //...skip the rest
];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: '/',
    textIcons: ['IP44', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[0],
    type: 'Typ: Wtyczka przenośna do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13410',
  },
  {
    arrayIndex: 1,
    path: '/',
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[1],
    type: 'Typ: niazdo przenośne do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23410',
  },
  {
    arrayIndex: 2,
    path: '/',
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[2],
    type: 'Typ: Gniazdo tablicowe do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23480',
  },

  {
    arrayIndex: 6,
    path: '/',
    textIcons: ['16A', '1.5m.', 'H07RN-F'],
    // imageData: imgWtyczkiGniazda_08_estradowe[6],
    imageData: imgWtyczkiGniazda_08_estradowe[3],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17023',
  },
  {
    arrayIndex: 7,

    path: '/',
    textIcons: ['16A'],
    // imageData: imgWtyczkiGniazda_08_estradowe[7],
    imageData: imgWtyczkiGniazda_08_estradowe[4],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17020',
  },
  {
    arrayIndex: 8,

    path: '/',
    textIcons: ['IP54'],
    imageData: imgWtyczkiGniazda_08_estradowe[5],
    type: 'Typ: Skrzynia do sprzętu estradowego',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    // model: 'Model: 39103',
  },
];

export { productCardsData };
