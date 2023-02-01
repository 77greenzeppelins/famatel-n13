/*Images saff*/
import { imgWtyczkiGniazda_01_przenosne } from '../../../../public/images/c1_wtyczki-gniazda/1_przenosne/imgWtyczkiGniazda_01_przenosne';
/**Basic Data*/
import { catalogStructureData } from '../../../_catalogStructure_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const catalogVersion = [
  '13200',
  '14200',
  '14304',
  '14307',
  '23200',
  '24200',
  '24305',
  '24307',
  '13200CR',
  '14200CR',
  '23200CR',
  '24200CR',
  '13311',
];
const wtyczkiGniazdaPrzenosne_SubCategory_data = {
  subCategoryName: catalogStructureData[0].subCategoriesNames[0],
  subCategoryUrl: catalogStructureData[0].subCategoriesUrls[0],
  subCategoryIndex: 0,
};

const productCardsData: IF_ProductCardData[] = [
  {
    arrayIndex: 0,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[0],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka przenośna SpeedPro',
  },
  {
    arrayIndex: 1,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[1],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka przenośna SpeedPro',
  },
  {
    arrayIndex: 2,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip67-63A`,
    textIcons: ['IP67', '63A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[2],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka przenośna SpeedPro',
  },
  {
    arrayIndex: 3,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip67-125A`,
    textIcons: ['IP67', '125A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[3],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka przenośna SpeedPro',
  },
  {
    arrayIndex: 4,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/gniazda-ip54-16A-32A`,
    textIcons: ['IP54', '16A', '32A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[4],
    type: 'Typ: Gniazdo przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo przenośne SpeedPro',
  },
  {
    arrayIndex: 5,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/gniazda-ip67-16A-32A`,
    textIcons: ['IP67', '16A', '32A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[5],
    type: 'Typ: Gniazdo przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo przenośne SpeedPro',
  },
  {
    arrayIndex: 6,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/gniazda-ip67-63A`,
    textIcons: ['IP67', '63A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[6],
    type: 'Typ: Gniazdo przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo przenośne SpeedPro',
  },
  {
    arrayIndex: 7,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/gniazda-ip67-125A`,
    textIcons: ['IP67', '125A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[7],
    type: 'Typ: Gniazdo przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Gniazdo przenośne SpeedPro',
  },
  {
    arrayIndex: 8,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip54-16A-top`,
    textIcons: ['IP54', '16A', 'ENEC 03', 'Montaż bezśrubowy'],
    imageData: imgWtyczkiGniazda_01_przenosne[8],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'TOP SpeedPRO'],
    altName: 'Wtyczka przenośna TOP SpeedPro',
  },
  {
    arrayIndex: 9,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip67-16A-top`,
    textIcons: ['IP67', '16A', 'ENEC 03', 'Montaż bezśrubowy'],
    imageData: imgWtyczkiGniazda_01_przenosne[9],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'TOP SpeedPRO'],
    altName: 'Wtyczka przenośna TOP SpeedPro',
  },
  {
    arrayIndex: 10,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/gniazda-ip54-16A-top`,
    textIcons: ['IP54', '16A', 'ENEC 03', 'Montaż bezśrubowy'],
    imageData: imgWtyczkiGniazda_01_przenosne[10],
    type: 'Typ: Gniazdo przenośne',
    collection: ['Kolekcja:', 'TOP SpeedPRO'],
    altName: 'Gniazdo przenośne TOP SpeedPro',
  },
  {
    arrayIndex: 11,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/gniazda-ip67-16A-top`,
    textIcons: ['IP67', '16A', 'ENEC 03', 'Montaż bezśrubowy'],
    imageData: imgWtyczkiGniazda_01_przenosne[11],
    type: 'Typ: Gniazdo przenośne',
    collection: ['Kolekcja:', 'TOP SpeedPRO'],
    altName: 'Gniazdo przenośne TOP SpeedPro',
  },
  {
    arrayIndex: 12,
    path: `${catalogStructureData[0].subCategoriesUrls[0]}/wtyczki-ip44-16A-32A`,
    textIcons: ['IP44', '16A', '32A', 'ENEC 03'],
    imageData: imgWtyczkiGniazda_01_przenosne[12],
    type: 'Typ: Wtyczki przenośne',
    collection: ['Kolekcja:', 'SpeedPRO'],
    altName: 'Wtyczka przenośna SpeedPro',
  },
];

export { wtyczkiGniazdaPrzenosne_SubCategory_data, productCardsData };
