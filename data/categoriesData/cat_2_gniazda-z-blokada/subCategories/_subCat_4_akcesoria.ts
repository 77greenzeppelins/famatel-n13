/*Images saff*/

import { imgGniazdaBlokada_04_akcesoria } from '../../../../public/images/c2_gniazda-z-blokada/4_akcesoria/imgGniazdaBlokada_04_akcesoria';

/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,

    textIcons: ['Wymiary: 115 × 115 × 90'],
    imageData: imgGniazdaBlokada_04_akcesoria[0],
    type: 'Typ: Junction box for 1 socket',
    model: '23021',
  },
  {
    arrayIndex: 1,

    textIcons: ['Wymiary: 115 × 230 × 90'],
    imageData: imgGniazdaBlokada_04_akcesoria[1],
    type: 'Typ: Junction box for 2 sockets',
    model: '23022',
  },
  {
    arrayIndex: 2,
    productId: '',
    shortId: '',
    productName: ['Model: 25056'],
    textIcons: ['Wymiary: 115 × 400 × 18'],
    imageData: imgGniazdaBlokada_04_akcesoria[2],
    type: 'Typ: Modular plate for interlocked sockets',
    model: '23023',
  },
];

export { productCardsData };
