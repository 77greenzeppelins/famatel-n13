import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './1_wtyczkiPrzenosne/11.1_11_1104-B.webp';
import img2 from './1_wtyczkiPrzenosne/11.1_16_1164.webp';
import img3 from './1_wtyczkiPrzenosne/11.1_catalog_1.webp';
import img4 from './2_gniazdaPrzenosne/11.2_06_2104-B.webp';
import img5 from './2_gniazdaPrzenosne/11.2_11_2164.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/

const imgDomoweSlider: IF[] = [
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
  { image: img3 },
  { image: img3 },
];
export { imgDomoweSlider };
