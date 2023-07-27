import { NextPage } from 'next/types';
import Head from 'next/head';
/**Components**/
import OFirmieContent from '../components/pagesComponents/o-firmie/OFirmieContent';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
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
const Home: NextPage = () => {
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
      <AnimatePresence
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
        >
          <OFirmieContent />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Home;
