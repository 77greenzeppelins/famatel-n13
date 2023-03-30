import React from 'react';
import Head from 'next/head';
// import LocomotiveScroll from 'locomotive-scroll';
// import { useRouter } from 'next/router';
/**Fonts Staff
 * resource: doc. & https://www.youtube.com/watch?v=L8_98i_bMMA
 **/
import localFont from '@next/font/local';

// import locScrollInstance from '../../pagesLayouts/locomotiveComponents/locScrollInstance';
// import LocomotiveContainer from '../../pagesLayouts/locomotiveComponents/LocomotiveContainer';
const haasFont = localFont({
  src: '../../../../public/fonts/HaasGrotDisp-55Roman.woff2',
  //___
  // subsets: ["latin"]
  // variable: "--font-haas"
});

/**
 * Component main functions
 * ___0___
 * used in _app.jsx
 * ___1___
 * allowes to introduce font for all pages
 * ___2___
 * allowes general "layout-shift" between "display: fixed" & "display: flex" according to route.pathname"; 25.02.2023 I quit this concept...
 */
const MainHtmlElement: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  /**JSX**/
  return (
    // <LocomotiveContainer>
    <main
      className={`${haasFont.className} flex w-full h-full`}
      // data-scroll-container
    >
      <Head>
        <title>Famatel Polska</title>
        {/*
        resource: https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags
        */}
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta lang="pl" />
        <meta
          name="description"
          content="We are specialised manufacturers in the international electrical sector with more than 30 years of experience developing electrical solutions that provide value to professionals."
          // content="We are specialised manufacturers in the international electrical sector with more than 30 years of experience developing electrical solutions that provide value to professionals."
        ></meta>
      </Head>
      {children}
    </main>
    // </LocomotiveContainer>
  );
};

export default MainHtmlElement;

/**...**/

// useEffect(() => {
// locScrollInstance();
//___required by TS
// const el = document.querySelector('[data-scroll-container]') as HTMLElement;
//__create instance of LocomotiveScroll
// const scroll = new LocomotiveScroll({
//   // ___specify the el property as the scrolling container, which we select using a data attribute...
//   el: el,
//   smooth: true,
//   // multiplier: 0.5,
//   // smartphone: {
//   //   smooth: true,
//   // },
//   // smoothMobile: false,
//   // resetNativeScroll: true,
//   // inertia: 0.75,
// });
// console.log('el', el);
// return () => {
//   if (scroll) scroll.destroy();
// };
// }, []);

// useEffect(() => {
//   let scroll;
//   import('locomotive-scroll').then(locomotiveModule => {
//     scroll = new locomotiveModule.default({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//       smoothMobile: false,
//       resetNativeScroll: true,
//     });
//   });

//   // `useEffect`'s cleanup phase
//   return () => {
//     if (scroll) scroll.destroy();
//   };
// });

{
  //____this might be required as "https://www.appsloveworld.com/reactjs/200/96/how-to-correctly-use-locomotive-scroll-with-next-js-routing?utm_content=cmp-true mentioned": "Locomotive works by initialising itself and reading the actual document size on page load. but the situation with next js routing is that the page loads only once, after that its only components changes, no actual page reloading. so the Scroll instance will assume the page is still the same size on load. this leads to a lot of bugs and page breakage."
  // useEffect(() => window.dispatchEvent(new Event('resize')), [Component]);
  // this way the resize event will trigger every time the page "component" is switched. the locomotive Scroll instance will pick up this event and recalculate the page size according to the new component size.
}

/**useRouter**/
// const route = useRouter();
// const condition = route.pathname === '/';
//   console.log('condition:', condition);
