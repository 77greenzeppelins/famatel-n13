/*Images saff*/
import { imgAdapteryPrzemyslowe_02_wielokrotne } from '../../../../public/images/c3_adaptery-przemyslowe/wielokrotne/imgAdapteryPrzemyslowe_02_wielokrotne';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const przedluzaczeBebnoweSchuko_productCards_data: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[4].subCategoriesUrls[0]}`,
    textIcons: ['IP67', '16A', '32A'],
    imageData: imgAdapteryPrzemyslowe_02_wielokrotne[0],
    // type: 'Typ: Potrójne adaptery przemysłowy',
    // collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Przemysłowe przedłużacze bębnowe IP67 z gniazdami Schuko',
  },
];

export { przedluzaczeBebnoweSchuko_productCards_data };
