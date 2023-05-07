import React from 'react';
/**Components**/
import HeaderLink from './headerLink/HeaderLink';
/**Basic Data**/
import { mainPages } from '../../../../../data/_data';

/**-------------------------**/
const MainPagesNav = () => {
  /**JSX**/
  return (
    <ul className="hidden h-full md:flex">
      {mainPages.map(({ arrayIndex, label, url }) => {
        return <HeaderLink key={arrayIndex} url={url} label={label} />;
      })}
    </ul>
  );
};

export default MainPagesNav;
