import { StaticImageData } from 'next/image';

interface ICorpoColors {
  light: string;
  orange: string;
  grey: string;
  greyShade1: string;
  greyShade2: string;
  greyTint1: string;
  greyTint2: string;
  dark: string;
}
interface IPagesUrl {
  home: string;
  realizacje: string;
  produkty: string;
  nowosci: string;
  doPobrania: string;
  kontakt: string;
}

interface mainPagesItem {
  arrayIndex: number;
  label: string;
  url: string;
  hasDropDownMenu: boolean;
}
interface IMainCategoriesItem {
  arrayIndex: number;
  name: string;
  fullName: string;
  url: string;
  image: StaticImageData;
}

//_____________________________________???
// interface IVatColors {
//   110: string;
//   230: string;
//   400: string;
//   500: string;
// }
// interface IVatColorsPale {
//   allColors: string[];
//   110: string;
//   230: string;
//   400: string;
//   500: string;
//   paleGrey: string;
//   leftSideBody: string;
// }
// interface IVatLowColors {
//   allPaleColors: string[];
//   violetVivid: string;
//   violetPale: string;
//   greenVivid: string;
//   greenPale: string;
// }

export type {
  ICorpoColors,
  IPagesUrl,
  mainPagesItem,
  IMainCategoriesItem,
  // ICatalogCardTableType,
  // IVatColors,
  // IVatColorsPale,
  // IVatLowColors,
};
