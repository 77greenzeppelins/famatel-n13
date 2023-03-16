import React from 'react';
/**Components**/

import LinkWithTextAndIcon from '../../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';

/**--------------------------------------------------------**/
const LinkedLine: React.FC<{ label: string }> = ({ label }) => {
  /**JSX**/
  return (
    <div className="flex">
      <div className="h-full w-[24px]" />
      <LinkWithTextAndIcon
        linkHref={'/'}
        pLabel={label}
        //___for <SmallPseudoHeader>
        hasBox={false}
        hasVerticalOrnament={false}
        pStyle="text-grey text-[0.825rem] lg:text-[0.825rem] xxxl:text-[0.825rem] tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025"
        // aStyle="fc gap-4 h-full  ease-in duration-[0.4s] delay-[0.1s] bg-transparent focus:outline-none group pr-2 py-1"
      />
    </div>
  );
};

export default LinkedLine;
