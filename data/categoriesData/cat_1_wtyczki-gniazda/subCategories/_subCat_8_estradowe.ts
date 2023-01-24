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
    // productId:
    //   'Wtyczka przenośna do sprzętu estradowego IP54 / 16A / Model: 13410',
    // shortId:
    //   'Wtyczka przenośna do sprzętu estradowego IP54 / 16A / Model: 13410',
    // productName: 'Wtyczka przenośna do sprzętu estradowego / Model: 13410',
    textIcons: ['IP44', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[0],
    type: 'Typ: Wtyczka przenośna do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13410',
  },
  {
    arrayIndex: 1,
    // productId:
    //   'Gniazdo przenośne do sprzętu estradowego IP54 / 16A / Model: 23410',
    // shortId:
    //   'Gniazdo przenośne do sprzętu estradowego IP54 / 16A / Model: 23410',
    // productName: 'Gniazdo przenośne do sprzętu estradowego / Model: 23410',
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[1],
    type: 'Typ: niazdo przenośne do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23410',
  },
  {
    arrayIndex: 2,
    // productId:
    //   'Gniazdo tablicowe do sprzętu estradowego IP54 / 16A / Model: 23480',
    // shortId:
    //   'Gniazdo tablicowe do sprzętu estradowego IP54 / 16A / Model: 23480',
    // productName: 'Gniazdo tablicowe do sprzętu estradowego / Model: 23480',
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_08_estradowe[2],
    type: 'Typ: Gniazdo tablicowe do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23480',
  },
  // {
  //   arrayIndex: 3,
  //   productId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17220',
  //   shortId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17220',
  //   productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17220',
  //   textIcons: ['IP67', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_08_estradowe[3],
  // },
  // {
  //   arrayIndex: 4,
  //   productId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17120',
  //   shortId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17120',
  //   productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17120',
  //   textIcons: ['IP44', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_08_estradowe[4],
  // },
  // {
  //   arrayIndex: 5,
  //   productId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17122',
  //   shortId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17122',
  //   productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17122',
  //   textIcons: ['IP67', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_08_estradowe[5],
  // },
  {
    arrayIndex: 6,
    // productId:
    //   'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17023',
    // shortId:
    //   'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17023',
    // productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17023',
    textIcons: ['16A', '1.5m.', 'H07RN-F'],
    // imageData: imgWtyczkiGniazda_08_estradowe[6],
    imageData: imgWtyczkiGniazda_08_estradowe[3],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17023',
  },
  {
    arrayIndex: 7,
    // productId:
    //   'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17020',
    // shortId:
    //   'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17020',
    // productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17020',
    textIcons: ['16A'],
    // imageData: imgWtyczkiGniazda_08_estradowe[7],
    imageData: imgWtyczkiGniazda_08_estradowe[4],
    type: 'Typ: Rozgałęźnik T-power do sprzętu estradowego',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 17020',
  },
  {
    arrayIndex: 8,
    // productId: 'Skrzynki do sprzętu estradowego',
    // shortId: 'Skrzynki do sprzętu estradowego',
    // productName: 'Skrzynki do sprzętu estradowego',
    textIcons: ['IP54'],
    imageData: imgWtyczkiGniazda_08_estradowe[5],
    type: 'Typ: Skrzynia do sprzętu estradowego',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    // model: 'Model: 39103',
  },
  // {
  //   arrayIndex: 9,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP44', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_08_estradowe[6],
  // },
  // {
  //   arrayIndex: 10,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP67', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_08_estradowe[7],
  // },
];

export { productCardsData };
