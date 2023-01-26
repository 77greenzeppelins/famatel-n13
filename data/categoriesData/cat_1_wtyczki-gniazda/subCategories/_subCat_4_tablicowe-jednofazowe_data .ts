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
    path: '/',
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[0],
    type: 'Typ: Gniazda tablicowe Schuko / połączenie wertykalne',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 1,
    path: '/',
    textIcons: ['IP54', '10A', '16A', '20A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[1],
    type: 'Typ: Gniazda tablicowe Schuko / połączenie horyzontalne',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 2,
    path: '/',
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[2],
    type: 'Typ: Gniazda tablicowe Schuko / podwójne połączenie wertykalne',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 3,
    path: '/',
    textIcons: ['IP54', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[3],
    type: 'Typ: Gniazda tablicowe Schuko / podwójne połączenie horyzontalne',
    collection: ['Kolekcja:', 'SpeedPRO'],
  },
  {
    arrayIndex: 4,
    path: '/',
    textIcons: ['IP67', '16A', '2P+TTL', 'EU'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[4],
    type: 'Typ: Gniazda tablicowe Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model 13960',
  },
  {
    arrayIndex: 5,
    path: '/',
    textIcons: ['IP67', '16A', '2P+TTL', 'F'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[5],
    type: 'Typ: Gniazda tablicowe Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 13960F',
  },
  {
    arrayIndex: 6,
    path: '/',
    textIcons: ['IP67', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[6],
    type: 'Typ: Wtyczka Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Model: 23960',
  },
  {
    arrayIndex: 6,
    path: '/',
    textIcons: ['IP67', '16A', '2P+TTL'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[7],
    type: 'Typ: Gniazdo Schuko',
    collection: ['Kolekcja:', 'SpeedPRO'],
    model: 'Modele: 24960 / 24961',
  },
  {
    arrayIndex: 7,
    path: '/',
    textIcons: ['Format: 50x50'],
    imageData: imgWtyczkiGniazda_04_tablicowe_schuko[8],
    type: 'Typ: Box Schuko',
    model: 'Model: 13955',
  },
];

export { productCardsData };
