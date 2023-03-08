import React, { useState } from 'react';
/**Components*/
import Header from './header/Header';
/**Basic Data**/
import { mobileMenuData, layoutZIndex } from '../../../data/_data';
/**Font Staff**/
import localFont from '@next/font/local';
import MobileContactPanel from '../../multipagesComponents/mobileMenu/mobileContactPanel/MobileContactPanel';
import MobileMenuOverlay from '../../multipagesComponents/mobileMenu/mobileMenuOverlay/MobileMenuOverlay';

const haasFont = localFont({
  src: '../../../public/fonts/HaasGrotDisp-55Roman.woff2',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  /**Local State*/
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
        <Header
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          layoutZIndex={layoutZIndex.header}
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
