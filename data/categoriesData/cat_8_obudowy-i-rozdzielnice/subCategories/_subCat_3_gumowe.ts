/*Images saff*/
import { imgObudowyRozdzielnice_03_gumowe } from '../../../../public/images/c8_obudowy-rozdzielnice/3_gumowe/imgObudowyRozdzielnice_03_gumowe';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    productId: 'Obudowa gumowa IP65 / 10 modułów / Model: 23310',
    shortId: 'Obudowa gumowa IP65 / 10 modułów / Model: 23310',
    productName: 'Model: 23310',
    textIcons: ['IP62', 'moduły: 10'],
    imageData: imgObudowyRozdzielnice_03_gumowe[0],
  },
  {
    arrayIndex: 1,
    productId: 'Obudowa gumowa IP65 / 12 modułów / Model: 23311',
    shortId: 'Obudowa gumowa IP65 /12 modułów / Model: 23311',
    productName: 'Model: 23311',
    textIcons: ['IP62', 'moduły: 12'],
    imageData: imgObudowyRozdzielnice_03_gumowe[1],
  },
  {
    arrayIndex: 2,
    productId: 'Obudowa gumowa IP65 / 16 modułów / Model: 23312',
    shortId: 'Obudowa gumowa IP65 / 16 modułów / Model: 23312',
    productName: 'Model: 23312',
    textIcons: ['IP62', 'moduły: 18'],
    imageData: imgObudowyRozdzielnice_03_gumowe[2],
  },
];

export { productCardsData };
