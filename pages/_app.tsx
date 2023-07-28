import type { AppProps } from 'next/app';
/**Components*/
// import AppLayout from '../components/layouts/rootLayout/AppLayout';
import Header from '../components/layouts/rootLayout/header/Header';
import MobileMenu from '../components/multipagesComponents/mobileMenu/MobileMenu';
import Footer from '../components/layouts/rootLayout/footer/Footer';
import CookiesPopUp from '../components/layouts/rootLayout/cookiesPopUp/CookiesPopUp';
/**CSS / Tailwind Staff**/
import '../styles/globals.css';
/**Font Staff**/
//___my approach: Apply the font in <head>
//___https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
import localFont from '@next/font/local';
import { AnimatePresence } from 'framer-motion';
import FakeOverlay from '../components/layouts/pseudoLayouts/fakeOverlay/FakeOverlay';

const haasFont = localFont({
  src: '../public/fonts/HaasGrotDisp-55Roman.woff2',
});

/**---------------------------------------------------------------------------**/
export default function MyApp({ Component, pageProps }: AppProps) {
  /**JSX**/
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${haasFont.style.fontFamily};
        }
      `}</style>
      {/* <AppLayout>
        <Component {...pageProps} />
      </AppLayout> */}
      <Header />
      <FakeOverlay />
      {/* <AnimatePresence
        mode="sync"
        initial={false}
        // onExitComplete={() => window.scrollTo(0, 0)}
      > */}
      <Component {...pageProps} />
      {/* </AnimatePresence> */}
      <MobileMenu />
      {/* <Footer /> */}
      <CookiesPopUp />
    </>
  );
  // return (
  //   <AppLayout>
  //     <Component {...pageProps} />
  //   </AppLayout>
  // );
}

// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? (page => page);

//   return getLayout(
//     <PageTransitionHolder>
//       <Component {...pageProps} />
//     </PageTransitionHolder>

//     // </main>
//   );
// }
