import React from 'react';
/**Components**/
import Header from './header/Header';
import Footer from './footer/Footer';
import CookiesPopUp from './cookiesPopUp/CookiesPopUp';
import MobileMenu from '../../multipagesComponents/mobileMenu/MobileMenu';
/**-----------------------------------------------------------------------------**/
export default function AppLayout({ children }: { children: React.ReactNode }) {
  /**JSX**/
  return (
    <>
      <Header />
      {children}
      <MobileMenu />
      <Footer />
      <CookiesPopUp />
    </>
  );
}

/*
<AnimatePresence
      // initial={false}
      // exitBeforeEnter={true}//depricated
      mode="wait"
      // onExitComplete={() => window.scrollTo(0, 0)}
      // onExitComplete={() => console.log('pathname:', pathname)}
    >
      <motion.div
        data-container="PageTransitionHolder__container"
        className="w-full h-full"
        key={router.route}
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>

*/

/**Font Staff**/
// import localFont from '@next/font/local';
// const haasFont = localFont({
//   src: '../../../public/fonts/HaasGrotDisp-55Roman.woff2',
//   variable: '--font-hass',
// });
