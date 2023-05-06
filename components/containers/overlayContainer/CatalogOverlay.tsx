import React from 'react';
/**GlobalState Steff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../globalState/globalState';
/**FramerMotion Staff*/
import { AnimatePresence } from 'framer-motion';
import ProduktyDropDownMenu from '../../layouts/rootLayout/header/dropDownMenus/allMenus/produktyDropDownMenu/ProduktyDropDownMenu';

const CatalogOverlay = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);
  /**JSX*/
  return (
    <AnimatePresence>
      {snap.isCatalogOpen ? (
        <div
          data-component="CatalogOverlay"
          className="fixed inset-0 bg-dark  z-[490] pt-[60px]"
        >
          <ProduktyDropDownMenu />
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default CatalogOverlay;
