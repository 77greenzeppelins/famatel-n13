import Head from 'next/head';
import { ReactElement, useEffect } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
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
    <div className="fc flex-col w-full bg-dark">
      <CategoryPageTemplate
        mainCategoryIndex={catalogStructureData[0].mainCategoryIndex}
      />
    </div>
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Przemysłowe wtyczki i gniazda | Famatel Polska</title>
        <meta
          property="og:title"
          content="Przemysłowe wtyczki i gniazda &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą przemysłowych wtyczek i gniazd marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą przemysłowych wtyczek i gniazd marki Famatel."
        ></meta>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default KategorieProduktowPage;
