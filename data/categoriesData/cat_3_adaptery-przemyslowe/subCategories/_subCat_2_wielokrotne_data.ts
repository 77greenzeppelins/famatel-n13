/*Images saff*/
import { imgAdapteryPrzemyslowe_02_wielokrotne } from '../../../../public/images/c3_adaptery-przemyslowe/wielokrotne/imgAdapteryPrzemyslowe_02_wielokrotne';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const adapteryPrzemysloweWielokrotne_SubCategory_data = {
  subCategoryName: catalogStructureData[2].subCategoriesNames[1],
  subCategoryUrl: catalogStructureData[2].subCategoriesUrls[1],
  subCategoryIndex: 1,
};

const adapteryPrzemysloweWielokrotne_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl}/potrojny-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[0],
    type: 'Typ: Potrójne adaptery przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Potrójny adapter przemysłowy IP54',
  },
  {
    arrayIndex: 1,
    path: `${adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl}/potrojny-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[1],
    type: 'Typ: Potrójne adaptery przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Potrójny adapter przemysłowy IP54',
  },
  {
    arrayIndex: 2,
    path: `${adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl}/podwojny-ip54-16A`,
    textIcons: ['IP54', '16A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[2],
    type: 'Typ: Podwójne adaptery przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Podwójny adapter przemysłowy IP54',
  },
  {
    arrayIndex: 3,
    path: `${adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl}/podwojny-ip67-32A`,
    textIcons: ['IP67', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[3],
    type: 'Typ: Podwójne adaptery przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Podwójny adapter przemysłowy IP67',
  },
  {
    arrayIndex: 4,
    path: `${adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl}/podwojny-ip54-16A-400`,
    textIcons: ['IP54', '16A', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[4],
    type: 'Typ: Podwójne adapterry przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Podwójny adapter przemysłowy IP54',
  },
  {
    arrayIndex: 5,
    path: `${adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl}/podwojny-ip67-16A-400`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[5],
    type: 'Typ: Podwójne adaptery przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Podwójny adapter przemysłowy IP67',
  },
];

export {
  adapteryPrzemysloweWielokrotne_SubCategory_data,
  adapteryPrzemysloweWielokrotne_productCards_data,
};
