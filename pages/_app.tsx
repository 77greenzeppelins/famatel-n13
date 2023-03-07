import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
/**Components*/
import PageTransitionHolder from '../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
// import ProductPageFixedOverlay from '../components/layouts/pseudoLayouts/productPageFixedOverlay/ProductPageFixedOverlay';
import MainHtmlElement from '../components/layouts/pseudoLayouts/mainHtmlElement/MainHtmlElement';
/**CSS / Tailwind Staff*/
import './globals.css'; // import '../styles/globals.css';

/**TS*/
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/*--------------------------------------------------------------------------------------------*/
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);

  //var supportsInertiaScrolling = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  // return getLayout(<Component {...pageProps} />);
  return getLayout(
    // <main className={`${haasFont.className} fixed w-full h-full`}>
    <MainHtmlElement>
      {/* <ProductPageFixedOverlay /> */}
      <PageTransitionHolder>
        <Component {...pageProps} />
      </PageTransitionHolder>
    </MainHtmlElement>
    // </main>
  );
}

// import { Roboto } from '@next/font/google';
// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: '400', // ['400', '800']
// });
// import Hass from '@next/font/local';
