import React, { ReactNode } from 'react';
/**TS**/
import { IF_LinkData } from '../../../../utils/TS/typeScriptStaff';
interface Props {
  navStyle: string;
  ulStyle: string;
  dataArray: IF_LinkData[];
  ChildComponent: React.FC<IF_LinkData>;
}
/*
is used in: layouts | ... | <Footer> with <FooterLink> as child;
*/
/**-------------------------------------**/

const NavWithLinks: React.FC<Props> = ({
  navStyle,
  ulStyle,
  dataArray,
  ChildComponent,
}) => {
  /**JSX**/
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        {dataArray.map(item => (
          <ChildComponent key={item.url} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavWithLinks;

interface Props {
  ChildComponent: React.FC<IF_LinkData>;
}
