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
    <div className="flex gap-x-4">
      <SmallPseudoHeader text="Kategoria" />
      <p className="header-link-label text-grey disable">/</p>
      <Link href={parentCategoryUrl} scroll={false}>
        <div>
          <p className="header-link-label text-grey disable">
            {parentCategoryName}
          </p>
          {/* <LinkWithArrowIcon /> */}
        </div>
      </Link>
    </div>
  );
};

export default SectionKategoria;
