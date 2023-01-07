import { mainCategories } from './_data';

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
const wtyczkiGniazdaSubCategoryPaths = [
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
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[0]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[1]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[2]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[3]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[4]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[5]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[6]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[7]}`,
  `${mainCategories[0].url}/${wtyczkiGniazdaSubCategoryPaths[8]}`,
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
  `${mainCategories[1].url}/${GniazdaZBlokadaSubCategoryPaths[0]}`,
  `${mainCategories[1].url}/${GniazdaZBlokadaSubCategoryPaths[1]}`,
  `${mainCategories[1].url}/${GniazdaZBlokadaSubCategoryPaths[2]}`,
  `${mainCategories[1].url}/${GniazdaZBlokadaSubCategoryPaths[3]}`,
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
  `${mainCategories[2].url}/${adapteryPrzemysloweSubCategoryPaths[0]}`,
  `${mainCategories[2].url}/${adapteryPrzemysloweSubCategoryPaths[1]}`,
  `${mainCategories[2].url}/${adapteryPrzemysloweSubCategoryPaths[2]}`,
];

//_____category__4
const gniazdaPodwieszaneSubCategoryNames: string[] = [''];
const gniazdaPodwieszaneSubCategoryPaths: string[] = [''];
const gniazdaPodwieszaneSubCategoryUrls: string[] = [''];

//_____category__5
const przedluzaczeBebnoweSubCategoriesNames: string[] = [
  'Przedłużacze bębnowe IP55 z gniazdami Schuko IP67',
  'Przemysłowe przedłużacze bębnowe z gniazdami IP67',
  'Metalowe przemysłowe przedłużacze bębnowe z gniazdami IP67',
];
const przedluzaczeBebnoweobudowyAndRozdzielnicerozdzielniceModuloweSubCategoryPathss: string[] =
  [
    'przedluzacz-bebnowy-schuko',
    'przemyslowy-przedluzacz-bebnowy',
    'metalowy-przedluzacz-bebnowy',
  ];
const przedluzaczeBebnoweSubCategoriesUrls: string[] = [
  `${mainCategories[4].url}/${przedluzaczeBebnoweobudowyAndRozdzielnicerozdzielniceModuloweSubCategoryPathss[0]}`,
  `${mainCategories[4].url}/${przedluzaczeBebnoweobudowyAndRozdzielnicerozdzielniceModuloweSubCategoryPathss[1]}`,
  `${mainCategories[4].url}/${przedluzaczeBebnoweobudowyAndRozdzielnicerozdzielniceModuloweSubCategoryPathss[2]}`,
];
//_____category__6
const rozlacznikiBezpieczenstwaSubCategoryNames: string[] = [''];
const rozlacznikiBezpieczenstwaSubCategoryPaths: string[] = [''];
const rozlacznikiBezpieczenstwaSubCategoryUrls: string[] = [''];

//_____category__7
const ladowarkiPojazdowSubCategoryNames: string[] = [''];
const ladowarkiPojazdowSubCategoryPaths: string[] = [''];
const ladowarkiPojazdowSubCategoryUrls: string[] = [''];

//_____category__8
const obudowyAndRozdzielniceSubCategoryNames: string[] = [
  'Obudowy puste AcquaCOMBI IP65 ',
  'Rozdzielnice przemysłowe',
  'Obudowy gumowe IP65',
  'Akcesoria',
];
const obudowyAndRozdzielniceSubCategoryPaths = [
  'obudowy-ip65-puste',
  'rozdzielnice-przemyslowe',
  'obudowy-ip65-gumowe',
  'obudowy-akcesoria',
];

const obudowyAndRozdzielniceSubCategoryUrls = [
  `${mainCategories[7].url}/${obudowyAndRozdzielniceSubCategoryPaths[0]}`,
  `${mainCategories[7].url}/${obudowyAndRozdzielniceSubCategoryPaths[1]}`,
  `${mainCategories[7].url}/${obudowyAndRozdzielniceSubCategoryPaths[2]}`,
  `${mainCategories[7].url}/${obudowyAndRozdzielniceSubCategoryPaths[3]}`,
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
const rozdzielniceModuloweSubCategoryPaths = [
  'scienne-ip65',
  'modulowe-ip65',
  'modulowe-ip40',
  'metalowe-modulowe-ip40',
  'metalowe-modulowe-ict',
  'akcesoria',
];
const rozdzielniceModuloweSubCategoryUrls = [
  `${mainCategories[8].url}/${rozdzielniceModuloweSubCategoryPaths[0]}`,
  `${mainCategories[8].url}/${rozdzielniceModuloweSubCategoryPaths[1]}`,
  `${mainCategories[8].url}/${rozdzielniceModuloweSubCategoryPaths[2]}`,
  `${mainCategories[8].url}/${rozdzielniceModuloweSubCategoryPaths[3]}`,
  `${mainCategories[8].url}/${rozdzielniceModuloweSubCategoryPaths[4]}`,
  `${mainCategories[8].url}/${rozdzielniceModuloweSubCategoryPaths[5]}`,
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
const puszkiInstalacyjneSubCategoryUrls = [
  `${mainCategories[9].url}/${puszkiInstalacyjneSubCategoryPaths[0]}`,
  `${mainCategories[9].url}/${puszkiInstalacyjneSubCategoryPaths[1]}`,
  `${mainCategories[9].url}/${puszkiInstalacyjneSubCategoryPaths[2]}`,
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
const osprzetDomowySubCategoryUrls = [
  `${mainCategories[10].url}/${puszkiInstalacyjneSubCategoryPaths[0]}`,
  `${mainCategories[10].url}/${puszkiInstalacyjneSubCategoryPaths[1]}`,
  `${mainCategories[10].url}/${puszkiInstalacyjneSubCategoryPaths[2]}`,
  `${mainCategories[10].url}/${puszkiInstalacyjneSubCategoryPaths[4]}`,
  `${mainCategories[10].url}/${puszkiInstalacyjneSubCategoryPaths[5]}`,
  `${mainCategories[10].url}/${puszkiInstalacyjneSubCategoryPaths[6]}`,
];

const catalogStructureData = [
  //_____category__1
  {
    name: mainCategories[0].fullName,
    subcategories: [...wtyczkiGniazdaSubCategoryNames],
    url: [...wtyczkiGniazdaSubCategoriesUrls],
  },
  //_____category__2
  {
    name: mainCategories[1].fullName,
    subcategories: [...GniazdaZBlokadaSubCategoryNames],
    url: [...GniazdaZBlokadaSubCategoryUrls],
  },
  //_____category__3
  {
    name: mainCategories[2].fullName,
    subcategories: [...adapteryPrzemysloweSubCategoryNames],
    url: [...adapteryPrzemysloweSubCategoryUrls],
  },
  //_____category__4__noSubcategory
  {
    name: mainCategories[3].fullName,
    subcategories: [...gniazdaPodwieszaneSubCategoryNames],
    url: [...gniazdaPodwieszaneSubCategoryUrls],
  },
  //_____category__5
  {
    name: mainCategories[4].fullName,
    subcategories: [...przedluzaczeBebnoweSubCategoriesNames],
    url: [...przedluzaczeBebnoweSubCategoriesUrls],
  },
  //_____category__6__noSubcategory
  {
    name: mainCategories[5].fullName,
    subcategories: [...rozlacznikiBezpieczenstwaSubCategoryNames],
    url: [...rozlacznikiBezpieczenstwaSubCategoryUrls],
  },
  //_____category__7__noSubcategory
  {
    name: mainCategories[6].fullName,
    subcategories: [...ladowarkiPojazdowSubCategoryNames],
    url: [...ladowarkiPojazdowSubCategoryUrls],
  },
  //_____category__8
  {
    name: mainCategories[7].fullName,
    subcategories: [...obudowyAndRozdzielniceSubCategoryNames],
    url: [...obudowyAndRozdzielniceSubCategoryUrls],
  },
  //_____category__9
  {
    name: mainCategories[8].fullName,
    subcategories: [...rozdzielniceModuloweSubCategoryNames],
    url: [...rozdzielniceModuloweSubCategoryUrls],
  },
  //_____category__10
  {
    name: mainCategories[9].fullName,
    subcategories: [...puszkiInstalacyjneSubCategoryNames],
    url: [...puszkiInstalacyjneSubCategoryUrls],
  },
  //_____category__11
  {
    name: mainCategories[10].fullName,
    subcategories: [...osprzetDomowySubCategoryNames],
    url: [...osprzetDomowySubCategoryUrls],
  },
];

export { catalogStructureData };
