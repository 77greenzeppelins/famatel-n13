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
    productId: 'Adapter domowo-przemysłowy / IP20 / 16A / Model: 13912',
    shortId: 'Adapter domowo-przemysłowy / IP20 / 16A / Model: 13912',
    productName: ['Model: 13912', 'Adapter domowo-przemysłowy'],
    textIcons: ['IP44', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_09_campingowe[0],
  },
  {
    arrayIndex: 1,
    productId: 'Adapter domowo-przemysłowy / IP54 / 16A / 10A / Model: 13913',
    shortId: 'Adapter domowo-przemysłowy / IP54 / 16A / 10A / Model: 13913',
    productName: ['Model: 13913', 'Adapter domowo-przemysłowy'],
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_09_campingowe[1],
  },
  {
    arrayIndex: 2,
    productId: 'Adapter domowo-przemysłowy / IP54 / 16A / 10A / Model: 13919',
    shortId: 'Adapter domowo-przemysłowy / IP54 / 16A / 10A / Model: 13919',
    productName: ['Model: 13919', 'Adapter domowo-przemysłowy'],
    textIcons: ['IP54', '16A', '2P+T'],
    imageData: imgWtyczkiGniazda_09_campingowe[2],
  },
  {
    arrayIndex: 3,
    productId: 'Adapter przemysłowo-domowy / IP44 / Model: 13000',
    shortId: 'Adapter przemysłowo-domowy / IP44 / Model: 13000',
    productName: ['Model: 13000', 'Adapter przemysłowo-domowy'],
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgWtyczkiGniazda_09_campingowe[3],
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
    productId: 'Adapter przemysłowo-domowy / IP44 / Model: 13917',
    shortId: 'Adapter przemysłowo-domowy / IP44 / Model: 13917',
    productName: ['Model: 13917', 'Adapter przemysłowo-domowy'],
    textIcons: ['16A'],
    imageData: imgWtyczkiGniazda_09_campingowe[4],
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
