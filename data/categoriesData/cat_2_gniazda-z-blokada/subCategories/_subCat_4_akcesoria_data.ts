/*Images saff*/
import { imgGniazdaBlokada_04_akcesoria } from '../../../../public/images/c2_gniazda-z-blokada/4_akcesoria/imgGniazdaBlokada_04_akcesoria';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const gniazdaBlokadaAkcesoria_SubCategory_data = {
  subCategoryName: catalogStructureData[1].subCategoriesNames[3],
  subCategoryUrl: catalogStructureData[1].subCategoriesUrls[3],
  subCategoryIndex: 3,
};

const gniazdaBlokadaAkcesoria_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${gniazdaBlokadaAkcesoria_SubCategory_data.subCategoryUrl}/model-23021`,
    textIcons: ['Wymiary: 115 × 115 × 90'],
    imageData: imgGniazdaBlokada_04_akcesoria[0],
    type: 'Typ: Junction box for 1 socket',
    model: 'Model: 23021',
  },
  {
    arrayIndex: 1,
    path: `${gniazdaBlokadaAkcesoria_SubCategory_data.subCategoryUrl}/model-23022`,
    textIcons: ['Wymiary: 115 × 230 × 90'],
    imageData: imgGniazdaBlokada_04_akcesoria[1],
    type: 'Typ: Junction box for 2 sockets',
    model: 'Model: 23022',
  },
  {
    arrayIndex: 2,
    path: `${gniazdaBlokadaAkcesoria_SubCategory_data.subCategoryUrl}/model-23056`,
    productName: ['Model: 25056'],
    textIcons: ['Wymiary: 115 × 400 × 18'],
    imageData: imgGniazdaBlokada_04_akcesoria[2],
    type: 'Typ: Modular plate for interlocked sockets',
    model: 'Model: 23023',
  },
];

export {
  gniazdaBlokadaAkcesoria_SubCategory_data,
  gniazdaBlokadaAkcesoria_productCards_data,
};
