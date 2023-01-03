import React from 'react';
import { useRouter } from 'next/router';
/**Fonts Staff
 * resource: doc. & https://www.youtube.com/watch?v=L8_98i_bMMA
 **/
import localFont from '@next/font/local';
const haasFont = localFont({
  src: '../../../../public/fonts/HaasGrotDisp-55Roman.woff2',
});

/**
 * Component main functions
 * ___0___
 * used in _app.jsx
 * ___1___
 * allowes to introduce font for all pages
 * ___2___
 * allowes general "layout-shift" between "display: fixed" & "display: flex" according to route.pathname"
 */
const MainHtmlElement: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  /**useRouter**/
  const route = useRouter();
  const condition = route.pathname === '/';
  //   console.log('condition:', condition);

  /**JSX**/
  return (
    <main
      className={`${haasFont.className} ${
        condition ? 'fixed' : 'flex'
      } w-full h-full`}
    >
      {children}
    </main>
  );
};

export default MainHtmlElement;
