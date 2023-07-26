import type { AppProps } from 'next/app';
/**Components*/
import AppLayout from '../components/layouts/rootLayout/AppLayout';
// import PageTransitionHolder from '../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
/**CSS / Tailwind Staff*/
import '../styles/globals.css';

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
