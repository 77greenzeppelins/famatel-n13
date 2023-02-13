// import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './4_tablicowe-jednofazowe/1.4_01_13953.webp';
import img2 from './2_tablicowe/1.2_07_24377.webp';
import img3 from './3_scienne/1.3_12_23626.webp';
import img4 from './1_przenosne/1.1_03_14304.webp';
import img5 from './5_jednofazowe/1.5_08_188G.webp';
import img6 from './6_niskie-napiecia/1.6_07_23072.webp';
import img7 from './7_chlodnicze/1.7_04_24398.webp';
import img8 from './8_estradowe/1.8_08_17122.webp';
import img9 from './9_camping/1.9_04_13000.webp';

/**TS**/
import { IF_ImgStaticData } from '../../../utils/TS/typeScriptStaff';
// interface IF_ImgStaticData {
//   image: StaticImageData;
// }

/**...**/
const imgWtyczkiGniazda: IF_ImgStaticData[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
];

/**
 * used in: images / kategorieProduktowPage / imgKategorieProduktowPage.ts
 **/
const imgWtyczkiGniazda_subCategoryCatalog: IF_ImgStaticData[] = [
  { image: img4 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
];
export { imgWtyczkiGniazda, imgWtyczkiGniazda_subCategoryCatalog };
