import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import SvgChildrenSave from '../../../../../SVG/techDrawings/1_wtyczki-gniazda/1.4_schuko-tablicowe/SvgChildrenSave';

const ProtectionSection = () => {
  return (
    <div>
      <SmallPseudoHeader
        text="Zabezpieczenie dla dzieci"
        hasBox={true}
        hasVerticalOrnament={false}
      />
      <div className="pt-[24px]">
        <SvgChildrenSave containerStyle=" w-[90%] xs:w-[50%] lg:w-[30%]" />
      </div>
    </div>
  );
};

export default ProtectionSection;
