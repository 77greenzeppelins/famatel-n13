import Head from 'next/head';
import { ReactElement, useEffect } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import GniazdaPodwieszaneContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/4_gniazdaPodwieszane/GniazdaPodwieszaneCatContent';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**------------------------------------------------------------**/
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

  return (
    <div className="fc flex-col w-full pt-[60px] bg-dark">
      <GniazdaPodwieszaneContent
        categoryName={catalogStructureData[3].mainCategoryName}
      />
    </div>
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Gniazda podwieszane | Famatel Polska</title>
        <meta
          property="og:title"
          content="Gniazda podwieszane &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą gniazd podwieszanych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą gniazd podwieszanych marki Famatel."
        ></meta>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default KategorieProduktowPage;
