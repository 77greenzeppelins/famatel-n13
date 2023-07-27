import type { AppProps } from 'next/app';
/**Components*/
// import AppLayout from '../components/layouts/rootLayout/AppLayout';
import CookiesPopUp from '../components/layouts/rootLayout/cookiesPopUp/CookiesPopUp';
import Footer from '../components/layouts/rootLayout/footer/Footer';
import Header from '../components/layouts/rootLayout/header/Header';
import MobileMenu from '../components/multipagesComponents/mobileMenu/MobileMenu';
// import PageTransitionHolder from '../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
/**CSS / Tailwind Staff*/
import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
/**Font Staff**/
import localFont from '@next/font/local';
const haasFont = localFont({
  src: '../public/fonts/HaasGrotDisp-55Roman.woff2',
});
const routingAnimation = {
  in: {
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.4,
    },
  },
  out: {
    opacity: 0,
    // y: 10,
    transition: {
      duration: 0.4,
    },
  },
};
/**---------------------------------------------------------------------------**/
export default function MyApp({ Component, pageProps, router }: AppProps) {
  console.log('router.route:', router.route);
  /**JSX**/
  return (
    <div
      data-component="RootLayout__container"
      className={`${haasFont.className} `}
    >
      <Header />
      {/* <AnimatePresence
        // exitBeforeEnter={true}//depricated
        mode="wait"
        // onExitComplete={() => window.scrollTo(0, 0)}
        // onExitComplete={() => console.log('pathname:', pathname)}
      >
        <motion.main
          key={router.route}
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            y: 10,
            transition: {
              duration: 0.4,
            },
          }}
        > */}
      {/* <main> */}
      <Component {...pageProps} />
      {/* </main> */}
      {/* </motion.main>
      </AnimatePresence> */}
      <MobileMenu />
      <Footer />
      <CookiesPopUp />
    </div>
  );

  // return (
  //   <AppLayout>
  //     <Component {...pageProps} />
  //   </AppLayout>
  // );
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
