import React from 'react';
/**Basic Data*/
import { zIndex } from '../../../../data/_data';

const SideMenu = () => {
  return (
    <div
      className={`fixed bottom-0 w-[60px] h-screen ${zIndex.sideMenu} bg-dark border-r border-light`}
    >
      X
    </div>
  );
};

export default SideMenu;
