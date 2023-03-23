/**kind of "index file", colects all files with svgTech staff**/
/*
is used in: sliders | svgImageSwitcher | ... |  <SvgTechSelector>
*/
import { IF_SvgTech } from '../../../utils/TS/typeScriptStaff';

/**TS**/
import { svgTech_1_1 } from './1_wtyczki-gniazda/1.1_przenosne/svgTech_1.1';
import { svgTech_1_2 } from './1_wtyczki-gniazda/1.2_tablicowe/svgTech_1.2';
import { svgTech_2_1 } from './2_gniazda-z-blokada/2.1_tablicowe/svgTech_2.1';
import { svgTech_2_2 } from './2_gniazda-z-blokada/2.2_stale/svgTech_2.2';
import { svgTech_2_3 } from './2_gniazda-z-blokada/2.3_z-opcjami/svgTech_2.3';

const allSvgTech: readonly IF_SvgTech[] = [
  ...svgTech_1_1,
  ...svgTech_1_2,
  ...svgTech_2_1,
  ...svgTech_2_2,
  ...svgTech_2_3,
];

export { allSvgTech };
