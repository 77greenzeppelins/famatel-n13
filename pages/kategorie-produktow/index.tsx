import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
/**Components*/
import KategorieProduktowContent from '../../components/pagesComponents/kategorie-produktow/KategorieProduktowContent';

const KategorieProduktowPage: NextPage = () => {
  const router = useRouter();
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  /**JSX*/
  return (
    <>
      <Head>
        <title>Kategorie produktów | Famatel Polska</title>
        <meta
          property="og:title"
          content="Kategorie produktów &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Wybierz interesującą Cię grupę produktów! Nasze wtyczki i gniazda znajdują zastosowanie w najróżniejszych gałęziach przemysłu. Pozwalają na tworzenie ściśle określonych konfiguracji, spełniających indywidualne specyfikacje techniczne."
        ></meta>
        <meta
          property="og:description"
          content="Wybierz interesującą Cię grupę produktów! Nasze wtyczki i gniazda znajdują zastosowanie w najróżniejszych gałęziach przemysłu. Pozwalają na tworzenie ściśle określonych konfiguracji, spełniających indywidualne specyfikacje techniczne."
        ></meta>
        <link rel="canonical" href="https://www.famatel.pl/produkty" />
      </Head>
      <KategorieProduktowContent />
    </>
  );
};

export default KategorieProduktowPage;
