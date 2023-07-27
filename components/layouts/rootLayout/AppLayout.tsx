import React from 'react';
/**Components**/
import Header from './header/Header';
import Footer from './footer/Footer';
import CookiesPopUp from './cookiesPopUp/CookiesPopUp';
import MobileMenu from '../../multipagesComponents/mobileMenu/MobileMenu';
/**Font Staff**/
import localFont from '@next/font/local';

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
      {children}
      <MobileMenu />
      <Footer />
      <CookiesPopUp />
    </div>
  );
}
