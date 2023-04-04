/*Basic Data*/
import { ISubCategoriesItem } from '../../../utils/TS/typeScriptStaff';
import { corpoColors } from '../../_data';
import { catalogStructureData } from '../../_catalogStructure_data';

/*
Data for data
*/

const pseudoHeroData = {
  svgIcons: ['IP54', 'IP68'],
  labeledIcons: ['16A', '32A', '63A', '125A'],
  iconColorBG: corpoColors.dark,
  iconColorFG: corpoColors.grey,
  iconSize: 80,
};

const rozdzielniceModuloweSubCategoriesData: ISubCategoriesItem[] = [
  //___1__rozdzielnice-modulowe__scienne
  {
    arrayIndex: 0,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[0],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[0],
  },
  //___2__rozdzielnice-modulowe__modulowe
  {
    arrayIndex: 1,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[1],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[1],
  },
  //___3__rozdzielnice-modulowe__modulowe-nuona
  {
    arrayIndex: 2,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[2],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[2],
  },
  //___4__rozdzielnice-modulowe__modulowe-nuonaPlus
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[3],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[3],
  },
  //___5__rozdzielnice-modulowe__modulowe-vita
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[4],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[4],
  },
  //___6__rozdzielnice-modulowe__scienne-icp
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[5],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[5],
  },
  //___7__rozdzielnice-modulowe__metalowe-ip40
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[6],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[6],
  },
  //___8__rozdzielnice-modulowe__metalowe-ict
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[7],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[7],
  },
  //___9__rozdzielnice-modulowe__akcesoria
  {
    arrayIndex: 3,
    parentCategoryName: catalogStructureData[8].mainCategoryName,
    parentCategoryUrl: catalogStructureData[8].mainCategoryUrl,
    subCategoryName: catalogStructureData[8].subCategoriesNames[8],
    subCategoryUrl: catalogStructureData[8].subCategoriesUrls[8],
  },
];

// const daneTechniczneText: IDaneTechniczneText[] = [
//   { t1: 'Napięcie znamionowe', t2: '100 V - 500 V' },
//   { t1: 'Napięcie izolacji', t2: '500 V' },
//   {
//     t1: 'Częstotliwość',
//     t2: '-50 / 500 Hz',
//   },
//   { t1: 'Prąd znamionowy', t2: '16 A - 32 A - 63 A - 125 A' },
//   { t1: 'Stopień ochrony IE(IP C / EN 60529)', t2: 'IP54 / IP68' },
//   { t1: 'Maksymalna testowana temperatura robocza', t2: '+80 °C' },
//   { t1: 'Temperatura użytkowa zgodnie z normą', t2: '-25 °C / +40 °C' },
// ];

// const materialText: IDaneTechniczneText[] = [
//   { t1: 'Body material', t2: 'Poliamid6 - ABS' },
//   { t1: 'Contact material', t2: 'Brass - Nickel-plated brass' },
// ];

const regulationText: string[] = ['IEC/CEI/EN 60309-1 / IEC/CEI/EN 60309-2'];

const textStyle: string =
  'text-light text-[1.5rem] xl:text-[1.85rem] xxxl:text-[2.25rem] tracking-[0.09rem] leading-normal';

export {
  pseudoHeroData,
  rozdzielniceModuloweSubCategoriesData,
  // daneTechniczneText,
  // materialText,
  regulationText,
  textStyle,
};
