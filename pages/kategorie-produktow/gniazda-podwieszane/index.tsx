import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import GniazdaPodwieszaneContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/4_gniazdaPodwieszane/GniazdaPodwieszaneCatContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="fc flex-col w-full min-h-screen bg-dark">
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
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default KategorieProduktowPage;
