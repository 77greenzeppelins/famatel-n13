import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
import GniazdaBlokadaChildren from '../../../components/pagesComponents/_nestedPages/0_kategorie/2_gniazda-z-blokada/GniazdaBlokadaChildren';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <div className="fc flex-col w-full bg-dark">
      <CategoryPageTemplate
        mainCategoryIndex={catalogStructureData[1].mainCategoryIndex}
      >
        <GniazdaBlokadaChildren />
      </CategoryPageTemplate>
    </div>
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Gniazda z rozłącznikiem i blokadą | Famatel Polska</title>
        <meta
          property="og:title"
          content="Gniazda z rozłącznikiem i blokadą &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą gniazd z rozłącznikiem i blokadą marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą gniazd z rozłącznikiem i blokadą marki Famatel."
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
