// import { NextPage } from 'next/types';
import Head from 'next/head';
/**Components**/
import OFirmieContent from '../components/pagesComponents/o-firmie/OFirmieContent';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageWrapper from '../components/layouts/pseudoLayouts/pageWrapper/PageWrapper';
// import Layout from '../components/layouts/rootLayout/Layout';
/**TS**/
// import type { NextPageWithLayout } from './_app';
// import type { ReactElement } from 'react';

/**----------------------------------------------**/
// const HomePage: NextPageWithLayout = () => {
//   return (
//     <>
//       <Head>
//         <title>Famatel Polska</title>
//         <meta property="og:title" content="Famatel Polska"></meta>
//         <meta
//           name="description"
//           content="Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!"
//         ></meta>
//         <meta
//           property="og:description"
//           content="Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!"
//         ></meta>
//         {/* <link rel="canonical" href="https://famatel.pl" /> */}
//       </Head>
//       <OFirmieContent />
//       {/* <footer className="h-[25vh] bg-corpo"></footer> */}
//     </>
//   );
// };

// HomePage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

// export default HomePage;

/*****************************************************************************/
//___const Home: NextPage = () => {
const HomePage = () => {
  const router = useRouter();
  /*
  ___1. scrollBar position coordinator
  */
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  useEffect(() => {
    // scrollToTop();
    window.scrollTo(0, 0);
  }, []);

  /**JSX**/
  return (
    <>
      <Head>
        <title>Famatel Polska</title>
        <meta property="og:title" content="Famatel Polska"></meta>
        <meta
          name="description"
          content="Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!"
        ></meta>
        <meta
          property="og:description"
          content="Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!"
        ></meta>
      </Head>
      <OFirmieContent />
    </>
  );
};

export default HomePage;
