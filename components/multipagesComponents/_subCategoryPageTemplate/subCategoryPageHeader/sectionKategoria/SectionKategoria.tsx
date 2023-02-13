import Link from 'next/link';
import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithArrowIcon from '../../../../SVG/icons/LinkWithArrowIcon';

const SectionKategoria: React.FunctionComponent<{
  parentCategoryName: string;
  parentCategoryUrl: string;
}> = ({ parentCategoryName, parentCategoryUrl }) => {
  return (
    <div
      className="flex gap-x-4  "
      // className="flex flex-col gap-y-4"
    >
      <SmallPseudoHeader
        text="Kategoria"
        hasBox={true}
        hasVerticalOrnament={false}
      />
      <p className="header-link-label text-grey disable">/</p>
      <Link href={parentCategoryUrl} scroll={false}>
        <div className="flex group">
          <p className="p-small text-grey text-left group-hover:text-light ease-in duration-300 whitespace-nowrap ">
            {parentCategoryName}
          </p>
          <div className="pl-4 ">
            <LinkWithArrowIcon
              containerStyle="fc h-full aspect-square stroke-grey group-hover:stroke-corpo  ease-in duration-300  origin-center"
              //___group-hover:translate-x-1
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SectionKategoria;
