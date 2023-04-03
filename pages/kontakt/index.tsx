import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components**/
import Layout from '../../components/layouts/rootLayout/Layout';
import KontaktContent from '../../components/pagesComponents/kontakt/KontaktContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

/**---------------------------------------------**/
const KontaktPage: NextPageWithLayout = () => {
  /**JSX**/
  return <KontaktContent />;
};

KontaktPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Famatel Polska Kontakt</title>
        <meta
          name="description"
          content="Skontaktuj się z nami już dziś! Jeśli szukasz rozwiązań z zakresu elektryki przemysłowej i masz jakiekolwiek pytania, podziel się nimi z nami telefonicznie lub mailowo. Jeśli planujesz nas odwiedzić, pamiętaj, że Famatel Polska mieści sie w Bielawie przy ulicy Willowej 5, ale lepszy dojazd jest od ulicy Strażackiej."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default KontaktPage;
