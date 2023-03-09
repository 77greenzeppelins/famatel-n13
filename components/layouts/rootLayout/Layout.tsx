import React, { useState } from 'react';
/**Components*/
import Header from './header/Header';
import MobileMenuButton from '../../multipagesComponents/mobileMenu/mobileMenuButton/MobileMenuButton';
import MobileMenuOverlay from '../../multipagesComponents/mobileMenu/mobileMenuOverlay/MobileMenuOverlay';
import MobileContactPanel from '../../multipagesComponents/mobileMenu/mobileContactPanel/MobileContactPanel';
/**Basic Data**/
import { mobileMenuData } from '../../../data/_data';
/**Font Staff**/
import localFont from '@next/font/local';

const haasFont = localFont({
  src: '../../../public/fonts/HaasGrotDisp-55Roman.woff2',
});

/**---------------------------------------------------------------------------------**/
export default function Layout({ children }: { children: React.ReactNode }) {
  /**Local States**/
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [roadPrompt, setRoadPrompt] = useState(false);

  /**JSX**/
  return (
    <>
      {' '}
      <div
        data-component="RootLayout__container"
        className={`${haasFont.className}`}
      >
        <div className="relative z-[10]">{children}</div>
        <Header />
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
          setRoadPrompt={setRoadPrompt}
          maxW={mobileMenuData.maxW}
          minH={mobileMenuData.minH}
        />
      </div>
    </>
  );
}
