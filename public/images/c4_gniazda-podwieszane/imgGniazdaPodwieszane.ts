import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './27002.webp';
import img2 from './27008.webp';
import img3 from './28000.webp';
import img4 from './28000_MA.webp';

/**TS**/
interface IF {
  image: StaticImageData;
}

/**...**/
const imgGniazdaPodwieszane: IF[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];
const imgGniazdaPodwieszaneFake: IF[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
  { image: img2 },
];

export { imgGniazdaPodwieszane, imgGniazdaPodwieszaneFake };
