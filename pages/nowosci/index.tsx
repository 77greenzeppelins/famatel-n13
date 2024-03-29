import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
import PageWrapper from '../../components/layouts/pseudoLayouts/pageWrapper/PageWrapper';
/**Components**/
import NowosciContent from '../../components/pagesComponents/nowosci/NowosciContent';

/**--------------------------------------------**/
const NowosciPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  /**JSX**/
  return (
    <PageWrapper>
      <Head>
        <title>Nowości | Famatel Polska</title>
        <meta
          property="og:title"
          content="Nowości &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Wszystko o najnowszych produktach w ofercie Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Wszystko o najnowszych produktach w ofercie Famatel."
        ></meta>
        <link rel="canonical" href="https://www.famatel.pl/nowosci" />
      </Head>
      <NowosciContent />
      <div className="h-[50vh]" />
    </PageWrapper>
  );
};

export default NowosciPage;
