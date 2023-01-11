import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './2_modulowe/9.1_01_3902-T.webp';
import img2 from './2_modulowe/9.1_02_3904-T.webp';
import img3 from './2_modulowe/9.1_03_3908-T.webp';
import img4 from './2_modulowe/9.1_04_3912-T.webp';
import img5 from './2_modulowe/9.1_05_3926-T.webp';
import img6 from './2_modulowe/9.1_06_3942-T.webp';
import img7 from './2_modulowe/9.1_07_39018.webp';
import img8 from './2_modulowe/9.1_08_39036.webp';
import img9 from './2_modulowe/9.1_09_39054.webp';
import img10 from './2_modulowe/9.1_10_39072.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/

const imgRozdzielniceModuloweSlider: IF[] = [
  { image: img1 },
  { image: img1 },
  { image: img7 },
  { image: img7 },
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
  { image: img8 },
  { image: img8 },
];
export { imgRozdzielniceModuloweSlider };
