/*Images saff*/
import { imgPuszkiInstalacyjne_02_dryWall } from '../../../../public/images/c10_puszki-instalacyjne/2_drywall/imgPuszkiInstalacyjne_02_dryWall';
/**Basic Data**/
import { catalogStructureData } from '../../../_catalogStructure_data';
import { smallPseudoHeaders } from '../../../_data';
/**TS**/
import { IF_ProductCardData } from '../../../../utils/TS/typeScriptStaff';

const puszkiDrywall_SubCategory_data = {
  subCategoryName: catalogStructureData[9].subCategoriesNames[1],
  subCategoryUrl: catalogStructureData[9].subCategoriesUrls[1],
  subCategoryIndex: 1,
};

const puszkiDrywall_productCard_data: IF_ProductCardData[] = [
  //___minibox
  {
    arrayIndex: 0,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 43 × 90 × 39 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[0],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3250',
  },
  {
    arrayIndex: 1,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 75 × 75 × 39 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[1],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3250-F',
  },
  {
    arrayIndex: 2,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 85 × 85 × 39 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[2],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3255',
  },
  {
    arrayIndex: 3,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 75 × 75 × 39 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[3],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3256',
  },
  //___
  {
    arrayIndex: 4,
    path: ``,
    // textIcons: ['IP65', 'Wymiary: 45 x Ø 60'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[4],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3257',
  },
  {
    arrayIndex: 5,
    path: ``,
    // textIcons: ['IP65', 'Wymiary: 45 × Ø 70'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[5],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3261',
  },
  {
    arrayIndex: 6,
    // path: `${catalogStructureData[9].subCategoriesUrls[0]}/model-3259`,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 65 × 65 × 45 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[6],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3259',
  },
  {
    arrayIndex: 7,
    // path: `${catalogStructureData[9].subCategoriesUrls[0]}/model-3260`,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 65 × 65 × 45 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[7],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3260',
  },
  {
    arrayIndex: 8,
    path: ``,
    // textIcons: ['IP55', 'Żel izolujący', 'Wymiary: 80 × 80 × 36 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[8],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3251',
  },
  {
    arrayIndex: 9,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 100 × 100 × 45 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[9],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3252',
  },
  {
    arrayIndex: 10,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 103 × 103 × 55 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[10],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3253',
  },
  {
    arrayIndex: 11,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 110 × 152 × 63 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[11],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Model: 3254',
  },
  {
    arrayIndex: 12,
    path: ``,
    // textIcons: ['IP55', 'Wymiary: 135 × 161 × 83 (w/s/g)'],
    imageData: imgPuszkiInstalacyjne_02_dryWall[12],
    type: 'Typ: Puszki Drywall',
    collection: [smallPseudoHeaders.p1],
    model: 'Akcesoria',
  },
];

export { puszkiDrywall_productCard_data, puszkiDrywall_SubCategory_data };
