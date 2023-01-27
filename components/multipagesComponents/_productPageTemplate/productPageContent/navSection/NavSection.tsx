import Link from 'next/link';
import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithArrowIcon from '../../../../SVG/icons/LinkWithArrowIcon';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';

/**---------------------------------------------**/
const NavSection: React.FunctionComponent<{
  parentCategoryName: string;
  parentCategoryUrl: string;
  subCategoryName: string;
  subCategoryUrl: string;
  productName: string | undefined;
}> = ({
  parentCategoryName,
  parentCategoryUrl,
  subCategoryName,
  subCategoryUrl,
  productName,
}) => {
  /****/
  return (
    <>
      <div
        className="flex gap-x-4  "
        // className="flex flex-col gap-y-4"
      >
        <SmallPseudoHeader text="Kategoria" />
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
      <div className="flex gap-x-4  ">
        <SmallPseudoHeader text="Podkategoria" />
        <p className="header-link-label text-grey disable">/</p>
        <Link href={subCategoryUrl} scroll={false}>
          <div className="flex group">
            <p className="p-small text-grey text-left group-hover:text-light ease-in duration-300 whitespace-nowrap ">
              {subCategoryName}
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
      <SmallPseudoHeader text="Model" />
      <H1AnimatedPresence uniqueKey={0} text={productName} />
    </>
  );
};

export default NavSection;
