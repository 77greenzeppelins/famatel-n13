import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './final_dirty_plug_1500_left.webp';

import img3 from './final_dirty_socket_1500_right.webp';
import img2 from './final_dirty_plug_1500_right_2.webp';

/**TS**/
interface IF_ImgOFirmiePage {
  image: StaticImageData;
}

/**...**/
const imgOFirmiePage: IF_ImgOFirmiePage[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
];

export { imgOFirmiePage };
