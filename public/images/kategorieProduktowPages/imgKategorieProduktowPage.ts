/**...**/
import { imgWtyczkiGniazda_subCategoryCatalog } from '../c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { imgGniazdaZBlokada_subCategoryCatalog } from '../c2_gniazda-z-blokada/imgGniazdaZBlokada';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**...**/
const imgSubCategoryCatalogs: IF_ImgStaticData[][] = [
  imgWtyczkiGniazda_subCategoryCatalog,
  imgGniazdaZBlokada_subCategoryCatalog,
];

export { imgSubCategoryCatalogs };
