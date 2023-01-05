import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './dirtyPlug_rect_left_2.2.webp';
import img2 from './dirtyPlug_rect_right_2.2.webp';
import img3 from './hangingBox_1600_1600.webp';
import img4 from './safetySwitch_2.webp';
import img5 from './rozdzielnica_6901_2.webp';
import img6 from './safetySwitch_one.webp';
import img7 from './safetySwitch_svgMix_2.webp';

/**TS**/
interface IF_ImgOFirmiePage {
  image: StaticImageData;
}

/**...**/
const imgOFirmiePage: IF_ImgOFirmiePage[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
];

export { imgOFirmiePage };
