import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './1_zamykane/10.1_10_3027.webp';
import img2 from './1_zamykane/10.1_19_3015.webp';
import img3 from './1_zamykane/10.1_43_44_3067.webp';
import img4 from './1_zamykane/10.1_45_46_3069.webp';
import img5 from './2_drywall/10.2_catalog_3251.webp';
import img6 from './3_osadzone/10.3_06_3201T.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/

const imgPuszkiInstalacyjneSlider: IF[] = [
  { image: img1 },
  { image: img1 },
  { image: img2 },
  { image: img2 },
  { image: img3 },
  { image: img3 },
  { image: img4 },
  { image: img4 },
  { image: img5 },
  { image: img5 },
  { image: img6 },
  { image: img6 },
];
export { imgPuszkiInstalacyjneSlider };
