import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './3.1_15002.webp';
import img2 from './3.1_16010.webp';
//___
import img3 from './3.2_15001.webp';
import img4 from './3.2_15003.webp';
import img5 from './3.2_15006.webp';
import img6 from './3.2_16000.webp';
import img7 from './3.2_16002.webp';
import img8 from './3.2_16006.webp';
//___
import img9 from './3.3_31004.webp';
import img10 from './3.3_31012.webp';
import img11 from './3.3_31020.webp';
import img12 from './3.3_31040.webp';
import img13 from './3.3_31071.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/
const imgAdapteryPrzemyslowe: IF[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img13 },
];

export { imgAdapteryPrzemyslowe };
