/**ImagesStaff**/
import {
  fakeSetOf36Images,
  imgMainCategories,
} from '../public/images/categories/imgOfProductsReps';
import { imgSubCategoryCatalogs } from '../public/images/kategorieProduktowPages/imgKategorieProduktowPage';
/**TS**/
import { IF_CatalogStructureData } from '../utils/TS/typeScriptStaff';
/**BasicData**/
import {
  pagesUrl,
  mainCategoriesNames,
  mainCategoriesPath as mainCatPat,
} from './_data';

//_____category__1
const wtyczkiGniazdaSubCategoryNames: string[] = [
  'Wtyczki i gniazda przenośne',
  'Wtyczki i gniazda tablicowe',
  'Wtyczki i gniazda ścienne',
  'Wtyczki i gniazda tablicowe jednofazowe / Schuko',
  'Wtyczki i gniazda jednofazowe / Schuko',
  'Wtyczki i gniazda na bardzo niskie napięcia',
  'Wtyczki i gniazda do kontenerów',
  'Wtyczki i gniazda do sprzętu estradowego',
  'Wtyczki i gniazda campingowe',
];
const wtyczkiGniazdaSubCatPaths: string[] = [
  `przenosne`,
  `tablicowe`,
  `scienne`,
  `tablicowe-jednofazowe`,
  `jednofazowe`,
  `niskie-napiecia`,
  `kontenerowe`,
  `estradowe`,
  `campingowe`,
];

const wtyczkiGniazdaSubCategoriesUrls: string[] = [
  // `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[2]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[3]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[4]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[5]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[6]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[7]}`,
  `${pagesUrl.produkty}/${mainCatPat[0]}/${wtyczkiGniazdaSubCatPaths[8]}`,
];

//_____category__2
const GniazdaZBlokadaSubCategoryNames: string[] = [
  'Gniazda tablicowe z blokadą mechaniczną',
  'Gniazda stałe z blokadą mechaniczną',
  'Gniazda z blokadą mechaniczną z opcjonalnymi komponentami',
  'Akcesoria do gniazd z blokadą',
];
const GniazdaZBlokadaSubCatPaths: string[] = [
  `tablicowe`,
  `stale`,
  `z-komponentami`,
  'akcesoria',
];
const GniazdaZBlokadaSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[1]}/${GniazdaZBlokadaSubCatPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[1]}/${GniazdaZBlokadaSubCatPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[1]}/${GniazdaZBlokadaSubCatPaths[2]}`,
  `${pagesUrl.produkty}/${mainCatPat[1]}/${GniazdaZBlokadaSubCatPaths[3]}`,
];

//_____category__3
const adapteryPrzemysloweSubCategoryNames: string[] = [
  'Adaptery przemysłowe Schuko',
  'Adaptery wielokrotne przemysłowe',
  'Adaptery wielokrotne przemysłowe z przewodem',
];
const adapteryPrzemysloweSubCategoryPaths: string[] = [
  `schuko`,
  `wielokrotne`,
  `wielokrotne-z-przewodem`,
];

const adapteryPrzemysloweSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[2]}/${adapteryPrzemysloweSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[2]}/${adapteryPrzemysloweSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[2]}/${adapteryPrzemysloweSubCategoryPaths[2]}`,
];

//_____category__4
const gniazdaPodwieszaneSubCategoryNames: string[] = ['Gnizada podwieszane'];
const gniazdaPodwieszaneSubCategoryPaths: string[] = ['gniazda-podwieszane'];
const gniazdaPodwieszaneSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[3]}`,
];

//_____category__5
const przedluzaczeBebnoweSubCategoryNames: string[] = [
  'Przedłużacze bębnowe IP55 z gniazdami Schuko IP67',
  'Przemysłowe przedłużacze bębnowe z gniazdami IP67',
  'Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
];
const przedluzaczeBebnoweSubCatPaths: string[] = [
  'schuko-ip67',
  'przemyslowy-ip67',
  'metalowy-ip67',
];
const przedluzaczeBebnoweSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[4]}/${przedluzaczeBebnoweSubCatPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[4]}/${przedluzaczeBebnoweSubCatPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[4]}/${przedluzaczeBebnoweSubCatPaths[2]}`,
];
//_____category__6
const rozlacznikiBezpieczenstwaSubCategoryNames: string[] = [
  'Rozłączniki bezpieczeństwa',
];
const rozlacznikiBezpieczenstwaSubCategoryPaths: string[] = [
  'Rozłączniki bezpieczeństwa',
];
const rozlacznikiBezpieczenstwaSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[5]}`,
];

//_____category__7
const ladowarkiPojazdowSubCategoryNames: string[] = ['Ładowarki samochodowe'];
const ladowarkiPojazdowSubCategoryPaths: string[] = [''];
const ladowarkiPojazdowSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[6]}`,
];

//_____category__8
const obudowyAndRozdzielniceSubCategoryNames: string[] = [
  'Obudowy puste',
  'Rozdzielnice przemysłowe',
  'Obudowy gumowe',
  'Akcesoria',
];
const obudowyAndRozdzielniceSubCategoryPaths: string[] = [
  'obudowy-puste',
  'rozdzielnice-przemyslowe',
  'obudowy-gumowe',
  'akcesoria',
];

const obudowyAndRozdzielniceSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[7]}/${obudowyAndRozdzielniceSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[7]}/${obudowyAndRozdzielniceSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[7]}/${obudowyAndRozdzielniceSubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCatPat[7]}/${obudowyAndRozdzielniceSubCategoryPaths[3]}`,
];

//_____category__9
const rozdzielniceModuloweSubCategoryNames: string[] = [
  'Rozdzielnice ścienne IP65',
  'Rozdzielnice modułowe IP65',
  'Rozdzielnice modułowe Nuova IP40',
  'Rozdzielnice modułowe Nuova+ IP40',
  'Rozdzielnice modułowe Vita IP40',
  'Rozdzielnice modułowe ścienne ICP',
  'Rozdzielnice modułowe metalowe IP40',
  'Rozdzielnice modułowe metalowe ICT',
  'Akcesoria',
];
const rozdzielniceModuloweSubCatPaths: string[] = [
  'scienne-ip65',
  'modulowe-ip65',
  'modulowe-nuova',
  'modulowe-nuova-plus',
  'modulowe-vita',
  'scienne-icp',
  'metalowe-ip40',
  'metalowe-ict',
  'akcesoria',
];
const rozdzielniceModuloweSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[2]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[3]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[4]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[5]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[6]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[7]}`,
  `${pagesUrl.produkty}/${mainCatPat[8]}/${rozdzielniceModuloweSubCatPaths[8]}`,
];

//_____category__10
const puszkiInstalacyjneSubCategoryNames: string[] = [
  'Puszki instalacyjne zamykane IP55/IP65',
  'Puszki instalacyjne drywall',
  'Puszki instalacyjne osadzone',
];
const puszkiInstalacyjneSubCategoryPaths: string[] = [
  'zamykane',
  'drywall',
  'osadzone',
];
const puszkiInstalacyjneSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[9]}/${puszkiInstalacyjneSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[9]}/${puszkiInstalacyjneSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[9]}/${puszkiInstalacyjneSubCategoryPaths[2]}`,
];

//_____category__11
const osprzetDomowySubCategoryNames: string[] = [
  'Wtyczki przenośne',
  'Gniazda przenośne',
  'FIXED INDIVIDUAL SOCKETS',
  'Adaptery',
  'Adaptery podróżne',
  'Adaptery domowe',
];
const osprzetDomowySubCategoryPaths: string[] = [
  'wtyczki-przenosne',
  'gniazda-przenosne',
  'gniazda',
  'adaptery',
  'adaptery-podróżne',
  'adaptery-domowe',
];
const osprzetDomowySubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCatPat[10]}/${osprzetDomowySubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCatPat[10]}/${osprzetDomowySubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCatPat[10]}/${osprzetDomowySubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCatPat[10]}/${osprzetDomowySubCategoryPaths[4]}`,
  `${pagesUrl.produkty}/${mainCatPat[10]}/${osprzetDomowySubCategoryPaths[5]}`,
  `${pagesUrl.produkty}/${mainCatPat[10]}/${osprzetDomowySubCategoryPaths[6]}`,
];

/**
 * "name" is a name of main category /
 *  "subcategories" is an array of subcategories names
 * url is an array of subcategories urls
 */
const catalogStructureData: IF_CatalogStructureData[] = [
  //_____category__1__wtyczki-gniazda
  {
    mainCategoryIndex: 0,
    mainCategoryName: mainCategoriesNames[0],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[0]}`,
    mainCategoryImage: imgMainCategories[0],
    subCategoriesNames: [...wtyczkiGniazdaSubCategoryNames],
    subCategoriesUrls: [...wtyczkiGniazdaSubCategoriesUrls],
    imageData: imgSubCategoryCatalogs[0],
    svgIcons: ['IP54', 'IP67', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__2__gniazda-z-blokada
  {
    mainCategoryIndex: 1,
    mainCategoryName: mainCategoriesNames[1],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[1]}`,
    mainCategoryImage: imgMainCategories[1],
    subCategoriesNames: [...GniazdaZBlokadaSubCategoryNames],
    subCategoriesUrls: [...GniazdaZBlokadaSubCategoryUrls],
    imageData: imgSubCategoryCatalogs[1],
    svgIcons: ['IP54', 'IP67', 'IK08', 'ENEC'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__3__adaptery-przemyslowe
  {
    mainCategoryIndex: 2,
    mainCategoryName: mainCategoriesNames[2],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[2]}`,
    mainCategoryImage: imgMainCategories[2],
    subCategoriesNames: [...adapteryPrzemysloweSubCategoryNames],
    subCategoriesUrls: [...adapteryPrzemysloweSubCategoryUrls],
    imageData: imgSubCategoryCatalogs[2],
    svgIcons: ['IP20', 'IP54', 'IP67'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__4__noSubCategory__gniazda-podwieszane
  {
    mainCategoryIndex: 3,
    mainCategoryName: mainCategoriesNames[3],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[3]}`,
    mainCategoryImage: imgMainCategories[3],
    subCategoriesNames: [...gniazdaPodwieszaneSubCategoryNames],
    subCategoriesUrls: [...gniazdaPodwieszaneSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
    svgIcons: ['IP65', 'IK07'],
    labeledIcons: ['16A', '32A', '63A', '125A'],
  },
  //_____category__5__przedlużacze-będnowe
  {
    mainCategoryIndex: 4,
    mainCategoryName: mainCategoriesNames[4],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[4]}`,
    mainCategoryImage: imgMainCategories[4],
    subCategoriesNames: [...przedluzaczeBebnoweSubCategoryNames],
    subCategoriesUrls: [...przedluzaczeBebnoweSubCategoryUrls],
    imageData: imgSubCategoryCatalogs[4],
    svgIcons: ['IP55', 'IP67', 'IK06'],
    labeledIcons: ['16A'],
  },
  //_____category__6__noSubcategory__rozlaczniki-bezpieczenstwa
  {
    mainCategoryIndex: 5,
    mainCategoryName: mainCategoriesNames[5],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[5]}`,
    mainCategoryImage: imgMainCategories[5],
    subCategoriesNames: [...rozlacznikiBezpieczenstwaSubCategoryNames],
    subCategoriesUrls: [...rozlacznikiBezpieczenstwaSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
    svgIcons: ['IP67', 'IK08'],
    labeledIcons: ['16A', '20A', '25A', '32A', '40A'],
  },
  //_____category__7__noSubcategory__ladowarki-samochodowe
  {
    mainCategoryIndex: 6,
    mainCategoryName: mainCategoriesNames[6],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[6]}`,
    mainCategoryImage: imgMainCategories[6],
    subCategoriesNames: [...ladowarkiPojazdowSubCategoryNames],
    subCategoriesUrls: [...ladowarkiPojazdowSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
    svgIcons: ['IP54', 'IK08'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__8__obudowy-i-rozdzielnice
  {
    mainCategoryIndex: 7,
    mainCategoryName: mainCategoriesNames[7],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[7]}`,
    mainCategoryImage: imgMainCategories[7],
    subCategoriesNames: [...obudowyAndRozdzielniceSubCategoryNames],
    subCategoriesUrls: [...obudowyAndRozdzielniceSubCategoryUrls],
    imageData: imgSubCategoryCatalogs[7],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__9__rozdzielnice-modulowe
  {
    mainCategoryIndex: 8,
    mainCategoryName: mainCategoriesNames[8],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[8]}`,
    mainCategoryImage: imgMainCategories[8],
    subCategoriesNames: [...rozdzielniceModuloweSubCategoryNames],
    subCategoriesUrls: [...rozdzielniceModuloweSubCategoryUrls],
    imageData: imgSubCategoryCatalogs[8],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
  //_____category__10__puszki-instalacyjne
  {
    mainCategoryIndex: 9,
    mainCategoryName: mainCategoriesNames[9],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[9]}`,
    mainCategoryImage: imgMainCategories[9],
    subCategoriesNames: [...puszkiInstalacyjneSubCategoryNames],
    subCategoriesUrls: [...puszkiInstalacyjneSubCategoryUrls],
    imageData: imgSubCategoryCatalogs[9],
    svgIcons: ['IP20', 'IP44', 'IP55', 'IP65', 'IK07', 'FREE', 'UV', 'IZO'],
    // labeledIcons: [''],
  },
  //_____category__11
  {
    mainCategoryIndex: 10,
    mainCategoryName: mainCategoriesNames[10],
    mainCategoryUrl: `${pagesUrl.produkty}/${mainCatPat[10]}`,
    mainCategoryImage: imgMainCategories[10],
    subCategoriesNames: [...osprzetDomowySubCategoryNames],
    subCategoriesUrls: [...osprzetDomowySubCategoryUrls],
    imageData: [...fakeSetOf36Images],
    svgIcons: ['IP65', 'IK08', 'FREE', 'UV', 'IZO', 'MODR'],
    labeledIcons: ['16A', '32A'],
  },
];

export { catalogStructureData };
