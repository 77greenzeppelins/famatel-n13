import { StaticImageData } from 'next/image';
//
import category1 from './1_gniazda_wtyczki.webp';
import category2 from './2_gniazda_z_blokada.webp';
import category3 from './3_adaptery-przemyslowe.webp';
import category4 from './4_gniazda-podwieszane.webp';
import category5 from './5_przedluzacze-bebnowe.webp';
import category6 from './6_safety-switch.webp';
import category7 from './7_ladowarki.webp';
import category8 from './8_obudowy.webp';
import category9 from './9_rozdzielnice.webp';
import category10 from './10_puszki-polaczeniowe_scale.webp';
import category11 from './11_domowe.webp';
import category12 from './12_puszki-polaczeniowe.webp';

interface IFImgOfProductsReps {
  image: StaticImageData;
}

const imgOfProductsReps: IFImgOfProductsReps[] = [
  { image: category1 },
  { image: category2 },
  { image: category3 },
  { image: category4 },
  { image: category5 },
  { image: category6 },
  { image: category7 },
  { image: category8 },
  { image: category9 },
  { image: category10 },
  { image: category11 },
  { image: category12 },
];

export { imgOfProductsReps };
