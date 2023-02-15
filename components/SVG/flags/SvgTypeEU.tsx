import React from 'react';
/**Components**/
import SvgTechSocketEU from '../techDrawingsDetails/SvgTechSocketEU';
import SvgTechFlagEU from './SvgTechFlagEU';

/**----------------------------------**/
const SvgTypeEU = () => {
  /**JSX**/
  return (
    <div
      className="fc  gap-4 py-2 px-2 border border-greyShade1"
      // style={{ width: 'fit-content' }}
    >
      <SvgTechSocketEU containerStyle="h-[50px] w-[50px] " />
      <SvgTechFlagEU containerStyle="h-[40px] w-[60px] " />
    </div>
  );
};

export default SvgTypeEU;
