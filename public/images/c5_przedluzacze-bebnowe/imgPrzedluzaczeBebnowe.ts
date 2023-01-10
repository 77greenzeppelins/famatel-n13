import { StaticImageData } from 'next/image';
/**Images**/
//___one for 3 products
import img1 from './5.1_30017_18_19.webp';
//__
import img2 from './5.2_30002.webp';
import img3 from './5.2_30004.webp';
import img4 from './5.2_30013.webp';
import img5 from './5.2_30014.webp';
import img6 from './5.2_30015.webp';
import img7 from './5.2_30016.webp';
import img8 from './5.2_30020.webp';
import img9 from './5.2_30021_30021_F.webp';
//__
import img10 from './5.3_30050.webp';
import img11 from './5.3_30051.webp';
import img12 from './5.3_30052.webp';
import img13 from './5.3_30053.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/
const imgPrzedluzaczeBebnowe: IF[] = [
  //___img1 for 3 products
  { image: img1 },
  { image: img1 },
  { image: img1 },
  //___ img9 is for two products
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img9 },
];

export { imgPrzedluzaczeBebnowe };
