/**TS Staff**/
import {
  // IF_MainCategorySpecification,
  IF_CorpoColors,
  IF_PagesUrl,
  IF_MainPagesItem,
} from '../utils/TS/typeScriptStaff';

/**Instant Contact Buttons**/
const linksToInstantContactData = {
  mail: 'mailto:biuro@famatel.pl',
  mobile: 'tel:697-790-915',
};

/**Data for Data**/
const corpoColors: IF_CorpoColors = {
  //___basic
  light: '#ffffff',
  orange: '#e74124',
  grey: '#9d9e9f',
  dark: '#1d1d1b',
  //___grey modifications
  greyShade1: '#6d6e6f',
  greyShade2: '#2f2f2f',
  greyTint1: '#b0b1b2',
  greyTint2: '#d7d8d8',
  //___vat collors
  vYellow: '#ceae0e',
  vBlue: '#134976',
  vRed: '#a01b29',
  vDark: '#2c3038',
  green: '#32754c',
  violet: '#434592',
  //___vat collors mod
  vModYellow: '#a48b0b',
  vModBlue: '#217dca',
  vModRed: '#cc2234',
  vModDark: '#23262c',
  vModViolet: '#2A1764',
  vModGreen: '#02681d',
  vModLight: '#eaeaea',
};

const pagesUrl: IF_PagesUrl = {
  home: '/',
  realizacje: '/realizacje',
  produkty: '/kategorie-produktow',
  nowosci: '/nowosci',
  doPobrania: '/do-pobrania',
  kontakt: '/kontakt',
};

const menuLinkLabel: string[] = [
  /**used in: _dropDownMenusHolder_data.ts**/
  'O FIRMIE',
  'PRODUKTY',
  'NOWOŚCI',
  'REALIZACJE',
  'DO POBRANIA',
  'KONTAKT',
];

/**used in <Header>; within appPages.map();**/
const mainPages: IF_MainPagesItem[] = [
  {
    arrayIndex: 0,
    label: menuLinkLabel[0],
    url: pagesUrl.home,
    hasDropDownMenu: false,
  },
  {
    arrayIndex: 1,
    label: menuLinkLabel[1],
    url: pagesUrl.produkty,
    hasDropDownMenu: true,
  },
  {
    arrayIndex: 2,
    label: menuLinkLabel[2],
    url: pagesUrl.nowosci,
    hasDropDownMenu: false,
  },
  // {
  //   arrayIndex: 3,
  //   label: menuLinkLabel[3],
  //   url: pagesUrl.realizacje,
  //   hasDropDownMenu: false,
  // },
  {
    arrayIndex: 4,
    label: menuLinkLabel[4],
    url: pagesUrl.doPobrania,
    hasDropDownMenu: false,
  },
  {
    arrayIndex: 5,
    label: menuLinkLabel[5],
    url: pagesUrl.kontakt,
    hasDropDownMenu: false,
  },
];

const mainCategoriesPath: string[] = [
  'wtyczki-gniazda',
  'gniazda-z-blokada',
  'adaptery-przemyslowe',
  'gniazda-podwieszane',
  'przedluzacze-bebnowe',
  'rozlaczniki-bezpieczenstwa',
  'ladowarki-samochodowe',
  'obudowy-i-rozdzielnice',
  'rozdzielnice-modulowe',
  'puszki-instalacyjne',
  'osprzet-domowy',
];
const mainCategoriesNames: string[] = [
  'Przemysłowe wtyczki i gniazda',
  'Gniazda z rozłącznikiem i blokadą',
  'Adaptery przemysłowe',
  'Gniazda podwieszane',
  'Przedłużacze bębnowe',
  'Rozłączniki bezpieczeństwa',
  'Ładowarki samochodowe',
  'Obudowy i rozdzielnice',
  'Rozdzielnice modułowe',
  'Puszki instalacyjne',
  // 'Osprzęt domowy',
];
const mainCategoriesSummaryData = {
  wtyczkiGniazda: { categoryIndex: 0, categoryNema: mainCategoriesNames[0] },
  gniazdaBlokada: { categoryIndex: 1, categoryNema: mainCategoriesNames[1] },
  adapteryPrzemyslowe: {
    categoryIndex: 2,
    categoryNema: mainCategoriesNames[2],
  },
  gniazdaPodwieszane: {
    categoryIndex: 3,
    categoryNema: mainCategoriesNames[3],
  },
  przedluzaczeBebnowe: {
    categoryIndex: 4,
    categoryNema: mainCategoriesNames[4],
  },
  rozlacznikiBezpieczenstwa: {
    categoryIndex: 5,
    categoryNema: mainCategoriesNames[5],
  },
  ladowarkiSamochodowe: {
    categoryIndex: 6,
    categoryNema: mainCategoriesNames[6],
  },
  obudowyRozdzielnice: {
    categoryIndex: 7,
    categoryNema: mainCategoriesNames[7],
  },
  rozdzielniceModulowe: {
    categoryIndex: 8,
    categoryNema: mainCategoriesNames[8],
  },
  puszkiInstalacyjne: {
    categoryIndex: 9,
    categoryNema: mainCategoriesNames[9],
  },
  // osprzetDomowy: {
  //   categoryIndex: 10,
  //   categoryNema: mainCategoriesNames[10],
  // },
};

const splitedPathParts = {
  empty: 0,
  mainPage: 1,
  category: 2,
  subCategory: 3,
  product: 4,
};

/**Aria staff*/
const closeOverlay = 'przycisk: zamknij okno';
/**Layout => z-index**/
// const layoutZIndex = {
//   turboModal: 'z-[600]',
//   header: 'z-[500]',
//   mobileMenuOverlay: 'z-[510]',
//   mobileMenuContactPanel: 'z-[550]',
//   sideMenu: 'z-[400]',
// };

const textLabels = {
  kategoriePage: {
    l1: 'Szczegóły techniczne',
    l2: 'Materiał wykonania',
    l3: 'Normy',
  },
};
const smallPseudoHeaders = {
  l1: 'Karta katalogowa',
  l2: 'Specyfikacja techniczna',
  l3: 'Charakterystyka ogólna',
  l4: 'Normy',
  l5: 'Katalog produktów',
  l6: 'Katalog podkategorii',
  l7: 'Opis',
  l8: 'Zabezpieczenie dla dzieci',
  l9: 'Materiał',
  //___for "katalog navigation"
  n1: 'Kategoria',
  n2: 'Podkategoria',
  n3: 'Produkt',
  n4: 'Produkty',
  n5: 'Podkategorie',
  // nl1: 'Produkt:',
  // nl2: 'Podkategoria:',
  //__for productCard
  // p1: 'Produkt aktualnie niedostępny',
  p1: 'PRODUKT AKTUALNIE NIEDOSTĘPNY',
};

/***...*/
const story = {
  oFirmiePage: {
    pseudoHeader: 'Bezpieczne rozwiązania',
    heroMainText: 'Elektryka przemysłowa',
    animatedText: [
      'Stworzyliśmy ten model, aby wspierać Twoje działania w szczególnie wymagających warunkach.',
      'Od przeszło 30 lat dbamy o Twoje bezpieczeństwo przy inwestycjach z zakresu elektryki przemysłowej.',
      'Nasze rozwiązania znane są Klientom w przeszło 80 krajach na całym świecie.',
      // 'W celu zapewnienia naszym Klientom sprawnej obsługi oparliśmy sie na 8 firmach partnerskich.',
      'Aby zoptymalizować realizację Twoich zamówień oparliśmy sie na 8 firmach partnerskich.',
      'Oddajemy do Twojej dyspozycji 10 kategorii produktowych.',
      'Jeśli działasz w zakresie elektryki przemysłowej na pewno mamy rozwiązanie dla Ciebie!',
    ],
    squareText: [
      { pseudoNumber: '14307', text: 'model' },
      { pseudoNumber: '+30', text: 'lat' },
      { pseudoNumber: '+80', text: 'państw' },
      { pseudoNumber: '8', text: 'business subsidies' },
      { pseudoNumber: '10', text: 'kategorii' },
    ],
  },
  pageKontakt: {
    s1: 'Zespół Famatel Polska zaprasza do kontaktu od poniedziałku do piątku w godzinach 8ºº - 16ºº.',
  },
};

const mobileMenuData = {
  minH: 500,
  maxW: 500,
};

//___should be delated...
const sliderTriggersForTables = {
  md: 'min-w-[700px]',
  lg: 'min-w-[903px]',
};
/**...............**/
export {
  pagesUrl,
  corpoColors,
  menuLinkLabel,
  mainCategoriesSummaryData,
  // mainCategories,
  mainCategoriesPath,
  mainPages,
  mainCategoriesNames,
  //__12.02
  linksToInstantContactData,
  closeOverlay,
  // layoutZIndex,
  //___
  textLabels,
  splitedPathParts,
  smallPseudoHeaders,
  //___
  story,
  //___
  mobileMenuData,
  sliderTriggersForTables,
};

// const mainCategories: IF_MainCategorySpecification[] = [
//   {
//     arrayIndex: 0,
//     name: mainCategoriesNames[0],
//     fullName: 'Przemysłowe wtyczki i gniazda',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[0]}`,
//     image: imgOfProductsReps[0].image,
//   },
//   {
//     arrayIndex: 1,
//     name: mainCategoriesNames[1],
//     fullName: 'Gniazda z rozłącznikiem i blokadą ',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[1]}`,
//     image: imgOfProductsReps[1].image,
//   },
//   {
//     arrayIndex: 2,
//     name: mainCategoriesNames[2],
//     fullName: 'Adaptery przemysłowe',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[2]}`,
//     image: imgOfProductsReps[2].image,
//   },
//   {
//     arrayIndex: 3,
//     name: mainCategoriesNames[3],
//     fullName: 'Gniazda podwieszane',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[3]}`,
//     image: imgOfProductsReps[3].image,
//   },
//   {
//     arrayIndex: 4,
//     name: mainCategoriesNames[4],
//     fullName: 'Przedłużacze bębnowe',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[4]}`,
//     image: imgOfProductsReps[4].image,
//   },
//   {
//     arrayIndex: 5,
//     name: mainCategoriesNames[5],
//     fullName: 'Rozłączniki bezpieczeństwa',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[5]}`,
//     image: imgOfProductsReps[5].image,
//   },
//   {
//     arrayIndex: 6,
//     name: mainCategoriesNames[6],
//     fullName: 'Ładowarki samochodowe',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[6]}`,
//     image: imgOfProductsReps[6].image,
//   },
//   {
//     arrayIndex: 7,
//     name: mainCategoriesNames[7],
//     fullName: 'Obudowy i rozdzielnice',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[7]}`,
//     image: imgOfProductsReps[7].image,
//   },
//   {
//     arrayIndex: 8,
//     name: mainCategoriesNames[8],
//     fullName: 'Rozdzielnice modułowe',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[8]}`,
//     image: imgOfProductsReps[8].image,
//   },
//   {
//     arrayIndex: 9,
//     name: mainCategoriesNames[9],
//     fullName: 'Puszki instalacyjne',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[9]}`,
//     image: imgOfProductsReps[9].image,
//   },
//   {
//     arrayIndex: 10,
//     name: mainCategoriesNames[10],
//     // fullName: 'Wtyczki, gniazda, adaptery domowe',
//     fullName: 'Osprzęt domowy',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[10]}`,
//     image: imgOfProductsReps[10].image,
//   },
//   {
//     arrayIndex: 11,
//     name: mainCategoriesNames[11],
//     fullName: 'Himarsy i dżaweliny',
//     url: `${pagesUrl.produkty}/${mainCategoriesPath[11]}`,
//     image: imgOfProductsReps[11].image,
//   },
// ];
