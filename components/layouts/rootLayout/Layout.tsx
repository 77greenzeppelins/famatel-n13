import Link from 'next/link';
import React from 'react';
/**Components*/
import Header from './header/Header';
import SideMenu from './sideMenu/SideMenu';
/** */
import localFont from '@next/font/local';
const haasFont = localFont({
  src: '../../../public/fonts/HaasGrotDisp-55Roman.woff2',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {' '}
      <div
        data-component="RootLayout__container"
        className={haasFont.className}
      >
        <div className="relative z-[10]">{children}</div>

        {/* <SideMenu /> */}
        <Header />
        {/* <div className="fixed top-0 bottom-0 bg-slate-200 w-[60px] z-[400]"></div>{' '} */}
      </div>
    </>
  );
}
