/*Images saff*/
import { imgWtyczkiGniazda_09_campingowe } from '../../../../public/images/c1_wtyczki-gniazda/9_camping/imgWtyczkiGniazda_09_campingowe';

//
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
    // productId: 'Adapter domowo-przemysłowy / IP20 / 16A / Model: 13912',
    // shortId: 'Adapter domowo-przemysłowy / IP20 / 16A / Model: 13912',
    // productName: ['Model: 13912', 'Adapter domowo-przemysłowy'],
    textIcons: ['IP20', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[0],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13912',
  },
  {
    arrayIndex: 1,
    // productId: 'Adapter domowo-przemysłowy / IP54 / 16A / 10A / Model: 13913',
    // shortId: 'Adapter domowo-przemysłowy / IP54 / 16A / 10A / Model: 13913',
    // productName: ['Model: 13913', 'Adapter domowo-przemysłowy'],
    textIcons: ['IP20', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[1],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13913',
  },
  {
    arrayIndex: 2,

    textIcons: ['16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[2],
    //___Typ: Gniazdo tablicowe skośne 10° / Wersja kontenerowa
    type: 'Typ: Przemysłowe gniazdo 90° z gmiazdem Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13919',
  },
  {
    arrayIndex: 3,
    textIcons: ['IP44', '16A', '2P + T (6h)'],
    imageData: imgWtyczkiGniazda_09_campingowe[3],
    type: 'Typ: Adapter domowo-przemysłowy z gniazdem Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13011',
  },
  // {
  //   arrayIndex: 4,
  //   productId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17120',
  //   shortId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17120',
  //   productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17120',
  //   textIcons: ['IP44', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_09_campingowe[4],
  // },
  {
    arrayIndex: 5,
    textIcons: ['IP20', '16A', '3P + N + T', '2P + T'],
    imageData: imgWtyczkiGniazda_09_campingowe[4],
    type: 'Typ: Adapter domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13917',
  },
  // {
  //   arrayIndex: 6,
  //   productId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17023',
  //   shortId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17023',
  //   productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17023',
  //   textIcons: ['16A', '1.5m.', 'H07RN-F'],
  //   // imageData: imgWtyczkiGniazda_09_campingowe[6],
  //   imageData: imgWtyczkiGniazda_09_campingowe[3],
  // },
  // {
  //   arrayIndex: 7,
  //   productId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17020',
  //   shortId:
  //     'Rozgałęźnik T-power do sprzętu estradowego IP54 / 16A / Model: 17020',
  //   productName: 'Rozgałęźnik T-power do sprzętu estradowego / Model: 17020',
  //   textIcons: ['16A'],
  //   // imageData: imgWtyczkiGniazda_09_campingowe[7],
  //   imageData: imgWtyczkiGniazda_09_campingowe[4],
  // },
  // {
  //   arrayIndex: 8,
  //   productId: 'Skrzynki do sprzętu estradowego',
  //   shortId: 'Skrzynki do sprzętu estradowego',
  //   productName: 'Skrzynki do sprzętu estradowego',
  //   textIcons: ['IP54'],
  //   imageData: imgWtyczkiGniazda_09_campingowe[5],
  // },
  // {
  //   arrayIndex: 9,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP44', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_09_campingowe[6],
  // },
  // {
  //   arrayIndex: 10,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP67', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_09_campingowe[7],
  // },
];

export { productCardsData };
