import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components**/
import NotaPrawnaContent from '../../components/pagesComponents/nota-prawna/NotaPrawnaContent';

/**---------------------------------------------**/
const NotaPrawnaPage: NextPage = () => {
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
        <title>Nota Prawna | Famatel Polska</title>
        <meta
          property="og:title"
          content="Nota Prawna &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta name="description" content="Nota Prawna"></meta>
        <meta property="og:description" content="Nota Prawna"></meta>
        <link rel="canonical" href="https://www.famatel.pl/kontakt" />
      </Head>
      <NotaPrawnaContent />
    </>
  );
};

export default NotaPrawnaPage;
