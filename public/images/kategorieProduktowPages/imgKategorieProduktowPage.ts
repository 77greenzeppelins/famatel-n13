/**
 * used in: _catalogStructure_data.ts
 * is distributed to all "catalogCategories" through property: "imageData: imgSubCategoryCatalogs[0]"
 *
 **/
import { imgWtyczkiGniazda_subCategoryCatalog } from '../c1_wtyczki-gniazda/imgWtyczkiGniazda';
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
  //__category__1
  imgWtyczkiGniazda_subCategoryCatalog,
  //__category__2
  imgGniazdaZBlokada_subCategoryCatalog,
  //__category__3
  imgAdapteryPrzemyslowe_subCategoryCatalog,
  //__category__4__fake
  imgGniazdaZBlokada_subCategoryCatalog,
  //__category__5
  imgPrzedluzaczeBebnowe_subCategoryCatalog,
  //__category__6__fake
  imgGniazdaZBlokada_subCategoryCatalog,
  //__category__7__fake
  imgRozdzielniceModulowe_subCategoryCatalog,
  //__category__8
  imgObudowyRozdzielnice_subCategoryCatalog,
  //__category__9
  imgRozdzielniceModulowe_subCategoryCatalog,
  //__category__10
  imgPuszkiInstalacyjne_subCategoryCatalog,
  //__category__11__fake
  imgRozdzielniceModulowe_subCategoryCatalog,
];

export { imgSubCategoryCatalogs };
