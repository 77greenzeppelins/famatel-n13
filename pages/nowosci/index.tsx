import Head from 'next/head';
import { ReactElement, useEffect } from 'react';
/**Components**/
import Layout from '../../components/layouts/rootLayout/Layout';
import NowosciContent from '../../components/pagesComponents/nowosci/NowosciContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

/**--------------------------------------------**/
const NowosciPage: NextPageWithLayout = () => {
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
  return <NowosciContent />;
};

NowosciPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
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
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default NowosciPage;
