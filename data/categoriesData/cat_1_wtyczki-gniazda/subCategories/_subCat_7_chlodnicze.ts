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
    productId: 'Wtyczki przenośne na bardzo niskie napięcia IP44 / 16A / 32A',
    shortId: 'Wtyczki przenośne na bardzo niskie napięcia IP44 / 16A / 32A',
    productName: 'Wtyczki przenośne na bardzo niskie napięcia',
    textIcons: ['IP44', '16A', '32A'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[0],
  },
  {
    arrayIndex: 1,
    productId: 'Wtyczki przenośne na bardzo niskie napięcia IP67 / 16A / 32A',
    shortId: 'Wtyczki przenośne na bardzo niskie napięcia IP67 / 16A / 32A',
    productName: 'Wtyczki przenośne na bardzo niskie napięcia',
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[1],
  },
  {
    arrayIndex: 2,
    productId: 'Gniazda przenośne na bardzo niskie napięcia IP44 / 16A / 32A',
    shortId: 'Gniazda przenośne na bardzo niskie napięcia IP44 / 16A / 32A',
    productName: 'Gniazda przenośne na bardzo niskie napięcia',
    textIcons: ['IP44', '16A', '32A'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[2],
  },
  {
    arrayIndex: 3,
    productId: 'Gniazda przenośne na bardzo niskie napięcia IP67 / 16A / 32A',
    shortId: 'Gniazda przenośne na bardzo niskie napięcia IP67 / 16A / 32A',
    productName: 'Gniazda przenośne na bardzo niskie napięcia',
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgWtyczkiGniazda_07_chlodnicze[3],
  },
  // {
  //   arrayIndex: 4,
  //   productId:
  //     'Gniazda tablicowe proste na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   shortId:
  //     'Gniazda tablicowe proste na bardzo niskie napięcia IP44 / 16A / 32A / wymiar: 75x85',
  //   productName: 'Gniazda tablicowe proste na bardzo niskie napięcia',
  //   textIcons: ['IP44', '16A', '32A', 'wymiar: 75x85'],
  //   imageData: imgWtyczkiGniazda_07_chlodnicze[4],
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
