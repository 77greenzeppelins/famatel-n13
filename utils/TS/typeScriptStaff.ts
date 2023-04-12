import { StaticImageData } from 'next/image';

interface IF_ImgStaticData {
  image: StaticImageData;
  model?: string;
}
/*
used in some _data files in "data / categoriesData"
*/
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

/*
used in some _data files in "data / _catalogStructureData"
*/
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

/*
used in cards
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
  textStyle?: string;
}

/*
used in main dataFile => _data.ts
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
  vModYellow: string;
  vModBlue: string;
  vModRed: string;
  vModDark: string;
  vModViolet: string;
  vModGreen: string;
  vModLight: string;
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

/*
used in data / categoriesData / cat_1_ .... / sunCategories / subCat1_przenośne...
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
  collection?: string[] | string;
  model?: string;
  //___for productPage as "productModel / productName"
  altName?: string;
}

interface IF_CatalogNavPanel {
  linkHeaders?: string[];
  linkNames?: string[];
  linkUrls?: string[];
  //___
  bottomName?: string;
  bottomHeader: string;
  bottomUrl?: string;
  //___
  optionalHeader?: string;
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

/**
 * used in: category "wtyczki-gniazda" / subcategory 1, 2, 3
 */
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
  productCardIndex?: number;
  polesNumber: number;
  polesData: string[];
  ampersData: string[];
  bodyData?: string[][];
  connectionTypeData: string[];
  weightData?: string[];
  wireData: string[];
}
/**
 * used in: wtyczki-gniazda / jednofazowe-tablicowe aka. schuko-tablicowe
 *
 */
interface IF_ProductTechDataSchucoTablicowe {
  productTechData:
    | {
        line1: string[];
        line2: string[];
        connectionType: string[];
        mm: string[];
        weight: string[];
      }
    | {
        line1?: undefined;
        line2?: undefined;
        connectionType?: undefined;
        mm?: undefined;
        weight?: undefined;
      }
    | {
        line1: string[];
        line2: string[];
        weight: string[];
        connectionType?: undefined;
        mm?: undefined;
      };
}

interface IFProdCatDataSchukoTablicowe {
  line1?: {
    label: string;
    value: string;
  };
  line2?: {
    label: string;
    value: string;
  };
  line3?: {
    label: string;
    value: string;
  };
  line4?: {
    label: string;
    value: string;
  };
  line5?: {
    label: string;
    value: string;
  };
  line6?: {
    label: string;
    value: string;
  };
}
interface IFProdCatDataSchuko {
  line1?: {
    label: string;
    value: string;
  };
  line2?: string[];
  line3?: string[];
  line4?: string[];
  line5?: string[];
}
interface IFProdCatDataSchuko2 {
  line1?: {
    label: string;
    value: string;
  };
  line2?: {
    label: string;
    value: string[];
  };
  line3?: {
    label: string;
    value: string[];
  };
  line4?: {
    label: string;
    value: string[];
  };
  line5?: {
    label: string;
    value: string[];
  };
}

interface IF_SvgTech {
  model: string;
  Component: React.FC<{
    basicSize: number;
  }>;
}
/*
used in : doPobrania | background
*/
interface IF_ReactFC {
  Component: React.FC<{
    className: string;
  }>;
}
interface IF_SvgTechTailwind extends IF_ReactFC {
  model: string;
  // Component: React.FC<{
  //   className: string;
  // }>;
}
interface IF_SvgTechTailwindMod1 extends IF_SvgTechTailwind {
  id: string;
}
/*
used in: <NavWithLinks>; all places where "links to pages" work like footer, contactPage...
*/
interface IF_LinkData {
  label: string;
  url: string;
}

interface IF_NormalizedNumbers {
  normalizedValues: {
    x: number;
    y: number;
  };
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
  // IF_ProductPageNavPanel,
  //___
  IF_CatalogCardTableData,
  IF_CatalogCardTablesData,
  IF_ProductsTablesSection,
  //___
  IF_ProductTechDataSchucoTablicowe,
  IFProdCatDataSchukoTablicowe,
  IFProdCatDataSchuko,
  IFProdCatDataSchuko2,
  //___
  IF_CatalogNavPanel,
  //___
  IF_ReactFC,
  IF_SvgTech,
  IF_SvgTechTailwind,
  IF_SvgTechTailwindMod1,
  //___07-IV
  IF_LinkData,
  //___12-IV
  IF_NormalizedNumbers,
};
