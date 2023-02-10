import React from 'react';
/**Components**/
import SvgTechFlagPL from '../../../../../../SVG/techDrawings/1_wtyczki-gniazda/1.4_schuko-tablicowe/SvgTechFlagPL';
import SvgTechSocketPL from '../../../../../../SVG/techDrawings/1_wtyczki-gniazda/1.4_schuko-tablicowe/SvgTechSocketPL';

/**----------------------------------**/
const SvgTypePl = () => {
  /**JSX**/
  return (
    <div
      className="fc  gap-4 py-2 px-2 border border-greyShade1"
      // style={{ width: 'fit-content' }}
    >
      <SvgTechSocketPL containerStyle="h-[50px] w-[50px] " />
      <SvgTechFlagPL containerStyle="h-[40px] w-[60px] " />
    </div>
  );
};

export default SvgTypePl;
