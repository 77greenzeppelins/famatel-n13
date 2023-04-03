import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';

import LadowarkiSamochodoweContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/7_ladowarkiSamochodowe/LadowarkiSamochodoweCatContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**--------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <div className="fc flex-col w-full min-h-screen bg-dark">
      <LadowarkiSamochodoweContent
        categoryName={catalogStructureData[6].mainCategoryName}
      />
    </div>
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Ładowarki samochodowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Ładowarki samochodowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą ładowarek samochodowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą ładowarek samochodowych marki Famatel."
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
