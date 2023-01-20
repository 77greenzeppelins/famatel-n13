/*Images saff*/
import { imgWtyczkiGniazda_04_tablicowe_schuko } from '../../../../public/images/c1_wtyczki-gniazda/4_tablicowe-jednofazowe/imgWtyczkiGniazda_04_tablicowe-jednofazowe';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '13953',
  '13950',
  '13957',
  '13956',
  '13960',
  '13960F',
  '24960',
  '13955',
  '3905', //?no on www
];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    productId: 'Gniazda tablicowe Schuko połączenie / wertykalne IP54 / 16A',
    shortId: 'Gniazda tablicowe Schuko połączenie / wertykalne IP54 / 16A',
    productName: 'Gniazda tablicowe Schuko połączenie / wertykalne',
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[0],
  },
  {
    arrayIndex: 1,
    productId:
      'Gniazda tablicowe Schuko połączenie horyzontalne IP54 / 10A / 16A / 20A',
    shortId:
      'Gniazda tablicowe Schuko połączenie horyzontalne IP54 / 10A / 16A / 20A',
    productName: 'Gniazda tablicowe Schuko połączenie horyzontalne',
    textIcons: ['IP54', '10A', '16A', '20A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[1],
  },
  {
    arrayIndex: 2,
    productId:
      'Gniazda tablicowe Schuko podwójne połączenie wertykalne IP54 / 16A',
    shortId:
      'Gniazda tablicowe Schuko podwójne połączenie wertykalne IP54 / 16A',
    productName: 'Gniazda tablicowe Schuko podwójne połączenie wertykalne',
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[2],
  },
  {
    arrayIndex: 3,
    productId:
      'Gniazda tablicowe Schuko podwójne połączenie horyzontalne IP54 / 16A',
    shortId:
      'Gniazda tablicowe Schuko podwójne połączenie horyzontalne IP54 / 16A',
    productName: 'Gniazda tablicowe Schuko podwójne połączenie horyzontalne',
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[3],
  },
  {
    arrayIndex: 4,
    productId: 'Gniazda tablicowe Schuko IP67 / 16A / EU',
    shortId: 'Gniazda tablicowe Schuko IP67 / 16A / EU',
    productName: 'Gniazda tablicowe Schuko',
    textIcons: ['IP67', '16A', '2P+TTL', 'EU'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[4],
  },
  {
    arrayIndex: 5,
    productId: 'Gniazda tablicowe Schuko IP67 / 16A / F',
    shortId: 'Gniazda tablicowe Schuko IP67 / 16A / F',
    productName: 'Gniazda tablicowe Schuko',
    textIcons: ['IP67', '16A', '2P+TTL', 'F'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[5],
  },
  {
    arrayIndex: 6,
    productId: 'Wtyczka Schuko połączenie IP67 / 16A',
    shortId: 'Wtyczka Schuko IP67 / 16A',
    productName: 'Wtyczka Schuko',
    textIcons: ['IP67', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[6],
  },
  {
    arrayIndex: 6,
    productId: 'Gniazdo Schuko połączenie IP67 / 16A',
    shortId: 'Gniazdo Schuko IP67 / 16A',
    productName: 'Gniazdo Schuko',
    textIcons: ['IP67', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[7],
  },
  {
    arrayIndex: 7,
    productId: 'Box',
    shortId: 'Box',
    productName: 'Box',
    textIcons: ['Wymiar: 50x50'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[8],
  },
  // {
  //   arrayIndex: 8,
  //   productId: 'Zatyczka',
  //   shortId: 'Zatyczka',
  //   productName: 'Zatyczka',
  //   textIcons: ['Wymiar: 50x50'],
  //   imageData: imgWtyczkiGniazda_04_tablicowe_schuko[8],
  // },
];

export { productCardsData };
