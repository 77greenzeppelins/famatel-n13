/**
 * used in: _catalogStructure_data.ts
 **/
// import { imgWtyczkiGniazda_subCategoryCatalog } from '../c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { imgGniazdaZBlokada_subCategoryCatalog } from '../c2_gniazda-z-blokada/imgGniazdaZBlokada';
import { imgAdapteryPrzemyslowe_subCategoryCatalog } from '../c3_adaptery-przemyslowe/imgAdapteryPrzemyslowe';
import { imgPrzedluzaczeBebnowe_subCategoryCatalog } from '../c5_przedluzacze-bebnowe/imgPrzedluzaczeBebnowe';
import { imgObudowyRozdzielnice_subCategoryCatalog } from '../c8_obudowy-rozdzielnice/imgObudowyRozdzielnice';
import { imgRozdzielniceModulowe_subCategoryCatalog } from '../c9_rozdzielnice-modulowe/imgRozdzielniceModulowe';
import { imgPuszkiInstalacyjne_subCategoryCatalog } from '../c10_puszki-instalacyjne/imgPuszkiInstalacyjne';
/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';

/**...**/
const imgSubCategoryCatalogs: IF_ImgStaticData[][] = [
  // imgWtyczkiGniazda_subCategoryCatalog,
  imgRozdzielniceModulowe_subCategoryCatalog,
  imgGniazdaZBlokada_subCategoryCatalog,
  imgAdapteryPrzemyslowe_subCategoryCatalog,
  imgGniazdaZBlokada_subCategoryCatalog,
  imgPrzedluzaczeBebnowe_subCategoryCatalog,
  imgGniazdaZBlokada_subCategoryCatalog,
  // imgWtyczkiGniazda_subCategoryCatalog,
  imgRozdzielniceModulowe_subCategoryCatalog,
  imgObudowyRozdzielnice_subCategoryCatalog,
  imgRozdzielniceModulowe_subCategoryCatalog,
  imgPuszkiInstalacyjne_subCategoryCatalog,
  // imgWtyczkiGniazda_subCategoryCatalog,
  imgRozdzielniceModulowe_subCategoryCatalog,
  imgGniazdaZBlokada_subCategoryCatalog,
];

export { imgSubCategoryCatalogs };
