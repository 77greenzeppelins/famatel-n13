/*Images saff*/
import { imgObudowyRozdzielnice_02_przemyslowe } from '../../../../public/images/c8_obudowy-rozdzielnice/2_przemyslowe/imgObudowyRozdzielnice_02_przemyslowe';
/**Basic Data*/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const rozdzielnicePrzemysloweSubCategoryData = {
  subCategoryName: catalogStructureData[7].subCategoriesNames[1],
  subCategoryUrl: catalogStructureData[7].subCategoriesUrls[1],
  subCategoryIndex: 1,
};

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3960-6406`,
    textIcons: ['IP54', 'moduły: 6'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[0],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3960 / 6406',
  },
  {
    arrayIndex: 1,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3961-6504`,
    textIcons: ['IP54', 'moduły: 8'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[1],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3961 / 6504',
  },
  {
    arrayIndex: 2,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3962-6602`,
    textIcons: ['IP54', 'moduły: 16'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[2],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3962 / 6602',
  },
  {
    arrayIndex: 3,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3957-6602`,
    textIcons: ['IP54', 'moduły: 9'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[3],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3957 / 3957.1',
  },
  {
    arrayIndex: 4,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3958-3958.1`,
    textIcons: ['IP54', 'moduły: 9'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[4],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3958 / 3958.1',
  },
  {
    arrayIndex: 5,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3959`,
    textIcons: ['IP54', 'moduły: 9'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[5],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3959',
  },
  {
    arrayIndex: 6,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3967-6201`,
    textIcons: ['IP65', 'moduły: 8'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[6],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3967 / 6201',
  },
  {
    arrayIndex: 7,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3968-6301`,
    textIcons: ['IP65', 'moduły: 16'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[7],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3968 / 6301',
  },
  {
    arrayIndex: 8,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3970-6901`,
    textIcons: ['IP65', 'moduły: 16'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[8],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3970 / 6901',
  },
  {
    arrayIndex: 9,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3968-3964-6051`,
    textIcons: ['IP65', 'moduły: 32'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[9],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3968 + 3964 / 6051',
  },
  {
    arrayIndex: 10,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3968-3964-3963-6054`,
    textIcons: ['IP65', 'moduły: 32'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[10],
    type: 'Typ: Rozdzielnica przemysłowa',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3968 + 3964 + 3963 / 6054',
  },
  {
    arrayIndex: 11,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3980`,
    textIcons: ['IP40', '18kg'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[11],
    type: 'Typ: Rozdzielnica przemysłowa do zasilania placów budowy',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3980',
  },
  {
    arrayIndex: 12,
    path: `${catalogStructureData[7].subCategoriesUrls[1]}/model-3980P`,
    textIcons: ['IP40', '11kg'],
    imageData: imgObudowyRozdzielnice_02_przemyslowe[12],
    type: 'Typ: Rozdzielnica przemysłowa do zasilania placów budowy',
    collection: ['Kolekcja:', 'AcquaCOMBI'],
    model: 'Model: 3980P',
  },
];

export { rozdzielnicePrzemysloweSubCategoryData, productCardsData };
