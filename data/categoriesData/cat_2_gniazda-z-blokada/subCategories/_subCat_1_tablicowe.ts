/*Images saff*/
import { imgGniazdaBlokada_01_tablicowe } from '../../../../public/images/c2_gniazda-z-blokada/1_tablicowe/imgGniazdaBlokada_01_tablicowe';

/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    productId: '',
    shortId: '',
    productName: ['Model: 25033'],
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[0],
  },
  {
    arrayIndex: 1,
    productId: '',
    shortId: '',
    productName: ['Model: 25002'],
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[1],
  },
  {
    arrayIndex: 2,
    productId: '',
    shortId: '',
    productName: ['Model: 25056'],
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[2],
  },
  {
    arrayIndex: 3,
    productId: '',
    shortId: '',
    productName: ['Model: 25010'],
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgGniazdaBlokada_01_tablicowe[3],
  },
];

export { productCardsData };
