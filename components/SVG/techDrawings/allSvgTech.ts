/**kind of "index file", colects all files with svgTech staff**/
/*
is used in: sliders | svgImageSwitcher | ... |  <SvgTechSelector>
*/
import { IF_SvgTech } from '../../../utils/TS/typeScriptStaff';

/**TS**/
import { svgTech_1_1 } from './1_wtyczki-gniazda/1.1_przenosne/svgTech_1.1';
import { svgTech_1_2 } from './1_wtyczki-gniazda/1.2_tablicowe/svgTech_1.2';
import { svgTech_1_3 } from './1_wtyczki-gniazda/1.3_scienne/svgTech_1.3';
import { svgTech_1_4 } from './1_wtyczki-gniazda/1.4_schuko-tablicowe/svgTech_1.4';
import { svgTech_1_5 } from './1_wtyczki-gniazda/1.5_schuko/svgTech_1.5';
import { svgTech_1_6 } from './1_wtyczki-gniazda/1.6_niskie-napiecia/svgTech_1.6';
import { svgTech_1_7 } from './1_wtyczki-gniazda/1.7_kontenerowe/svgTech_1.7';
import { svgTech_1_8 } from './1_wtyczki-gniazda/1.8_estradowe/svgTech_1.8';
import { svgTech_2_1 } from './2_gniazda-z-blokada/2.1_tablicowe/svgTech_2.1';
import { svgTech_2_2 } from './2_gniazda-z-blokada/2.2_stale/svgTech_2.2';
import { svgTech_2_3 } from './2_gniazda-z-blokada/2.3_z-opcjami/svgTech_2.3';
import { svgTech_3_1_2_3 } from './3_adaptery-przemyslowe/svgTech_3.1_2_3';
import { svgTech_8_1 } from './8_obudowy-rozdzielnice/8.1_puste/svgTech_8.1';
import { svgTech_8_2 } from './8_obudowy-rozdzielnice/8.2_przemyslowe/svgTech_8.2';
import { svgTech_8_3 } from './8_obudowy-rozdzielnice/8.3_gumowe/svgTech_8.3';
import { svgTech_9_1 } from './9_rozdzielnice-modulowe/9.1_scienne/svgTech_9.1';
import { svgTech_9_2 } from './9_rozdzielnice-modulowe/9.2_modulowe/svgTech_9.2';
import { svgTech_10_1 } from './10_puszki/10.1_zamykane/svgTech_10.1';

const allSvgTech: readonly IF_SvgTech[] = [
  ...svgTech_1_1,
  ...svgTech_1_2,
  ...svgTech_1_3,
  ...svgTech_1_4,
  ...svgTech_1_5,
  ...svgTech_1_6,
  ...svgTech_1_7,
  ...svgTech_1_8,
  //___
  ...svgTech_2_1,
  ...svgTech_2_2,
  ...svgTech_2_3,
  ...svgTech_3_1_2_3,
  //___
  ...svgTech_8_1,
  ...svgTech_8_2,
  ...svgTech_8_3,
  //___
  ...svgTech_9_1,
  ...svgTech_9_2,
  //___
  ...svgTech_10_1,
];

export { allSvgTech };
