/**ImagesStaff**/
import {
  fakeSetOf36Images,
  imgMainCategories,
} from '../public/images/categories/imgOfProductsReps';
/**TS**/
import { IF_CatalogStructureData } from '../utils/TS/typeScriptStaff';
/**BasicData**/
import { pagesUrl, mainCategoriesPath, mainCategories } from './_data';

//_____category__1
const wtyczkiGniazdaSubCategoryNames: string[] = [
  'Wtyczki i gniazda przenośne',
  'Wtyczki i gniazda tablicowe',
  'Wtyczki i gniazda ścienne',
  'Wtyczki i gniazda tablicowe jednofazowe (Schuko)',
  'Wtyczki i gniazda jednofazowe (Schuko)',
  'Wtyczki i gniazda na bardzo niskie napięcia',
  'Wtyczki i gniazda do kontenerów chłodniczych',
  'Wtyczki i gniazda do sprzętu estradowego',
  'Wtyczki i gniazda campingowe',
];
const wtyczkiGniazdaSubCategoryPaths: string[] = [
  `przenosne`,
  `tablicowe`,
  `scienne`,
  `tablicowe-jednofazowe`,
  `jednofazowe`,
  `bardzo-niskie-napiecia`,
  `chlodnicze`,
  `estradowe`,
  `campingowe`,
];

const wtyczkiGniazdaSubCategoriesUrls: string[] = [
  // `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[3]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[4]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[5]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[6]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[7]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[0]}/${wtyczkiGniazdaSubCategoryPaths[8]}`,
];

//_____category__2
const GniazdaZBlokadaSubCategoryNames: string[] = [
  'Gniazda tablicowe z blokadą mechaniczną',
  'Gniazda stałe z blokadą mechaniczną',
  'Gniazda z blokadą mechaniczną z opcjonalnymi komponentami',
  'Akcesoria do gniazd z blokadą',
];
const GniazdaZBlokadaSubCategoryPaths: string[] = [
  `gniazda-tablicowe-z-blokada-mechaniczna`,
  `gniazda-stale-z-blokada-mechaniczna`,
  `gniazda-z-blokada-i-komponentami`,
  'akcesoria',
];
const GniazdaZBlokadaSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[1]}/${GniazdaZBlokadaSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[1]}/${GniazdaZBlokadaSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[1]}/${GniazdaZBlokadaSubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[1]}/${GniazdaZBlokadaSubCategoryPaths[3]}`,
];

//_____category__3
const adapteryPrzemysloweSubCategoryNames: string[] = [
  'Adaptery przemysłowe Schuko',
  'Adaptery wielokrotne przemysłowe',
  'Adaptery wielokrotne przemysłowe z przewodem',
];
const adapteryPrzemysloweSubCategoryPaths: string[] = [
  `adaptery-przemyslowe-schuko`,
  `adaptery-wielokrotne-przemyslowe`,
  `adaptery-wielokrotne-przemyslowe-z-przewodem`,
];

const adapteryPrzemysloweSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[2]}/${adapteryPrzemysloweSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[2]}/${adapteryPrzemysloweSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[2]}/${adapteryPrzemysloweSubCategoryPaths[2]}`,
];

//_____category__4
const gniazdaPodwieszaneSubCategoryNames: string[] = ['Gnizada podwieszane'];
const gniazdaPodwieszaneSubCategoryPaths: string[] = ['gniazda-podwieszane'];
const gniazdaPodwieszaneSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[3]}`,
];

//_____category__5
const przedluzaczeBebnoweSubCategoriesNames: string[] = [
  'Przedłużacze bębnowe IP55 z gniazdami Schuko IP67',
  'Przemysłowe przedłużacze bębnowe z gniazdami IP67',
  'Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
];
const przedluzaczeBebnoweobudowePaths: string[] = [
  'przedluzacz-bebnowy-schuko',
  'przemyslowy-przedluzacz-bebnowy',
  'metalowy-przedluzacz-bebnowy',
];
const przedluzaczeBebnoweSubCategoriesUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[4]}/${przedluzaczeBebnoweobudowePaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[4]}/${przedluzaczeBebnoweobudowePaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[4]}/${przedluzaczeBebnoweobudowePaths[2]}`,
];
//_____category__6
const rozlacznikiBezpieczenstwaSubCategoryNames: string[] = [
  'Rozłączniki bezpieczeństwa',
];
const rozlacznikiBezpieczenstwaSubCategoryPaths: string[] = [
  'Rozłączniki bezpieczeństwa',
];
const rozlacznikiBezpieczenstwaSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[5]}`,
];

//_____category__7
const ladowarkiPojazdowSubCategoryNames: string[] = ['Ładowarki samochodowe'];
const ladowarkiPojazdowSubCategoryPaths: string[] = [''];
const ladowarkiPojazdowSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[6]}`,
];

//_____category__8
const obudowyAndRozdzielniceSubCategoryNames: string[] = [
  'Obudowy puste AcquaCOMBI IP65 ',
  'Rozdzielnice przemysłowe',
  'Obudowy gumowe IP65',
  'Akcesoria',
];
const obudowyAndRozdzielniceSubCategoryPaths: string[] = [
  'obudowy-ip65-puste',
  'rozdzielnice-przemyslowe',
  'obudowy-ip65-gumowe',
  'obudowy-akcesoria',
];

const obudowyAndRozdzielniceSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[7]}/${obudowyAndRozdzielniceSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[7]}/${obudowyAndRozdzielniceSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[7]}/${obudowyAndRozdzielniceSubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[7]}/${obudowyAndRozdzielniceSubCategoryPaths[3]}`,
];

//_____category__9
const rozdzielniceModuloweSubCategoryNames: string[] = [
  'Rozdzielnice ścienne IP65',
  'Rozdzielnice modułowe IP65',
  'Rozdzielnice ścienne IP40',
  'Metalowe rozdzielnice modułowe IP40',
  'Metalowe rozdzielnice modułowe ICT',
  'Akcesoria',
];
const rozdzielniceModuloweSubCategoryPaths: string[] = [
  'scienne-ip65',
  'modulowe-ip65',
  'modulowe-ip40',
  'metalowe-modulowe-ip40',
  'metalowe-modulowe-ict',
  'akcesoria',
];
const rozdzielniceModuloweSubCategoryUrls: string[] = [
  `${pagesUrl.produkty}/${mainCategoriesPath[8]}/${rozdzielniceModuloweSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[8]}/${rozdzielniceModuloweSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[8]}/${rozdzielniceModuloweSubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[8]}/${rozdzielniceModuloweSubCategoryPaths[3]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[8]}/${rozdzielniceModuloweSubCategoryPaths[4]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[8]}/${rozdzielniceModuloweSubCategoryPaths[5]}`,
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
  `${pagesUrl.produkty}/${mainCategoriesPath[9]}/${puszkiInstalacyjneSubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[9]}/${puszkiInstalacyjneSubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[9]}/${puszkiInstalacyjneSubCategoryPaths[2]}`,
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
  `${pagesUrl.produkty}/${mainCategoriesPath[10]}/${osprzetDomowySubCategoryPaths[0]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[10]}/${osprzetDomowySubCategoryPaths[1]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[10]}/${osprzetDomowySubCategoryPaths[2]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[10]}/${osprzetDomowySubCategoryPaths[4]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[10]}/${osprzetDomowySubCategoryPaths[5]}`,
  `${pagesUrl.produkty}/${mainCategoriesPath[10]}/${osprzetDomowySubCategoryPaths[6]}`,
];

/**
 * "name" is a name of main category /
 *  "subcategories" is an array of subcategories names
 * url is an array of subcategories urls
 */
const catalogStructureData: IF_CatalogStructureData[] = [
  //_____category__1
  {
    mainCategoryIndex: 0,
    mainCategoryName: mainCategories[0].fullName,
    mainCategoryUrl: mainCategories[0].url,
    mainCategoryImage: imgMainCategories[0],
    subcategoriesNames: [...wtyczkiGniazdaSubCategoryNames],
    subcategoriesUrls: [...wtyczkiGniazdaSubCategoriesUrls],
    imageData: [...fakeSetOf36Images],
  },
  //_____category__2
  {
    mainCategoryIndex: 1,
    mainCategoryName: mainCategories[1].fullName,
    mainCategoryUrl: mainCategories[1].url,
    mainCategoryImage: imgMainCategories[1],
    subcategoriesNames: [...GniazdaZBlokadaSubCategoryNames],
    subcategoriesUrls: [...GniazdaZBlokadaSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  //_____category__3
  {
    mainCategoryIndex: 2,
    mainCategoryName: mainCategories[2].fullName,
    mainCategoryUrl: mainCategories[2].url,
    mainCategoryImage: imgMainCategories[2],
    subcategoriesNames: [...adapteryPrzemysloweSubCategoryNames],
    subcategoriesUrls: [...adapteryPrzemysloweSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  //_____category__4__noSubcategory
  {
    mainCategoryIndex: 3,
    mainCategoryName: mainCategories[3].fullName,
    mainCategoryUrl: mainCategories[3].url,
    mainCategoryImage: imgMainCategories[3],
    subcategoriesNames: [...gniazdaPodwieszaneSubCategoryNames],
    subcategoriesUrls: [...gniazdaPodwieszaneSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__5
  {
    mainCategoryIndex: 4,
    mainCategoryName: mainCategories[4].fullName,
    mainCategoryUrl: mainCategories[4].url,
    mainCategoryImage: imgMainCategories[4],
    subcategoriesNames: [...przedluzaczeBebnoweSubCategoriesNames],
    subcategoriesUrls: [...przedluzaczeBebnoweSubCategoriesUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__6__noSubcategory
  {
    mainCategoryIndex: 5,
    mainCategoryName: mainCategories[5].fullName,
    mainCategoryUrl: mainCategories[5].url,
    mainCategoryImage: imgMainCategories[5],
    subcategoriesNames: [...rozlacznikiBezpieczenstwaSubCategoryNames],
    subcategoriesUrls: [...rozlacznikiBezpieczenstwaSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__7__noSubcategory
  {
    mainCategoryIndex: 6,
    mainCategoryName: mainCategories[6].fullName,
    mainCategoryUrl: mainCategories[6].url,
    mainCategoryImage: imgMainCategories[6],
    subcategoriesNames: [...ladowarkiPojazdowSubCategoryNames],
    subcategoriesUrls: [...ladowarkiPojazdowSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__8
  {
    mainCategoryIndex: 7,
    mainCategoryName: mainCategories[7].fullName,
    mainCategoryUrl: mainCategories[7].url,
    mainCategoryImage: imgMainCategories[7],
    subcategoriesNames: [...obudowyAndRozdzielniceSubCategoryNames],
    subcategoriesUrls: [...obudowyAndRozdzielniceSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__9
  {
    mainCategoryIndex: 8,
    mainCategoryName: mainCategories[8].fullName,
    mainCategoryUrl: mainCategories[8].url,
    mainCategoryImage: imgMainCategories[8],
    subcategoriesNames: [...rozdzielniceModuloweSubCategoryNames],
    subcategoriesUrls: [...rozdzielniceModuloweSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__10
  {
    mainCategoryIndex: 9,
    mainCategoryName: mainCategories[9].fullName,
    mainCategoryUrl: mainCategories[9].url,
    mainCategoryImage: imgMainCategories[9],
    subcategoriesNames: [...puszkiInstalacyjneSubCategoryNames],
    subcategoriesUrls: [...puszkiInstalacyjneSubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
  // //_____category__11
  {
    mainCategoryIndex: 10,
    mainCategoryName: mainCategories[10].fullName,
    mainCategoryUrl: mainCategories[10].url,
    mainCategoryImage: imgMainCategories[10],
    subcategoriesNames: [...osprzetDomowySubCategoryNames],
    subcategoriesUrls: [...osprzetDomowySubCategoryUrls],
    imageData: [...fakeSetOf36Images],
  },
];

export { catalogStructureData };
