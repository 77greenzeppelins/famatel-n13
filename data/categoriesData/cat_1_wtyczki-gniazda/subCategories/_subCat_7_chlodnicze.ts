/*Images saff*/
import { imgWtyczkiGniazda_07_chlodnicze } from '../../../../public/images/c1_wtyczki-gniazda/7_chlodnicze/imgWtyczkiGniazda_07_chlodnicze';

/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '14308',
  '24308',
  '24339',
  '24398',
  '25053', // no on www
  '26028', // no on www
  '25074', // no on www
  '25136', // no on www
  '25727', // no on www
  '26327', // no on www
  '26514', // no on www
];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    // productId: 'Wtyczki przenośne na bardzo niskie napięcia IP44 / 16A / 32A',
    // shortId: 'Wtyczki przenośne na bardzo niskie napięcia IP44 / 16A / 32A',
    // productName: 'Wtyczki przenośne na bardzo niskie napięcia',
    textIcons: ['IP44', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[0],
    type: 'Typ: Wtyczka przenośna / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 14308',
  },
  {
    arrayIndex: 1,
    textIcons: ['IP67', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[1],
    type: 'Typ: Gniazdo przenośne / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24308',
  },
  {
    arrayIndex: 2,
    //Wtyczki stałe 90°
    textIcons: ['IP44', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[2],
    type: 'Typ: Gniazdo tablicowe skośne 10° / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24339',
  },
  {
    arrayIndex: 3,
    textIcons: ['IP67', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[3],
    type: 'Typ: Gniazdo stałe / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24398',
  },
  // {
  //   arrayIndex: 4,
  //   textIcons: ['IP44', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[4],
  //   type: 'Typ: Gniazdo stałe / Wersja kontenerowa',
  //   collection: ['Kolekcja:', 'SpeedPRO'],
  //   model: 'Model: 24398',
  // },
  // {
  //   arrayIndex: 5,
  //   productId:
  //     'Gniazda tablicowe proste na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda tablicowe proste na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda tablicowe proste na bardzo niskie napięcia',
  //   textIcons: ['IP67', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[5],
  // },
  // {
  //   arrayIndex: 6,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP44', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[6],
  // },
  // {
  //   arrayIndex: 7,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP67', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[7],
  // },
  // {
  //   arrayIndex: 8,
  //   productId:
  //     'Gniazda tablicowe proste na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda tablicowe proste na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda tablicowe proste na bardzo niskie napięcia',
  //   textIcons: ['IP67', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[5],
  // },
  // {
  //   arrayIndex: 9,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP44', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[6],
  // },
  // {
  //   arrayIndex: 10,
  //   productId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda stałe na bardzo niskie napięcia IP67 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda stałe na bardzo niskie napięcia',
  //   textIcons: ['IP67', '16A', '32A'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[7],
  // },
];

export { productCardsData };
