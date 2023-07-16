import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components**/
import DoPobraniaContent from '../../components/pagesComponents/doPobrania/DoPobraniaContent';
/**TS**/

/**--------------------------------------------**/
const DoPobraniaPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // useEffect(() => {
  //   scrollToTop();
  // }, []);

  /**JSX**/
  return (
    <>
      <Head>
        <title>Materiały do pobrania | Famatel Polska</title>
        <meta
          property="og:title"
          content="Materiały do pobrania &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Witaj na stronie z materiałami do pobrania. Peły obraz naszej elektryki przemysłowej uzyskasz dzięki najnowszemu katalowi. Poznasz tutaj wszystkie wtyczki, gniazda, czy rozdzielnice przemysłowe w najrozmaitszych konfiguracjach. Jeśli wolisz, możesz pobierać też poszczególne jego rozdziały. Znajdziesz tutaj ponadto deklaracje zgodności technicznej oraz karty techniczne poszczególnych produktów."
        ></meta>
        <meta
          property="og:description"
          content="Witaj na stronie z materiałami do pobrania. Peły obraz naszej elektryki przemysłowej uzyskasz dzięki najnowszemu katalowi. Poznasz tutaj wszystkie wtyczki, gniazda, czy rozdzielnice przemysłowe w najrozmaitszych konfiguracjach. Jeśli wolisz, możesz pobierać też poszczególne jego rozdziały. Znajdziesz tutaj ponadto deklaracje zgodności technicznej oraz karty techniczne poszczególnych produktów."
        ></meta>
        <link rel="canonical" href="https://www.famatel.pl/do-pobrania" />
      </Head>
      <DoPobraniaContent />
    </>
  );
};

// DoPobraniaPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <>
//       <Head>
//         <title>Materiały do pobrania | Famatel Polska</title>
//         <meta
//           property="og:title"
//           content="Materiały do pobrania &nbsp;|&nbsp; Famatel Polska"
//         ></meta>
//         <meta
//           name="description"
//           content="Witaj na stronie z materiałami do pobrania. Peły obraz naszej elektryki przemysłowej uzyskasz dzięki najnowszemu katalowi. Poznasz tutaj wszystkie wtyczki, gniazda, czy rozdzielnice przemysłowe w najrozmaitszych konfiguracjach. Jeśli wolisz, możesz pobierać też poszczególne jego rozdziały. Znajdziesz tutaj ponadto deklaracje zgodności technicznej oraz karty techniczne poszczególnych produktów."
//         ></meta>
//         <meta
//           property="og:description"
//           content="Witaj na stronie z materiałami do pobrania. Peły obraz naszej elektryki przemysłowej uzyskasz dzięki najnowszemu katalowi. Poznasz tutaj wszystkie wtyczki, gniazda, czy rozdzielnice przemysłowe w najrozmaitszych konfiguracjach. Jeśli wolisz, możesz pobierać też poszczególne jego rozdziały. Znajdziesz tutaj ponadto deklaracje zgodności technicznej oraz karty techniczne poszczególnych produktów."
//         ></meta>
//         <link rel="canonical" href="https://www.famatel.pl/do-pobrania" />
//       </Head>
//       <Layout>
//         {/* <NestedLayout>{page}</NestedLayout> */}
//         {page}
//       </Layout>
//     </>
//   );
// };

export default DoPobraniaPage;
