/**kind of "index file", colects all files with svgTech staff**/
/*
is used in: sliders | svgImageSwitcher | ... |  <SvgTechSelector>
*/
import { IF_SvgTech } from '../../../utils/TS/typeScriptStaff';

/**TS**/
import { svgTech_1_1 } from './1_wtyczki-gniazda/1.1_przenosne/svgTech_1.1';
import { svgTech_1_2 } from './1_wtyczki-gniazda/1.2_tablicowe/svgTech_1.2';

const allSvgTech: readonly IF_SvgTech[] = [...svgTech_1_1, ...svgTech_1_2];

export { allSvgTech };
