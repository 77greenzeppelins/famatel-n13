import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './m1.webp';
import img2 from './m2.webp';
import img3 from './m3.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/
const imgLadowarki: IF[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img2 },
  { image: img3 },
];

const imgLadowarkiSlides: IF[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img1 },
  { image: img2 },
  { image: img2 },
  { image: img3 },
  { image: img3 },
  { image: img1 },
  { image: img1 },
  { image: img3 },
  { image: img3 },
  { image: img2 },
  { image: img2 },
  { image: img1 },
  { image: img1 },
];

export { imgLadowarki, imgLadowarkiSlides };
