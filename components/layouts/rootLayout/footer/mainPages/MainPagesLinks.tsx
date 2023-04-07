import React from 'react';
/**Components**/
import NavWithLinks from '../../../../_basicComponents/links/x_NavWithLinks/NavWithLinks';
import FooterLink from '../__link/FooterLink';
/**Basic Data**/
import { mainPages } from '../../../../../data/_data';

/**TS**/
import { IF_LinkData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------**/
const MainPagesLinks: React.FC = () => {
  /*
  __1. I need a new array that includes only two properties in each item of original array
  */
  const newArray: IF_LinkData[] = mainPages.map(({ label, url }) => ({
    label,
    url,
  }));

  /**JSX**/
  return (
    <NavWithLinks
      navStyle={'w-full sm:w-[80%]'}
      ulStyle={'flex flex-col gap-y-4'}
      dataArray={newArray}
      ChildComponent={FooterLink}
    />
  );
};

export default MainPagesLinks;
