/*Images saff*/
import { imgObudowyRozdzielnice_03_gumowe } from '../../../../public/images/c8_obudowy-rozdzielnice/3_gumowe/imgObudowyRozdzielnice_03_gumowe';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const rozdzielniceGumoweSubCategoryData = {
  subCategoryName: catalogStructureData[7].subCategoriesNames[2],
  subCategoryUrl: catalogStructureData[7].subCategoriesUrls[2],
  subCategoryIndex: 2,
};

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[7].subCategoriesUrls[2]}/model-23310`,
    textIcons: ['IP62', 'moduły: 10'],
    imageData: imgObudowyRozdzielnice_03_gumowe[0],
    type: 'Typ: Obudowa gumowa',
    collection: ['Kolekcja:', 'IMPACT'],
    model: 'Model: 23310',
  },
  {
    arrayIndex: 1,
    path: `${catalogStructureData[7].subCategoriesUrls[2]}/model-23311`,
    textIcons: ['IP62', 'moduły: 12'],
    imageData: imgObudowyRozdzielnice_03_gumowe[1],
    type: 'Typ: Obudowa gumowa',
    collection: ['Kolekcja:', 'IMPACT'],
    model: 'Model: 23311',
  },
  {
    arrayIndex: 2,
    path: `${catalogStructureData[7].subCategoriesUrls[2]}/model-23312`,
    textIcons: ['IP62', 'moduły: 18'],
    imageData: imgObudowyRozdzielnice_03_gumowe[2],
    type: 'Typ: Obudowa gumowa',
    collection: ['Kolekcja:', 'IMPACT'],
    model: 'Model: 23312',
  },
];

export { rozdzielniceGumoweSubCategoryData, productCardsData };
