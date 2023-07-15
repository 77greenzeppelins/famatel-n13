import React, { useState } from 'react';
/**Components**/
/**Basic Data**/
import { mobileMenuData } from '../../../data/_data';
import MobileContactPanel from './mobileContactPanel/MobileContactPanel';
import MobileMenuButton from './mobileMenuButton/MobileMenuButton';
import MobileMenuOverlay from './mobileMenuOverlay/MobileMenuOverlay';

/**------------------------**/
const MobileMenu = () => {
  /**Local States**/
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [roadPrompt, setRoadPrompt] = useState(false);
  /**JSX**/
  return (
    <>
      <MobileMenuButton
        mobileMenuOpener={setIsMobileMenuOpen}
        mobileMenuState={isMobileMenuOpen}
      />
      <MobileMenuOverlay
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuOpener={setIsMobileMenuOpen}
        setRoadPrompt={setRoadPrompt}
        roadPrompt={roadPrompt}
      />
      <MobileContactPanel
        isMobileMenuOpen={isMobileMenuOpen}
        roadPrompt={roadPrompt}
        setRoadPrompt={setRoadPrompt}
        maxW={mobileMenuData.maxW}
        minH={mobileMenuData.minH}
      />
    </>
  );
};

export default MobileMenu;
