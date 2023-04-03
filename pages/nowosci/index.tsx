import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components**/
import Layout from '../../components/layouts/rootLayout/Layout';
import NowosciContent from '../../components/pagesComponents/nowosci/NowosciContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

/**--------------------------------------------**/
const NowosciPage: NextPageWithLayout = () => {
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
