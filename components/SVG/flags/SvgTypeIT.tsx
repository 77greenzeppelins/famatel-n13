import React from 'react';
/**Components**/
import SvgTechSocketPL from '../techDrawingsDetails/SvgTechSocketPL';
import SvgTechFlagIT from './SvgTechFlagIT';

/**----------------------------------**/
const SvgTypeIT = () => {
  /**JSX**/
  return (
    <div
      className="fc gap-4 py-2 px-2 border border-greyShade1"
      // style={{ width: 'fit-content' }}
    >
      <SvgTechSocketPL containerStyle="h-[50px] w-[50px] " />
      <SvgTechFlagIT containerStyle="h-[40px] w-[60px] " />
    </div>
  );
};

export default SvgTypeIT;
