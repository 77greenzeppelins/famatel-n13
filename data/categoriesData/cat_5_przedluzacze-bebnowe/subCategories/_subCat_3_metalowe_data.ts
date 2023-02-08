/*Images saff*/
import { imgAdapteryPrzemyslowe_02_wielokrotne } from '../../../../public/images/c3_adaptery-przemyslowe/wielokrotne/imgAdapteryPrzemyslowe_02_wielokrotne';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const przedluzaczeBebnoweMetalowe_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[4].subCategoriesUrls[2]}`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[0],
    // type: 'Typ: Potrójne adaptery przemysłowy',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
  },
];

export { przedluzaczeBebnoweMetalowe_productCards_data };
