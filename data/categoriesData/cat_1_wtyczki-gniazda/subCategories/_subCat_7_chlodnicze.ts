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
    path: '/',
    textIcons: ['IP44', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[0],
    type: 'Typ: Wtyczka przenośna / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 14308',
  },
  {
    arrayIndex: 1,
    path: '/',
    textIcons: ['IP67', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[1],
    type: 'Typ: Gniazdo przenośne / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24308',
  },
  {
    arrayIndex: 2,
    //Wtyczki stałe 90°
    path: '/',
    textIcons: ['IP44', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[2],
    type: 'Typ: Gniazdo tablicowe skośne 10° / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24339',
  },
  {
    arrayIndex: 3,
    path: '/',
    textIcons: ['IP67', '16A', '32A', '3p + T (3H)'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[3],
    type: 'Typ: Gniazdo stałe / Wersja kontenerowa',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 24398',
  },
];

export { productCardsData };
