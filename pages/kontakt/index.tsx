import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
import Footer from '../../components/layouts/rootLayout/footer/Footer';
/**Components**/
import KontaktContent from '../../components/pagesComponents/kontakt/KontaktContent';

/**---------------------------------------------**/
const KontaktPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  /**JSX**/
  return (
    <>
      <Head>
        <title>Dane kontaktowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Dane kontaktowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Skontaktuj się z nami już dziś! Jeśli szukasz rozwiązań z zakresu elektryki przemysłowej i masz jakiekolwiek pytania, podziel się nimi z nami telefonicznie lub mailowo. Jeśli planujesz nas odwiedzić, pamiętaj, że Famatel Polska mieści sie w Bielawie przy ulicy Willowej 5, ale lepszy dojazd jest od ulicy Strażackiej."
        ></meta>
        <meta
          property="og:description"
          content="Skontaktuj się z nami już dziś! Jeśli szukasz rozwiązań z zakresu elektryki przemysłowej i masz jakiekolwiek pytania, podziel się nimi z nami telefonicznie lub mailowo. Jeśli planujesz nas odwiedzić, pamiętaj, że Famatel Polska mieści sie w Bielawie przy ulicy Willowej 5, ale lepszy dojazd jest od ulicy Strażackiej."
        ></meta>
        <link rel="canonical" href="https://www.famatel.pl/kontakt" />
      </Head>
      <KontaktContent />
      <Footer />
    </>
  );
};

export default KontaktPage;
