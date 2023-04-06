import React from 'react';
import SMFacebook from '../../../../SVG/icons/SMFacebook';
import SMInstagram from '../../../../SVG/icons/SMInstagram';
import SMLinkIn from '../../../../SVG/icons/SMLinkIn';

const SocialMediaBar = () => {
  return (
    <div className="flex gap-x-8">
      <SMInstagram className={'w-4 h-4'} />
      <SMLinkIn className={'w-4 h-4'} />
      <SMFacebook className={'w-4 h-4'} />
    </div>
  );
};

export default SocialMediaBar;
