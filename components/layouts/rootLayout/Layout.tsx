import React, { useEffect, useState } from 'react';
/**Components*/
import Header from './header/Header1';
import Header2 from './header/Header';
import MobileMenuButton from '../../multipagesComponents/mobileMenu/mobileMenuButton/MobileMenuButton';
import MobileMenuOverlay from '../../multipagesComponents/mobileMenu/mobileMenuOverlay/MobileMenuOverlay';
import MobileContactPanel from '../../multipagesComponents/mobileMenu/mobileContactPanel/MobileContactPanel';
import Footer from './footer/Footer';
import CookiesPopUp from './cookiesPopUp/CookiesPopUp';
/**Basic Data**/
import { mobileMenuData } from '../../../data/_data';
/**Font Staff**/
import localFont from '@next/font/local';
import PageTransitionHolder from '../pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';

const haasFont = localFont({
  src: '../../../public/fonts/HaasGrotDisp-55Roman.woff2',
});

/**---------------------------------------------------------------------------------**/
export default function Layout({ children }: { children: React.ReactNode }) {
  /**Local States**/
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [roadPrompt, setRoadPrompt] = useState(false);

  useEffect(() => {
    console.log('isMobileMenuOpen', isMobileMenuOpen);
    console.log('roadPrompt', roadPrompt);
  }, [isMobileMenuOpen, roadPrompt]);

  /**JSX**/
  return (
    <div
      data-component="RootLayout__container"
      className={`${haasFont.className} `}
    >
      {/* <PageTransitionHolder>{children}</PageTransitionHolder> */}
      {children}

      <Header2 />

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

      <Footer />
      <CookiesPopUp />
    </div>
  );
}
