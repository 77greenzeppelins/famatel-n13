/*Images saff*/
import { imgAdapteryPrzemyslowe_03_wielokrotneKabel } from '../../../../public/images/c3_adaptery-przemyslowe/wielokrotne-z-kablem/imgAdapteryPrzemyslowe_03_wielokrotne-z-kablem';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

//___catalog & www 100% mapping !!!
// const catalogVersion = [
// ];
const adapteryPrzemysloweWielokrotneKabel_SubCategory_data = {
  subCategoryName: catalogStructureData[2].subCategoriesNames[2],
  subCategoryUrl: catalogStructureData[2].subCategoriesUrls[2],
  subCategoryIndex: 2,
};

const adapteryPrzemysloweWielokrotneKabel_productCards_data: IF_ProductCardData[] =
  [
    {
      arrayIndex: 0,
      path: `${adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryUrl}/podwojny-ip54-16A`,
      textIcons: ['IP54', '16A'],
      imageData: imgAdapteryPrzemyslowe_03_wielokrotneKabel[0],
      type: 'Typ: Podwójne adaptery przemysłowy',
      collection: ['Kolekcja:', 'SpeedPRO'],
      altName: 'Podwójny adapter przemysłowy IP54',
    },
    {
      arrayIndex: 1,
      path: `${adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryUrl}/potrojny-ip67-16A`,
      textIcons: ['IP67', '16A'],
      imageData: imgAdapteryPrzemyslowe_03_wielokrotneKabel[1],
      type: 'Typ: Podwójne adaptery przemysłowy',
      collection: ['Kolekcja:', 'SpeedPRO'],
      altName: 'Podwójny adapter przemysłowy IP67',
    },
    {
      arrayIndex: 2,
      path: `${adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryUrl}/potrojny-ip54-16A-32A`,
      textIcons: ['IP54', '16A', '32A'],
      imageData: imgAdapteryPrzemyslowe_03_wielokrotneKabel[2],
      type: 'Typ: Potrójne adaptery przemysłowy',
      collection: ['Kolekcja:', 'SpeedPRO'],
      altName: 'Potrójny adapter przemysłowy IP54',
    },
    {
      arrayIndex: 3,
      path: `${adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryUrl}/potrojny-ip67-16A-32A`,
      textIcons: ['IP67', '16A', '32A'],
      imageData: imgAdapteryPrzemyslowe_03_wielokrotneKabel[3],
      type: 'Typ: Potrójne adaptery przemysłowy',
      collection: ['Kolekcja:', 'SpeedPRO'],
      altName: 'Potrójny adapter przemysłowy IP67',
    },
    {
      arrayIndex: 4,
      path: `${adapteryPrzemysloweWielokrotneKabel_SubCategory_data.subCategoryUrl}/poczworny-ip54-16A`,
      textIcons: ['IP54', '16A'],
      imageData: imgAdapteryPrzemyslowe_03_wielokrotneKabel[4],
      type: 'Typ: Poczwórne adaptery przemysłowy',
      collection: ['Kolekcja:', 'SpeedPRO'],
      altName: 'Poczwórny adapter przemysłowy IP54',
    },
  ];

export {
  adapteryPrzemysloweWielokrotneKabel_SubCategory_data,
  adapteryPrzemysloweWielokrotneKabel_productCards_data,
};
