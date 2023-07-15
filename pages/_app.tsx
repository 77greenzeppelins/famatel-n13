// import { ReactElement, ReactNode } from 'react';
// import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
/**Components*/
import AppLayout from '../components/layouts/rootLayout/AppLayout';
// import Layout from '../components/layouts/rootLayout/Layout';
// import PageTransitionHolder from '../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
/**CSS / Tailwind Staff*/
import './globals.css'; // import '../styles/globals.css';

/**GlobalState Staff*/
// import { globalState } from '../globalState/globalState';

/**TS*/
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

/**---------------------------------------------------------------------------**/
export default function MyApp({ Component, pageProps }: AppProps) {
  /**JSX**/
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
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
