import { StaticImageData } from 'next/image';
/**Images**/
import img1 from './category_1_dirtyPlug_1200_1200.webp';
import img2 from './category_2_1200_1200.webp';
import img3 from './category_3_15003.webp';
import img4 from './category_4.1.webp';
import img5 from './category_5_30013.webp';
import img6 from './category_5_30016.webp';

/**TS**/
interface IF_ImgOFirmiePage {
  image: StaticImageData;
}

/**...**/
const imgKategorieProduktowPage: IF_ImgOFirmiePage[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img1 },
  { image: img2 },
  { image: img1 },
  { image: img2 },
  { image: img1 },
];

export { imgKategorieProduktowPage };
