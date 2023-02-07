/*Images saff*/
import { imgAdapteryPrzemyslowe_01_schuko } from '../../../../public/images/c3_adaptery-przemyslowe/schuko/imgAdapteryPrzemyslowe_01_schuko';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const adapteryPrzemysloweSchuko_SubCategory_data = {
  subCategoryName: catalogStructureData[2].subCategoriesNames[0],
  subCategoryUrl: catalogStructureData[2].subCategoriesUrls[0],
  subCategoryIndex: 0,
};

const adapteryPrzemysloweSchuko_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${adapteryPrzemysloweSchuko_SubCategory_data.subCategoryUrl}/potrojny-ip20-16A`,
    textIcons: ['IP20', '16A'],
    imageData: imgAdapteryPrzemyslowe_01_schuko[0],
    type: 'Typ: Potrójne adaptery domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Potrójny adapter domowo-przemysłowy IP54',
  },
  {
    arrayIndex: 1,
    path: `${adapteryPrzemysloweSchuko_SubCategory_data.subCategoryUrl}/podwojny-ip20-16A`,
    textIcons: ['IP20', '16A'],
    imageData: imgAdapteryPrzemyslowe_01_schuko[1],
    type: 'Typ: Podwóje adaptery domowo-przemysłowy',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Podwójy adapter domowo-przemysłowy IP54',
  },
];

export {
  adapteryPrzemysloweSchuko_SubCategory_data,
  adapteryPrzemysloweSchuko_productCards_data,
};
