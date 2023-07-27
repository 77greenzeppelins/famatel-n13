import React from 'react';
/**Components**/
import Header from './header/Header';
import Footer from './footer/Footer';
import CookiesPopUp from './cookiesPopUp/CookiesPopUp';
/**Font Staff**/
import localFont from '@next/font/local';
import MobileMenu from '../../multipagesComponents/mobileMenu/MobileMenu';
import PageTransitionHolder from '../pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';

const haasFont = localFont({
  src: '../../../public/fonts/HaasGrotDisp-55Roman.woff2',
});

/**-----------------------------------------------------------------------------**/
export default function AppLayout({ children }: { children: React.ReactNode }) {
  /**JSX**/
  return (
    <div
      data-component="RootLayout__container"
      className={`${haasFont.className} `}
    >
      <Header />
      <PageTransitionHolder>{children}</PageTransitionHolder>
      <MobileMenu />

      <Footer />
      <CookiesPopUp />
    </div>
  );
}
