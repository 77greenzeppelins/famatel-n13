import { StaticImageData } from 'next/image';
//
import img1 from './dirtyPlugFromCatalog_2.2.webp';
import img2 from './leftHand_2.2.webp';
import img3 from './rightHand_2.2.webp';
import img4 from './dirtyPlug_rect_left_2.2.webp';
import img5 from './dirtyPlug_rect_right_2.2.webp';

interface IF_ImgOFirmiePage {
  image: StaticImageData;
}

const imgOFirmiePage: IF_ImgOFirmiePage[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

export { imgOFirmiePage };
