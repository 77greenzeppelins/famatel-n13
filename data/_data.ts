/*...*/
import { imgOfProductsReps } from '../public/images/categories/imgOfProductsReps';
/**TS Staff**/
import {
  IF_MainCategorySpecification,
  IF_CorpoColors,
  IF_PagesUrl,
  IF_MainPagesItem,
} from '../utils/TS/typeScriptStaff';

/**Instant Contact Buttons**/
const linksToInstantContactData = {
  phone: 'mailto:77greenzeppelins@gmail.com',
  mobile: 'tel:798-905-558',
};
// const businessMail = 'mailto:77greenzeppelins@gmail.com';
// const businessPhone = 'tel:798-905-558';

/**Data for Data**/
const corpoColors: IF_CorpoColors = {
  light: '#ffffff',
  orange: '#e74124',
  grey: '#9d9e9f',
  greyShade1: '#6d6e6f',
  greyShade2: '#2f2f2f',
  greyTint1: '#b0b1b2',
  greyTint2: '#d7d8d8',
  dark: '#1d1d1b',
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
  {
    arrayIndex: 3,
    label: menuLinkLabel[3],
    url: pagesUrl.realizacje,
    hasDropDownMenu: false,
  },
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
  'Osprzęt domowy',
];
/*
used in: layout | ... | dropDownMenu | produkty | <ProduktyDropDownMenu>
used in: 'url" is used in _categoryName_data.ts; for instance: _wtyczki-gniazda_data.ts
keys: arrayIndex,name, fullName, url, image
*/
const mainCategories: IF_MainCategorySpecification[] = [
  {
    arrayIndex: 0,
    name: mainCategoriesNames[0],
    fullName: 'Przemysłowe wtyczki i gniazda',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[0]}`,
    image: imgOfProductsReps[0].image,
  },
  {
    arrayIndex: 1,
    name: mainCategoriesNames[1],
    fullName: 'Gniazda z rozłącznikiem i blokadą ',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[1]}`,
    image: imgOfProductsReps[1].image,
  },
  {
    arrayIndex: 2,
    name: mainCategoriesNames[2],
    fullName: 'Adaptery przemysłowe',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[2]}`,
    image: imgOfProductsReps[2].image,
  },
  {
    arrayIndex: 3,
    name: mainCategoriesNames[3],
    fullName: 'Gniazda podwieszane',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[3]}`,
    image: imgOfProductsReps[3].image,
  },
  {
    arrayIndex: 4,
    name: mainCategoriesNames[4],
    fullName: 'Przedłużacze bębnowe',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[4]}`,
    image: imgOfProductsReps[4].image,
  },
  {
    arrayIndex: 5,
    name: mainCategoriesNames[5],
    fullName: 'Rozłączniki bezpieczeństwa',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[5]}`,
    image: imgOfProductsReps[5].image,
  },
  {
    arrayIndex: 6,
    name: mainCategoriesNames[6],
    fullName: 'Ładowarki samochodowe',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[6]}`,
    image: imgOfProductsReps[6].image,
  },
  {
    arrayIndex: 7,
    name: mainCategoriesNames[7],
    fullName: 'Obudowy i rozdzielnice',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[7]}`,
    image: imgOfProductsReps[7].image,
  },
  {
    arrayIndex: 8,
    name: mainCategoriesNames[8],
    fullName: 'Rozdzielnice modułowe',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[8]}`,
    image: imgOfProductsReps[8].image,
  },
  {
    arrayIndex: 9,
    name: mainCategoriesNames[9],
    fullName: 'Puszki instalacyjne',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[9]}`,
    image: imgOfProductsReps[9].image,
  },
  {
    arrayIndex: 10,
    name: mainCategoriesNames[10],
    // fullName: 'Wtyczki, gniazda, adaptery domowe',
    fullName: 'Osprzęt domowy',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[10]}`,
    image: imgOfProductsReps[10].image,
  },
  {
    arrayIndex: 11,
    name: mainCategoriesNames[11],
    fullName: 'Himarsy i dżaweliny',
    url: `${pagesUrl.produkty}/${mainCategoriesPath[11]}`,
    image: imgOfProductsReps[11].image,
  },
];
/*
in set in: layout | overlays |...| <OverlayOpener>
is used in: pagesComponents | _nestedPages | _nestedPages | <WtyczkiGniazdaPrzenosneOverlayManager> => all >SubCategoryNameOverlayManager>s
*/
/*
//___yellow rgb:(217, 187, 30)
//___blue rgb:(19, 73, 118)
//___red rgb:(160, 27, 41)
//___grey rgb:(44, 48,56)
*/
// const vatColorsVivid: IVatColors = {
//   110: '#d9bb1e',
//   230: '#134976',
//   400: '#a01b29',
//   500: '#2c3038',
// };
// const vatColorsPale: IVatColorsPale = {
//   allColors: ['#eedd83', '#768baf', '#d08f78', '#969499'],
//   110: '#eedd83',
//   230: '#768baf',
//   400: '#d08f78',
//   500: '#969499',
//   paleGrey: '#CECFCF',
//   leftSideBody: '#CECFCF', //some light grey
// };
// const vatLowColors: IVatLowColors = {
//   allPaleColors: ['#9c93d1', '#ffffff', '#9cb598', '#ffffff'],
//   violetVivid: '#4b4eaa',
//   violetPale: '#9c93d1',
//   greenVivid: '#458053',
//   greenPale: '#9cb598',
// };

/**Aria staff*/
const closeOverlay = 'przycisk: zamknij okno';
const zIndex = {
  turboModal: 'z-[600]',
  header: 'z-[500]',
  sideMenu: 'z-[400]',
};
export {
  pagesUrl,
  corpoColors,
  menuLinkLabel,
  mainCategories,
  mainCategoriesPath,
  mainPages,
  mainCategoriesNames,
  //__12.02
  linksToInstantContactData,
  closeOverlay,
  zIndex,
};
