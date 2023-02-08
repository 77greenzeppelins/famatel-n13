import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
interface IF_ImgStaticData {
  image: StaticImageData;
}
/**
 * used in some _data files in "data / categoriesData"
 **/
interface IImage {
  image: StaticImageData;
  width: number;
  height: number;
  ratioW: number;
  ratioH: number;
}
interface ISubCategoriesItem {
  arrayIndex: number;
  parentCategoryName: string;
  parentCategoryUrl: string;
  subCategoryName: string;
  subCategoryUrl: string;
  icons?: string[];
}

/**
 * used in some _data files in "data / _catalogStructureData"
 **/
interface IF_CatalogStructureData {
  mainCategoryIndex: number;
  mainCategoryName: string;
  mainCategoryUrl: string;
  mainCategoryImage: IF_ImgStaticData;
  subCategoriesNames: string[];
  subCategoriesUrls: string[];
  imageData: IF_ImgStaticData[];
  //___
  svgIcons: string[];
  labeledIcons?: string[];
}

/**
 * used in cards
 */
interface IF_Card {
  arrayIndex: number;
  label: string;
  url: string;
  // image: StaticImageData;
  imageData: IF_ImgStaticData;
  altLabel?: string;
  heightMattersCondition?: boolean;
  containerStyle?: string;
}

/**
 * used in main dataFile => _data.ts
 */
interface IF_MainCategorySpecification {
  arrayIndex: number;
  name: string;
  fullName: string;
  url: string;
  image: StaticImageData;
}
interface IF_CorpoColors {
  light: string;
  orange: string;
  grey: string;
  greyShade1: string;
  greyShade2: string;
  greyTint1: string;
  greyTint2: string;
  dark: string;
  green: string;
  violet: string;
  vYellow: string;
  vBlue: string;
  vRed: string;
  vDark: string;
}
interface IF_PagesUrl {
  home: string;
  realizacje: string;
  produkty: string;
  nowosci: string;
  doPobrania: string;
  kontakt: string;
}

interface IF_MainPagesItem {
  arrayIndex: number;
  label: string;
  url: string;
  hasDropDownMenu: boolean;
}

/**
 * used in data / categoriesData / cat_1_ .... / sunCategories / subCat1_przenośne...
 */
interface IF_ProductCardData {
  //___crucial properties!!!
  arrayIndex: number;
  path: string;
  imageData: IF_ImgStaticData;
  //___ should be delated...
  productId?: string;
  shortId?: string;
  productName?: string | string[] | undefined;
  //___ for <Card_Product> as labels with significant features
  textIcons?: string[];
  largeTextIcons?: string[];
  //___ for <Card_Product> as product descripions
  type?: string;
  collection?: string[];
  model?: string;
  //___for productPage as "productModel / productName"
  altName?: string;
}

interface IF_ProductPageNavPanel {
  categoryName: string;
  categoryUrl: string;
  subCategoryName: string;
  subCategoryUrl: string;
  productName?: string;
}

interface IF_CatalogCardTableData {
  catalogCardTableData:
    | {
        headerTopData: string[][];
        headerBottomData: string[][];
        headerType: number;
        bodyType: number;
        amper: string;
        rowsData: string[][];
      }
    | {
        headerTopData: string[];
        headerBottomData: string[];
        headerType: number;
        bodyType: number;
        amper: string;
        rowsData: (string | undefined)[][];
      };
}

interface IF_CatalogCardTablesData {
  catalogCardTablesData:
    | (
        | {
            headerTopData: string[][];
            headerBottomData: string[][];
            headerType: number;
            bodyType: number;
            amper: string;
            rowsData: string[][];
          }
        | {
            headerTopData: string[];
            headerBottomData: string[];
            headerType: number;
            bodyType: number;
            amper: string;
            rowsData: (string | undefined)[][];
          }
      )[]
    | undefined;
}
interface IF_ProductsTablesSection extends IF_CatalogCardTablesData {
  productCardIndex: number;
  polesNumber: number;
  polesData: string[];
  ampersData: string[];
  bodyData?: string[][];
  connectionTypeData: string[];
  weightData?: string[];
  wireData: string[];
}

export type {
  ISubCategoriesItem,
  IF_CatalogStructureData,
  IF_ImgStaticData,
  IF_Card,
  IF_MainCategorySpecification,
  IF_CorpoColors,
  IF_PagesUrl,
  IF_MainPagesItem,
  IF_ProductCardData,
  //___
  IF_ProductPageNavPanel,
  //___
  IF_CatalogCardTableData,
  IF_CatalogCardTablesData,
  IF_ProductsTablesSection,
};
