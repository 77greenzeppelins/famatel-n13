import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
/**Components*/
import PageTransitionHolder from '../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
/**CSS / Tailwind Staff*/
import './globals.css';
// import '../styles/globals.css';
/**Fonts Staff
 * resource: doc. / https://www.youtube.com/watch?v=L8_98i_bMMA
 **/

import localFont from '@next/font/local';
import ProductPageFixedOverlay from '../components/layouts/pseudoLayouts/productPageFixedOverlay/ProductPageFixedOverlay';
const haasFont = localFont({
  src: '../public/fonts/HaasGrotDisp-55Roman.woff2',
});

// import {x} from '../public/fonts/'

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

  // return getLayout(<Component {...pageProps} />);
  return getLayout(
    <main className={`${haasFont.className} fixed w-full h-full`}>
      <ProductPageFixedOverlay />
      <PageTransitionHolder>
        <Component {...pageProps} />
      </PageTransitionHolder>
      {/* <ProductPageFixedOverlay /> */}
    </main>
  );
}

// import { Roboto } from '@next/font/google';
// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: '400', // ['400', '800']
// });
// import Hass from '@next/font/local';
