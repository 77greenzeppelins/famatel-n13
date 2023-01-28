import Link from 'next/link';
import React, { ReactNode } from 'react';
/**Components**/
import CardFrame from '../__cardFrame/CardFrame';

/**-----------------------------------------------**/
const GridItemCardLayout: React.FunctionComponent<{
  linkHref: string;
  children: ReactNode;
}> = ({ linkHref, children }) => {
  /**JSX**/
  return (
    <div
      id="ProductCard__container"
      className="h-[200px] xs:h-[220px] sm:h-[240px] cursor-pointer group select-none no-sparkling"
    >
      <Link href={linkHref} scroll={false}>
        <CardFrame>
          <div className="w-full h-full">{children}</div>
        </CardFrame>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default GridItemCardLayout;
