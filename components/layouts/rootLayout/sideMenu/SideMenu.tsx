import React from 'react';
/**Basic Data*/
import { zIndex } from '../../../../data/_data';

const SideMenu = () => {
  return (
    <div
      className={`fixed top-0 bottom-0 w-[60px] ${zIndex.sideMenu} bg-dark border-r border-light`}
    >
      X
    </div>
  );
};

export default SideMenu;
