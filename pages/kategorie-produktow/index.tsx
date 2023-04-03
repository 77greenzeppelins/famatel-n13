import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../components/layouts/rootLayout/Layout';
import KategorieProduktowContent from '../../components/pagesComponents/kategorie-produktow/KategorieProduktowContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

const KategorieProduktowPage: NextPageWithLayout = () => {
  return <KategorieProduktowContent />;
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Famatel Polska</title>
        <meta
          name="description"
          content="Wybierz interesującą Cię grupę produktów! Nasze wtyczki i gniazda znajdują zastosowanie w najróżniejszych gałęziach przemysłu. Pozwalają na tworzenie ściśle określonych konfiguracji, spełniających indywidualne specyfikacje techniczne."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default KategorieProduktowPage;
