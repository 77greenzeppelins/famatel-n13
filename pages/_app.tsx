import { ReactElement, ReactNode, useEffect } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
/**Components*/
import PageTransitionHolder from '../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
/**CSS / Tailwind Staff*/
import './globals.css'; // import '../styles/globals.css';

/**GlobalState Staff*/
import { globalState } from '../globalState/globalState';

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

  useEffect(() => {
    const hasAcceptedCookies =
      localStorage.getItem('hasAcceptedCookies') === 'true';
    if (hasAcceptedCookies) {
      globalState.hasAcceptedCookies = true;
    }
  }, []);

  //var supportsInertiaScrolling = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  return getLayout(
    <PageTransitionHolder>
      <Component {...pageProps} />
    </PageTransitionHolder>

    // </main>
  );
}
