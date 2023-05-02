/**TS Staff**/
import {
  // IF_MainCategorySpecification,
  IF_CorpoColors,
  IF_PagesUrl,
  IF_MainPagesItem,
} from '../utils/TS/typeScriptStaff';

/**Instant Contact Buttons**/
const linksToInstantContactData = {
  mail: 'mailto:biuro@famatel.pl', //___to delate
  mailB: 'mailto:biuro@famatel.pl',
  mailGK: 'mailto:grzegorz.kowcz@famatel.pl',
  mobile: 'tel:697-790-915', //___to delate
  mobileGK: 'tel:697-790-915',
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
  'O firmie',
  'Produkty',
  'Nowości',
  'Realizacje',
  'Do pobrania',
  'Kontakt',
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
    heroSection: [
      'Dokładnie tyle kategorii produktów oddajemy do Twojej dyspozycji!',
      '',
    ],
    pseudoHeader: 'Bezpieczne rozwiązania',
    heroMainText: 'Elektryka przemysłowa',
    animatedText: [
      'Stworzyliśmy ten model, aby wspierać Twoje działania w szczególnie wymagających warunkach.',
      'Od przeszło 30 lat dbamy o Twój komfort i bezpieczeństwo przy inwestycjach z zakresu elektryki przemysłowej.',
      'Nasze rozwiązania z zakresu elektryki przemysłowej znane są Klientom w przeszło 80 krajach na całym świecie.',
      // 'W celu zapewnienia naszym Klientom sprawnej obsługi oparliśmy sie na 8 firmach partnerskich.',
      'Aby zoptymalizować realizację Twoich zamówień oparliśmy sie na 8 firmach partnerskich.',
      'Stworzyliśmy 10 kategorii profesjonalnych produktów. To jest nasz wkład w rozwój Twójego biznesu .',
      'Jeśli działasz na polu elektryki przemysłowej na pewno mamy rozwiązanie dla Ciebie!',
    ],
    squareText: [
      { pseudoNumber: '14307', text: 'model' },
      { pseudoNumber: '+30', text: 'lat' },
      { pseudoNumber: '+80', text: 'państw' },
      { pseudoNumber: '8', text: 'business subsidies' },
      { pseudoNumber: '10', text: 'kategorii' },
    ],
  },
  pageProdukty: {
    categoriesDescritpions: [
      //___1
      'Ergonomia, Niezawodność, Bezpieczeństwo, Szybkość podłączenia, Precyzja.Rozbudowana  seria przemysłowych wtyczek i gniazd SpeedPRO jest sumą wszystkich tych właściwości. Zaprojektowane i wyprodukowane zgodnie z najbardziej wymagającymi standardami jakości, gwarantują najlepszą wydajność w ekstremalnych zakresach temperatur, odporność mechaniczną i wodoszczelność.',
      //___2
      'Gniazda z rozłącznikiem i blokadą mechaniczną SpeedPRO dostępne w stopniach szczelności IP44 i IP67 zostały zaprojektowane do użytku w miejscach gdzie bezpieczeństwo jest najważniejsze. Dzięki blokadzie mechanicznej współpracującej z rozłącznikiem ta seria gniazd oferuje idealne rozwiązanie i gwarantuje bezpieczeństwo i jakość instalacji.',
      //___3
      'Rezultatem przemysłowych adapterów Famatel jest szeroki wachlarz możliwości wielokrotnego łącznia i różnych systemów łączenia. Wykonane z materiałów odpornych na udary mechaniczne i warunki atmosferyczne seria ta spełnia wymagania profesjonalnych użytkowników.',
      //___4__gniazda podwieszane
      'Linia mobilnych gniazd podwieszanych gwarantujących wysoki poziom elastyczności na liniach montażowych i w systemach automatyzacji przemysłowej. Dzięki ruch w płaszczyźnie pionowej zwiększa mobilność pracowników oraz stabilność pracy urządzeń. Możliwość montażu z gniazdami IP44 i IP65. ',
      //Górna płytka z otworem na M20 i oznaczeniami na M25 i M32. Śruby i druty podtrzymujące wykonane ze stali nierdzewnej. Metalowy akcesorium do złącza sprężonego powietrza. Wersja ślepa z stopniem ochrony IP44 i wersja wpuszczana IP65. Przepust M20.
      //___5__przedłużacze będnowe
      'Zakres przedłużaczy przemysłowych IP67 firmy Famatel oferuje jakość i niezawodne rozwiązania idealne dla przemysłu, budownictwa i innych miejsc gdzie wymagany jest wysoki stopień szczelności IP67.',
      //___6__rozłączniki bezpieczeństwa
      'Bezpieczeństwo ludzi jest najważniejsze dlatego firma Famatel oddaje do Państwa dyspozycji nową serię rozłączników IP65. Wykonane z materiałów odpornych na uderzenia, korozję i czynniki chemiczne, Seria dostarcza dodatkowy punkt bezpieczeństwa i gwarancji instalacji.',
      //___7__ładowarki samochodowe
      '',
      //___8__
      'Nowa koncepcja przemysłowych obudów IP65 z możliwością budowania modułów w pionie i w poziomie za pomocą elementu łączącego. Asortyment składa się z kilkunastu wodoszczelnych skorelowanych modeli z miejscem na zabezpieczenia (wyłączniki MCB, RCCD, itp.). Dodatkowo oferujemy nasze usługi inżynieryjne w celu dostosowania produktu do konkretych specyfikacji technicznych.',
      //___9
      // 'Pełna gama rozdzielnic przemysłowych okablowanych i wyposażonych zgodnie z potrzebami. Oferujemy nasze usługi inżynieryjne w celu dostosowania produktu do szczególnych wymagań technicznych. W celu uzyskania oferty prosimy o kontakt.',
      //???
      'Rozbudowana oferta rozdzielnic modułowych. Kazda z kolekcji przygotowana została z myślą o potrzebach  ',
      // 'Seria MAGNA składa się z 6 modeli do maksymalnej wielkości 800x600. Dzięki wszechstronności i odporności na działanie czynników zewnętrznych przeznaczone do stosowania w sektorze mieszkaniowym i przemysłowym. Wyposażone w metalową płytę, która pozwala na montaż dowolnego osprzętu elektrycznego i systemów sterowania. Jako opcja do wyposażenia w ramki modułowe jak również w wewnętrzne drzwi bezpieczeństwa. System zamykania z trójkątnym kluczem pozwala na szybki i łatwy dostęp do instalacji wewnętrznych.',
      // 'Nowa seria rozdzielnic modułowych AcquaPLUS IP65 składa się z 4 modeli w rozmiarach od 18 do 72 modułów. Obudowy przeznaczone są do stosowania w sektorze usług oraz w trudnych warunkach. Główne cechy to szybki i łatwy montaż jak również ergonomiczna konstrukcja bezpiecznego systemu otwierania/zamykania drzwi ułatwiająca dostęp do elementów wewnętrznych po zainstalowaniu rozdzielnicy.',
      // 'Nowa seria rozdzielnic modułowych Acqua IP65 składa się z sześciu modeli w rozmiarach od 4 do 42 modułów. Obudowy te przeznaczone są do stosowania w sektorze gospodarstw domowych i w sektorze usług. Zostały zaprojektowane do pracy w otoczeniu o wysokim poziomie wilgoci oraz zapylenia. Szybki i łatwy montaż sprawia, że są gotowe do użycie w każdym środowisku. Ergonomiczna konstrukcja została przebadana w celu ułatwienia dostępu do szafki po zainstalowaniu, umożliwiając łatwe otwieranie/zamykanie drzwi.',
      //___10
      'Nowa koncepcja puszek instalacyjnych składa się z 42 modeli pokrywających wszystkie potrzeby instalacji. Wykonane są z tworzywa termoplastycznego o wysokiej odporności na uderzenia, odpornego na promieniowanie UV oraz bez zawartości halogenów. Puszki o stopniu ochrony IP55 mogą by stosowane w różnych typach instalacji. Nowa konstrukcja dławnic gwarantuje stopień IP55 przy bezpośrednim wprowadzeniu przewodów bez konieczności użycia sztywnych rurek.',
      // 'Nowa seria okienek modułowych IP67 Famatel pokrywa potrzeby każdej instalacji. Wyprodukowane z poliwęglanu zapewniają wysoką wytrzymałość mechaniczną oraz odporność na działanie innych czynników zewnętrznych. System zawiasów został zaprojektowany tak, aby zapewnić doskonałe zamknięcie.',
    ],
  },
  pageKontakt: {
    s1: 'Zespół Famatel Polska zaprasza do kontaktu od poniedziałku do piątku w godzinach 8ºº - 16ºº.',
    daneFirmy: [
      'FAMATEL Polska Sp. z o.o.',
      'Ul. Willowa 5',
      '58-260 Bielawa',
      'NIP 8822120823',
      'KRS 0000525431',
    ],
    dojazd: ['ul. Strażacka', '58-260 Bielawa'],
    dojazdNav: ['50.68051, 16.60300'],
  },
  //___https://www.gov.pl/web/gov/polityka-dotyczaca-cookies
  cookies: {
    popup:
      'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies, a korzystanie z naszej witryny oznacza ich akceptację. W każdym momencie mogą Państwo dokonać zmiany ustawień w przeglądarce.',
    link: 'W każdym momencie mogą Państwo dokonać zmiany ustawień w przeglądarce.',
    // popup:
    //   'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki',
    policy:
      'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki.',
    comment1:
      'Dla Państwa wygody serwis Famatel.pl używa plików cookies po to, by dostosować serwis do potrzeb użytkowników, a także w celach statystycznych.',
    comment2:
      'Pliki cookies (tzw. ciasteczka) to niewielkie pliki tekstowe wysyłane przez odwiedzany serwis internetowy do urządzenia internauty (komputer, smartfon itp.). Nie zawierają one żadnych danych osobowych.',
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
