import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './dirtyPlug_rect_left_2.2.webp';
import img2 from './dirtyPlug_rect_right_2.2.webp';

/**TS**/
interface IF_ImgOFirmiePage {
  image: StaticImageData;
}

/**...**/
const imgOFirmiePage: IF_ImgOFirmiePage[] = [{ image: img1 }, { image: img2 }];

export { imgOFirmiePage };
